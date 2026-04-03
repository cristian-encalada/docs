import type { ElectronicsProject } from './projectTypes'

type ElectronicsProjectsData = {
  [locale: string]: ElectronicsProject[]
}

const electronicsProjectsData: ElectronicsProjectsData = {
  en: [
    {
      title: 'Arduino Smart Sensor',
      category: 'electronics',
      description:
        'Sample IoT sensor network concept using Arduino and MQTT for home environmental monitoring.',
      image: '/static/images/ce_logo_dark.svg',
      href: 'https://www.arduino.cc/',
      tags: ['iot', 'arduino', 'sensors'],
      date: '2024-01-10',
      hardware: ['Arduino Uno', 'DHT22', 'MQTT broker'],
      techStack: [
        { name: 'Arduino', color: '#00979D' },
        { name: 'MQTT', color: '#660066' },
      ],
      githubUrl: 'https://github.com/cristian-encalada',
      documentation: 'https://www.arduino.cc/reference/',
    },
    {
      title: 'ESP32 MQTT Client',
      category: 'electronics',
      description:
        'Lightweight embedded client for publishing telemetry over Wi-Fi using ESP32 and secure MQTT.',
      image: '/static/images/ce_logo_light.svg',
      tags: ['esp32', 'mqtt', 'wifi'],
      date: '2024-02-01',
      hardware: ['ESP32', 'I2C sensors'],
      techStack: [{ name: 'ESP32', color: '#E7352C' }],
      githubUrl: 'https://github.com/cristian-encalada',
    },
    {
      title: 'Raspberry Pi Home Hub',
      category: 'electronics',
      description:
        'Edge gateway prototype on Raspberry Pi for aggregating sensor data and local automation.',
      image: '/static/images/ce_logo_dark.svg',
      tags: ['raspberry-pi', 'linux', 'automation'],
      date: '2024-02-20',
      hardware: ['Raspberry Pi 4', 'GPIO sensors'],
      techStack: [{ name: 'Python', color: '#3776AB' }],
      documentation: 'https://www.raspberrypi.com/documentation/',
    },
  ],
  es: [
    {
      title: 'Sensor inteligente Arduino',
      category: 'electronics',
      description:
        'Concepto de red de sensores IoT con Arduino y MQTT para monitoreo ambiental en el hogar.',
      image: '/static/images/ce_logo_dark.svg',
      href: 'https://www.arduino.cc/',
      tags: ['iot', 'arduino', 'sensors'],
      date: '2024-01-10',
      hardware: ['Arduino Uno', 'DHT22', 'Broker MQTT'],
      techStack: [
        { name: 'Arduino', color: '#00979D' },
        { name: 'MQTT', color: '#660066' },
      ],
      githubUrl: 'https://github.com/cristian-encalada',
      documentation: 'https://www.arduino.cc/reference/',
    },
    {
      title: 'Cliente MQTT ESP32',
      category: 'electronics',
      description:
        'Cliente embebido ligero para publicar telemetría por Wi-Fi con ESP32 y MQTT seguro.',
      image: '/static/images/ce_logo_light.svg',
      tags: ['esp32', 'mqtt', 'wifi'],
      date: '2024-02-01',
      hardware: ['ESP32', 'Sensores I2C'],
      techStack: [{ name: 'ESP32', color: '#E7352C' }],
      githubUrl: 'https://github.com/cristian-encalada',
    },
    {
      title: 'Raspberry Pi hub doméstico',
      category: 'electronics',
      description:
        'Prototipo de gateway en Raspberry Pi para agregar datos de sensores y automatización local.',
      image: '/static/images/ce_logo_dark.svg',
      tags: ['raspberry-pi', 'linux', 'automation'],
      date: '2024-02-20',
      hardware: ['Raspberry Pi 4', 'Sensores GPIO'],
      techStack: [{ name: 'Python', color: '#3776AB' }],
      documentation: 'https://www.raspberrypi.com/documentation/',
    },
  ],
}

export default electronicsProjectsData
