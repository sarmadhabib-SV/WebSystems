/* Home page demo interaction: simulate "vision analysis" */
(function () {
  const input = document.querySelector("[data-demo-input]");
  const drop = document.querySelector("[data-demo-drop]");
  const preview = document.querySelector("[data-demo-preview]");
  const status = document.querySelector("[data-demo-status]");
  const progress = document.querySelector("[data-demo-progress]");
  const results = document.querySelector("[data-demo-results]");

  if (!input || !drop || !preview || !status || !progress || !results) return;

  const random = (min, max) => Math.random() * (max - min) + min;
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  const setStatus = (text, tone) => {
    status.textContent = text;
    status.dataset.tone = tone || "";
  };

  const readFileAsDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(reader.error || new Error("Read failed"));
      reader.readAsDataURL(file);
    });

  async function runDemo(file) {
    results.innerHTML = "";
    progress.style.width = "0%";
    setStatus("Uploading…", "muted");

    const dataUrl = await readFileAsDataUrl(file);
    preview.src = dataUrl;
    preview.alt = file.name;

    const start = performance.now();
    const durationMs = clamp(random(1400, 2400), 900, 3200);

    function tick(now) {
      const t = clamp((now - start) / durationMs, 0, 1);
      progress.style.width = `${Math.round(t * 100)}%`;
      if (t < 1) {
        requestAnimationFrame(tick);
        return;
      }
      setStatus("Analysis complete.", "good");

      const conf = (n) => `${Math.round(n * 100)}%`;
      const detections = [
        { label: "Defect-free surface", score: clamp(random(0.76, 0.97), 0, 1), tone: "good" },
        { label: "Edge anomaly", score: clamp(random(0.12, 0.28), 0, 1), tone: "warn" },
        { label: "Lighting issue", score: clamp(random(0.05, 0.20), 0, 1), tone: "muted" },
      ].sort((a, b) => b.score - a.score);

      results.innerHTML = detections
        .map(
          (d) => `
          <div class="d-flex justify-content-between align-items-center py-2 border-bottom border-white border-opacity-10">
            <div class="small">${d.label}</div>
            <span class="badge rounded-pill bg-${d.tone === "good" ? "success" : d.tone === "warn" ? "warning" : "secondary"}">${conf(d.score)}</span>
          </div>
        `
        )
        .join("");
    }

    setStatus("Running model…", "muted");
    requestAnimationFrame(tick);
  }

  const acceptFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setStatus("Please choose an image file (PNG/JPG/WebP).", "bad");
      return;
    }
    setStatus("Ready.", "muted");
    runDemo(file).catch(() => setStatus("Something went wrong reading that image.", "bad"));
  };

  input.addEventListener("change", () => acceptFile(input.files && input.files[0]));

  // Drag/drop behavior
  const setHover = (on) => drop.classList.toggle("demo-drop--hover", on);
  ["dragenter", "dragover"].forEach((evt) =>
    drop.addEventListener(evt, (e) => {
      e.preventDefault();
      e.stopPropagation();
      setHover(true);
    })
  );
  ["dragleave", "drop"].forEach((evt) =>
    drop.addEventListener(evt, (e) => {
      e.preventDefault();
      e.stopPropagation();
      setHover(false);
    })
  );
  drop.addEventListener("drop", (e) => {
    const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    acceptFile(file);
  });
})();

