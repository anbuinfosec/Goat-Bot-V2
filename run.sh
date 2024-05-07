#!/bin/bash

PM2_PROCESS_NAME="GoatBot"
APP_FILE="index.js"

log() {
    echo "$(date +'%Y-%m-%d %H:%M:%S') - $1"
}

start_or_restart_process() {
    if pm2 describe "$PM2_PROCESS_NAME" &> /dev/null; then
        log "Restarting existing server..."
        pm2 restart "$PM2_PROCESS_NAME"
    else
        log "Starting new server..."
        pm2 start "$APP_FILE" --name "$PM2_PROCESS_NAME"
    fi
}

show_logs() {
    log "Showing logs for the application..."
    pm2 logs "$PM2_PROCESS_NAME"
}

main() {
    start_or_restart_process
    show_logs
}

main
