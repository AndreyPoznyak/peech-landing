## This code related to web2app landing pages

"start": "webpack-dev-server --config webpack.dev.js --mode development",
"prod-build": "webpack --config webpack.prod.js --mode production",
"build": "landing=button pixel=1 npm run prod-build && landing=button pixel=2 npm run prod-build && landing=redirect pixel=1 npm run prod-build && landing=redirect pixel=2 npm run prod-build",
"preview": "npm run build && http-server docs"

