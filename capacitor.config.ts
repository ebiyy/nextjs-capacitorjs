import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'nextjs-capacitorjs',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    "url": "http://192.168.11.2:3000",
    "cleartext": true
  }
};

export default config;
