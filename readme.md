# Get Started
## Database setup
Copy env-example to .env and fill the necessary fields
```
# MYSQL
DB_HOST = ''
DB_NAME = ''
DB_USERNAME = ''
DB_PASSWORD = ''
DB_PREFIX = ""

```

## Install
```
composer install && yarn install
```


# Info

This framework is customized with the combination of existing library.

# Model
The data model is based on Laravel User Model.

# Template Engine

Template Engine is powered by http://platesphp.com/v3/
and generate minifier is powered by https://github.com/voku/HtmlMin

More data can be find in:
```
config
    \view.php
```


# INFO

if not working properly, you might have to run :
```
composer dump-autoload
```
