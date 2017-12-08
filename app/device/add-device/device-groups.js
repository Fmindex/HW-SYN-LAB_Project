export default class deviceGroups {

  static allGroups = [
    {
      title: 'Home Connext Recommends',
      devices: {
        'bulb': {
          title: 'Light Bulbs',
          source: require('./image/bulb.png'),
          width: 33,
          height: 44,
        },
        'lock': {
          title: 'Locks',
          source: require('./image/lock.png'),
          width: 28,
          height: 44,
        },
        'outlet': {
          title: 'Outlets',
          source: require('./image/socket.png'),
          width: 40,
          height: 40,
        },
        'temp': {
          title: 'Thermostats',
          source: require('./image/temp.png'),
          width: 37,
          height: 34,
        },
      }
    },
    {
      title: 'Home Connext Recommends',
      devices: {
        'camera': {
          title: 'Cameras',
          source: require('./image/dome-camera.png'),
          width: 38,
          height: 30,
          groups: [
            {
              title: 'Samsung',
              application: {
                title: '',
                source: require('./image/samsung.png'),
                width: 97,
                height: 96,
              },
              devices: {
                'smartcam-hd-pro-1080p-full-hd-wifi-camera': {
                  title: 'SmartCam HD Pro 1080p Full HD WiFi Camera',
                  width: 194,
                  height: 160,
                  source: require('./image/smartcam-hd-pro-1080p-full-hd-wifi-camera.png'),
                }
              }
            }
          ]
        },
        'doorbell': {
          title: 'Doorbells',
          source: require('./image/doorbell.png'),
          width: 35,
          height: 35,
          groups: [],
        },
        'garage': {
          title: 'Garage Doors',
          source: require('./image/garage.png'),
          width: 36,
          height: 32,
          groups: [],
        },
        'bulb': {
          title: 'Light Bulbs',
          source: require('./image/bulb.png'),
          width: 33,
          height: 44,
          groups: [
            {
              title: 'Philips',
              application: {
                title: '',
                source: require('./image/philips.png'),
                width: 96,
                height: 96,
              },
              devices: {
                'hue-white-single-bulb-e26': {
                  title: 'Hue White Single bulb E26',
                  width: 88,
                  height: 160,
                  source: require('./image/hue-white-single-bulb-e26.png'),
                },
                'hue-white-and-color-ambiance-single-bulb-e26': {
                  title: 'Hue White and color ambiance Single bulb E26',
                  width: 188,
                  height: 160,
                  source: require('./image/hue-white-and-color-ambiance-single-bulb-e26.png'),
                },
              }
            }
          ],
        },
        'lock': {
          title: 'Locks',
          source: require('./image/lock.png'),
          width: 28,
          height: 44,
          groups: [],
        },
        'outlet': {
          title: 'Outlets',
          source: require('./image/socket.png'),
          width: 40,
          height: 40,
          groups: [
            {
              title: 'Wemo',
              application: {
                title: '',
                source: require('./image/wemo.png'),
                width: 102,
                height: 96,
              },
              devices: {
                'wemo-switch-smart-plug': {
                  title: 'Wemo® Switch Smart Plug',
                  width: 150,
                  height: 150,
                  source: require('./image/wemo-switch-smart-plug.png'),
                },
                'wemo-insight-smart-plug': {
                  title: 'Wemo® Insight Smart Plug',
                  width: 146,
                  height: 160,
                  source: require('./image/wemo-insight-smart-plug.png'),
                },
              }
            }
          ],
        },
        'remote': {
          title: 'Remotes & Buttons',
          source: require('./image/remote.png'),
          width: 24,
          height: 42,
          groups: [
            {
              title: 'Wemo',
              application: {
                title: '',
                source: require('./image/wemo.png'),
                width: 102,
                height: 96,
              },
              devices: {
                'wemo-light-switch': {
                  title: 'Wemo® Light Switch',
                  width: 150,
                  height: 150,
                  source: require('./image/wemo-light-switch.png'),
                }
              }
            }
          ],
        },
        'sensor': {
          title: 'Sensors',
          source: require('./image/sensor.png'),
          width: 27,
          height: 32,
          groups: [
            {
              title: 'SmartThings',
              application: {
                title: '',
                source: require('./image/smartthings.png'),
                width: 96,
                height: 96,
              },
              devices: {
                'samsung-smartthings-arrival-sensor': {
                  title: 'Samsung SmartThings Arrival Sensor',
                  width: 94,
                  height: 150,
                  source: require('./image/samsung-smartthings-arrival-sensor.png'),
                },
                'samsung-smartthings-motion-sensor': {
                  title: 'Samsung SmartThings Motion Sensor',
                  width: 169,
                  height: 150,
                  source: require('./image/samsung-smartthings-motion-sensor.png'),
                },
                'samsung-smartthings-multipurpose-sensor': {
                  title: 'Samsung SmartThings Multipurpose Sensor',
                  width: 200,
                  height: 150,
                  source: require('./image/samsung-smartthings-multipurpose-sensor.png'),
                },
                'samsung-smartthings-water-leak-sensor': {
                  title: 'Samsung SmartThings Water Leak Sensor',
                  width: 119,
                  height: 150,
                  source: require('./image/samsung-smartthings-water-leak-sensor.png'),
                },
              }
            },
            {
              title: 'Fibaro',
              application: {
                title: '',
                source: require('./image/fibaro.png'),
                width: 96,
                height: 96,
              },
              devices: {
                'fibaro-motion-sensor': {
                  title: 'Fibaro Motion Sensor',
                  width: 273,
                  height: 127,
                  source: require('./image/fibaro-motion-sensor.png'),
                }
              }
            }
          ],
        },
        'alarm': {
          title: 'Smoke Detectors & Alarms',
          source: require('./image/alarm.png'),
          width: 34,
          height: 34,
          groups: [
            {
              title: 'First Alert',
              application: {
                title: '',
                source: require('./image/first-alert.png'),
                width: 96,
                height: 96,
              },
              devices: {
                'first-alert-wireless-smoke-fire-and-carbon-monoxide-alarm': {
                  title: 'First Alert-Wireless Smoke/Fire and Carbon Monoxide Alarm',
                  width: 150,
                  height: 150,
                  source: require('./image/first-alert-wireless-smoke-fire-and-carbon-monoxide-alarm.png'),
                }
              }
            }
          ],
        },
        'speaker': {
          title: 'Speakers',
          source: require('./image/speaker.png'),
          width: 20,
          height: 35,
          groups: [
            {
              title: 'Amazon alexa',
              application: {
                title: '',
                source: require('./image/amazon-alexa.png'),
                width: 96,
                height: 96,
              },
              devices: {
                'echo-dot-2nd-generation': {
                  title: 'Echo Dot (2nd Generation)',
                  width: 150,
                  height: 150,
                  source: require('./image/echo-dot-2nd-generation.png'),
                },
                'all-new-echo-2nd-generation': {
                  title: 'All-new Echo (2nd Generation)',
                  width: 77,
                  height: 150,
                  source: require('./image/all-new-echo-2nd-generation.png'),
                },
                'echo': {
                  title: 'Echo',
                  width: 57,
                  height: 150,
                  source: require('./image/echo.png'),
                },
                'echo-spot-black': {
                  title: 'Echo Spot - Black',
                  width: 154,
                  height: 150,
                  source: require('./image/echo-spot-black.png'),
                },
                'echo-show': {
                  title: 'Echo Show',
                  width: 150,
                  height: 150,
                  source: require('./image/echo-show.png'),
                },
              }
            }
          ],
        },
      }
    }
  ];
}