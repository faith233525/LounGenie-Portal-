#!/usr/bin/env python3
"""
LounGenie Portal Server
Simple HTTP server to serve the LounGenie Portal locally
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

def start_portal(port=8080):
    """Start the LounGenie Portal server"""
    
    # Change to the directory containing the portal files
    portal_dir = Path(__file__).parent
    os.chdir(portal_dir)
    
    # Check if index.html exists
    if not Path('index.html').exists():
        print("❌ Error: index.html not found!")
        print("Please ensure you're running this from the portal directory.")
        sys.exit(1)
    
    # Create HTTP server
    Handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", port), Handler) as httpd:
            portal_url = f"http://localhost:{port}"
            
            print("🚀 Starting LounGenie Portal...")
            print(f"📍 Server address: {portal_url}")
            print(f"📁 Serving files from: {portal_dir}")
            print("🌐 Opening portal in your default browser...")
            print("\n💡 Press Ctrl+C to stop the server")
            
            # Open the portal in the default web browser
            webbrowser.open(portal_url)
            
            # Start serving
            print(f"\n✅ LounGenie Portal is now running at {portal_url}")
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Port {port} is already in use. Trying port {port + 1}...")
            start_portal(port + 1)
        else:
            print(f"❌ Error starting server: {e}")
            sys.exit(1)

if __name__ == "__main__":
    print("🎯 LounGenie Portal Launcher")
    print("=" * 40)
    
    # Check for custom port argument
    port = 8080
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print("❌ Invalid port number. Using default port 8080.")
    
    start_portal(port)