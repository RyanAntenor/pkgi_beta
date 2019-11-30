<?php

define("ROOT", dirname(__FILE__) . '/../' );
define("DB_PREFIX", "ra_");
header_remove("X-Powered-By"); 
define('POST_PATH_PATTERN', '/explore/(.*)?/');