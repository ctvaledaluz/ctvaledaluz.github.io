#!/bin/sh

npm rebuild esbuild

exec "$@"

echo "ok" 
