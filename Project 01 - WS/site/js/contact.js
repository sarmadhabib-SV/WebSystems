/* Contact page interaction: validate + store last message */
(function () {
  const form = document.querySelector("[data-contact-form]");
  const toast = document.querySelector("[data-contact-toast]");
  const toastBody = document.querySelector("[data-contact-toast-body]");

  if (!form) return;

  const fields = {
    name: form.querySelector("[name='name']"),
    email: form.querySelector("[name='email']"),
    message: form.querySelector("[name='message']"),
  };

  function showToast(text, kind) {
    if (!toast || !toastBody) return;
    toastBody.textContent = text;
    toast.dataset.kind = kind || "ok";
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 3200);
  }

  function validate() {
    const name = (fields.name?.value || "").trim();
    const email = (fields.email?.value || "").trim();
    const message = (fields.message?.value || "").trim();

    if (name.length < 2) return { ok: false, msg: "Please enter your name." };
    if (!/^\S+@\S+\.\S+$/.test(email)) return { ok: false, msg: "Please enter a valid email." };
    if (message.length < 10) return { ok: false, msg: "Message should be at least 10 characters." };
    return { ok: true, name, email, message };
  }

  // Prefill if available
  try {
    const saved = JSON.parse(localStorage.getItem("amoura:lastContact") || "null");
    if (saved && typeof saved === "object") {
      if (fields.name && typeof saved.name === "string") fields.name.value = saved.name;
      if (fields.email && typeof saved.email === "string") fields.email.value = saved.email;
      if (fields.message && typeof saved.message === "string") fields.message.value = saved.message;
    }
  } catch {
    // ignore
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const r = validate();
    if (!r.ok) {
      showToast(r.msg, "bad");
      return;
    }
    try {
      localStorage.setItem("amoura:lastContact", JSON.stringify({ name: r.name, email: r.email, message: r.message }));
    } catch {
      // ignore
    }
    form.reset();
    showToast("Message saved locally. We’ll get back to you within 1 business day.", "ok");
  });
})();

