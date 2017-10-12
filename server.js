'use strict';

const PG = require('pg');
const FS = require('fs');
const EXPRESS = require('express');
const PORT = process.env.PORT || 3000;

const APP = EXPRESS();
