FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
  && apt-get install -y --no-install-recommends apache2 ca-certificates \
  && rm -rf /var/lib/apt/lists/*

RUN a2enmod rewrite headers expires

COPY site/ /var/www/html/

RUN chown -R www-data:www-data /var/www/html \
  && find /var/www/html -type d -exec chmod 755 {} \; \
  && find /var/www/html -type f -exec chmod 644 {} \;

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]

