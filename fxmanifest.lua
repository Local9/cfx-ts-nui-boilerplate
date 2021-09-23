fx_version 'cerulean'
game { 'gta5' }

shared_script 'config.js'
server_script 'dist/server/bundle.js'
client_script 'dist/client/bundle.js'
shared_script 'dist/shared/bundle.js'

files {
    'dist/ui/index.html',
    'dist/ui/**/*',
}

ui_page 'dist/ui/index.html'
-- ui_page 'http://localhost:3000'