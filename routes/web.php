<?php

Route::get('/{all}', 'FrontController@index')->where('all', '.*');
