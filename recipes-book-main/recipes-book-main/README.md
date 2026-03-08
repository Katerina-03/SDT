# Приложение для хранения кулинарных рецептов и планирования покупок

Сгенерировано на основе .yaml файла в папке api

# Запуск

> docker-compose up

- Сервер запустится на порту 8080
- Prometheus запустится на порту 8081
- Grafana запустится на порту 8082

# Спецификация

https://github.com/Katerina-03/SDT/blob/main/recipes-book-main/recipes-book-main/api/openapi.yaml

# Swagger
https://github.com/Katerina-03/SDT/blob/main/recipes-book-main/recipes-book-main/%D0%9B%D0%A0-2.pdf

# Метрики

Prometheus + Grafana
- стандартные метрики NodeJS приложений
- пользовательская метрика "Число запросов"
- панель создается автоматически

Пример панели:

![alt text](./report/grafana.png)

# Логи

Loki + Promtail
- вывод всех логов
- вывод только логов уровня "ошибка" (имитируется с некоторой вероятностью при запросе на любой эндпоинт)

Пример панели:

![alt text](./report/loki.png)
