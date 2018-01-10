export enum AddressClass {
  Sido = 'A',
  Sigungu = 'B',
  Emdong = 'C'
}

export interface AddressUnit {
  class: AddressClass
  y_coor: string
  x_coor: string
  name: string
  code: string
  subClassList?: AddressUnit[]
}

export interface Sido extends AddressUnit {
  class: AddressClass.Sido
  subClassList: Sigungu[]
}

export interface Sigungu extends AddressUnit {
  class: AddressClass.Sigungu
  subClassList: Emdong[]
}

export interface Emdong extends AddressUnit {
  class: AddressClass.Emdong
}

export default [
  {
    class: 'A',
    y_coor: '1952053.04791',
    x_coor: '953931.981873',
    name: '서울특별시',
    code: '11',
    subClassList: [
      {
        class: 'B',
        y_coor: '1946543.81012',
        x_coor: '960002.761475',
        name: '강남구',
        code: '230',
        subClassList: [
          {
            class: 'C',
            y_coor: '1942618.53528',
            x_coor: '960876.14209',
            name: '개포1동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1943480.02069',
            x_coor: '961905.377686',
            name: '개포2동',
            code: '80'
          },
          {
            class: 'C',
            y_coor: '1942274.13971',
            x_coor: '960357.025085',
            name: '개포4동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1945904.67633',
            x_coor: '958334.764282',
            name: '논현1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1946541.66589',
            x_coor: '959102.708313',
            name: '논현2동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1943870.35413',
            x_coor: '960819.661926',
            name: '대치1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1944870.7251',
            x_coor: '961480.198608',
            name: '대치2동',
            code: '79'
          },
          {
            class: 'C',
            y_coor: '1944572.2981',
            x_coor: '960919.865723',
            name: '대치4동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1943409.91509',
            x_coor: '959420.768051',
            name: '도곡1동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1942817.73749',
            x_coor: '959898.910522',
            name: '도곡2동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1946216.02832',
            x_coor: '961347.639221',
            name: '삼성1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1945866.18213',
            x_coor: '959873.969604',
            name: '삼성2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1941164.8623',
            x_coor: '965240.903015',
            name: '세곡동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1943369.8017',
            x_coor: '965078.164795',
            name: '수서동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1947294.0589',
            x_coor: '957833.584106',
            name: '신사동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1948026.56171',
            x_coor: '958531.160278',
            name: '압구정동',
            code: '77'
          },
          {
            class: 'C',
            y_coor: '1944099.04071',
            x_coor: '958739.338379',
            name: '역삼1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1944174.50653',
            x_coor: '959940.598328',
            name: '역삼2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1943702.94568',
            x_coor: '963582.201111',
            name: '일원1동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1943740.74109',
            x_coor: '962313.206177',
            name: '일원2동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1942762.3175',
            x_coor: '963440.609314',
            name: '일원본동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1947405.29053',
            x_coor: '960175.575928',
            name: '청담동',
            code: '78'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1947938.21149',
        x_coor: '966759.883423',
        name: '강동구',
        code: '250',
        subClassList: [
          {
            class: 'C',
            y_coor: '1951789.05267',
            x_coor: '971202.489014',
            name: '강일동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1951135.60211',
            x_coor: '968990.880371',
            name: '고덕1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1951291.6391',
            x_coor: '970356.687317',
            name: '고덕2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1948935.64532',
            x_coor: '968743.101318',
            name: '길동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1947194.08209',
            x_coor: '967899.862',
            name: '둔촌1동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1948285.70288',
            x_coor: '968365.87207',
            name: '둔촌2동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1950105.89832',
            x_coor: '968729.138794',
            name: '명일1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1949704.61652',
            x_coor: '969504.103882',
            name: '명일2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1950304.37988',
            x_coor: '970455.199707',
            name: '상일동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1947938.21149',
            x_coor: '966759.883423',
            name: '성내1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1948188.61871',
            x_coor: '967269.315186',
            name: '성내2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1947478.53247',
            x_coor: '967562.048584',
            name: '성내3동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1950304.97772',
            x_coor: '967552.243713',
            name: '암사1동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1950327.98993',
            x_coor: '967077.31189',
            name: '암사2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1950688.28528',
            x_coor: '968273.109497',
            name: '암사3동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1949580.70453',
            x_coor: '967916.474915',
            name: '천호1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1949413.8783',
            x_coor: '966911.241211',
            name: '천호2동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1949009.58032',
            x_coor: '967297.688171',
            name: '천호3동',
            code: '63'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1960141.83228',
        x_coor: '958134.423279',
        name: '강북구',
        code: '090',
        subClassList: [
          {
            class: 'C',
            y_coor: '1958732.83728',
            x_coor: '958258.179688',
            name: '미아동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1959929.15411',
            x_coor: '958432.08313',
            name: '번1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1958944.34473',
            x_coor: '959288.842407',
            name: '번2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1958586.89172',
            x_coor: '959990.481812',
            name: '번3동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1957588.8999',
            x_coor: '957419.408508',
            name: '삼각산동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1958763.83911',
            x_coor: '957501.381287',
            name: '삼양동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1957511.92633',
            x_coor: '958855.033813',
            name: '송중동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1957757.05328',
            x_coor: '957979.632202',
            name: '송천동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1958798.68451',
            x_coor: '956743.00061',
            name: '수유1동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1960681.75012',
            x_coor: '957645.001709',
            name: '수유2동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1960141.83228',
            x_coor: '958134.423279',
            name: '수유3동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1961050.92871',
            x_coor: '956939.39209',
            name: '우이동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1960335.46527',
            x_coor: '956823.354187',
            name: '인수동',
            code: '75'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1950379.65973',
        x_coor: '942545.373901',
        name: '강서구',
        code: '160',
        subClassList: [
          {
            class: 'C',
            y_coor: '1952437.21613',
            x_coor: '942132.531982',
            name: '가양1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1952200.0899',
            x_coor: '942708.861023',
            name: '가양2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1951493.25391',
            x_coor: '943526.211121',
            name: '가양3동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1951279.03833',
            x_coor: '939072.589478',
            name: '공항동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1950912.53491',
            x_coor: '943376.435425',
            name: '등촌1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1949450.0271',
            x_coor: '943683.353577',
            name: '등촌2동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1951258.6413',
            x_coor: '942407.006287',
            name: '등촌3동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1950628.9173',
            x_coor: '941101.43573',
            name: '발산1동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1952687.08771',
            x_coor: '939264.35791',
            name: '방화1동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1952154.68707',
            x_coor: '938776.849915',
            name: '방화2동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1953483.28851',
            x_coor: '939400.361084',
            name: '방화3동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1950677.20313',
            x_coor: '944441.434387',
            name: '염창동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1950085.35107',
            x_coor: '941863.609924',
            name: '우장산동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1948665.07971',
            x_coor: '941786.972229',
            name: '화곡1동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1948252.7215',
            x_coor: '942967.408325',
            name: '화곡2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1949450.04468',
            x_coor: '941556.004395',
            name: '화곡3동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1948534.37988',
            x_coor: '943524.484375',
            name: '화곡4동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1950470.76971',
            x_coor: '942592.372192',
            name: '화곡6동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1948350.94672',
            x_coor: '942423.892883',
            name: '화곡8동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1949614.46472',
            x_coor: '942373.872009',
            name: '화곡본동',
            code: '55'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1942242.40631',
        x_coor: '951505.579285',
        name: '관악구',
        code: '210',
        subClassList: [
          {
            class: 'C',
            y_coor: '1942034.25928',
            x_coor: '952111.523804',
            name: '낙성대동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1941467.85889',
            x_coor: '948858.870972',
            name: '난곡동',
            code: '81'
          },
          {
            class: 'C',
            y_coor: '1940415.82867',
            x_coor: '948600.8302',
            name: '난향동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1941831.15509',
            x_coor: '953833.140808',
            name: '남현동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1941413.13348',
            x_coor: '950212.752625',
            name: '대학동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1942043.48328',
            x_coor: '948323.931702',
            name: '미성동',
            code: '83'
          },
          {
            class: 'C',
            y_coor: '1943364.96509',
            x_coor: '949855.737976',
            name: '보라매동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1941360.8739',
            x_coor: '949859.310303',
            name: '삼성동',
            code: '82'
          },
          {
            class: 'C',
            y_coor: '1941902.07831',
            x_coor: '950042.8302',
            name: '서림동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1942433.91467',
            x_coor: '949725.627808',
            name: '서원동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1943507.5697',
            x_coor: '951215.72998',
            name: '성현동',
            code: '79'
          },
          {
            class: 'C',
            y_coor: '1943281.93231',
            x_coor: '949353.788086',
            name: '신림동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1943066.11627',
            x_coor: '948555.877075',
            name: '신사동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1942636.12268',
            x_coor: '949369.684509',
            name: '신원동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1943039.78168',
            x_coor: '950704.645325',
            name: '은천동',
            code: '78'
          },
          {
            class: 'C',
            y_coor: '1941898.45752',
            x_coor: '952724.5672',
            name: '인헌동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1942756.46753',
            x_coor: '947642.516724',
            name: '조원동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1942914.59967',
            x_coor: '951352.06958',
            name: '중앙동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1942343.54547',
            x_coor: '950632.991394',
            name: '청룡동',
            code: '80'
          },
          {
            class: 'C',
            y_coor: '1943759.37988',
            x_coor: '952142.653381',
            name: '청림동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1942517.39227',
            x_coor: '951994.131592',
            name: '행운동',
            code: '57'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1948889.15729',
        x_coor: '963105.393921',
        name: '광진구',
        code: '050',
        subClassList: [
          {
            class: 'C',
            y_coor: '1949801.44373',
            x_coor: '964931.973694',
            name: '광장동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1949320.99731',
            x_coor: '963397.460815',
            name: '구의1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1949846.29431',
            x_coor: '963776.161804',
            name: '구의2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1948821.36731',
            x_coor: '963954.625427',
            name: '구의3동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1950730.53387',
            x_coor: '962540.552979',
            name: '군자동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1950572.68768',
            x_coor: '962950.923828',
            name: '능동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1948435.4967',
            x_coor: '963104.793274',
            name: '자양1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1947802.52972',
            x_coor: '963278.021301',
            name: '자양2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1948365.48389',
            x_coor: '962265.849304',
            name: '자양3동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1948397.00751',
            x_coor: '961677.67041',
            name: '자양4동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1951338.60492',
            x_coor: '962911.124207',
            name: '중곡1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1951296.48688',
            x_coor: '963038.334473',
            name: '중곡2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1952241.03229',
            x_coor: '962923.028076',
            name: '중곡3동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1951161.29132',
            x_coor: '963737.879211',
            name: '중곡4동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1949765.31848',
            x_coor: '962134.179199',
            name: '화양동',
            code: '53'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1944198.77411',
        x_coor: '945852.930115',
        name: '구로구',
        code: '170',
        subClassList: [
          {
            class: 'C',
            y_coor: '1942766.59841',
            x_coor: '945915.135607',
            name: '가리봉동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1944750.80847',
            x_coor: '942647.075928',
            name: '개봉1동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1943703.17328',
            x_coor: '943117.632629',
            name: '개봉2동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1943168.54907',
            x_coor: '942874.755127',
            name: '개봉3동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1944762.2229',
            x_coor: '943677.705627',
            name: '고척1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1945461.68573',
            x_coor: '943312.221191',
            name: '고척2동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1943937.0705',
            x_coor: '944820.392517',
            name: '구로1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1943743.43433',
            x_coor: '945494.069519',
            name: '구로2동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1943296.32532',
            x_coor: '946101.940125',
            name: '구로3동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1943761.72456',
            x_coor: '946093.039722',
            name: '구로4동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1944714.26691',
            x_coor: '946023.171509',
            name: '구로5동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1944060.0509',
            x_coor: '940903.026611',
            name: '수궁동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1945569.5827',
            x_coor: '945256.374023',
            name: '신도림동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1944406.77173',
            x_coor: '942116.456726',
            name: '오류1동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1943490.56891',
            x_coor: '941610.08551',
            name: '오류2동',
            code: '68'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1939890.01489',
        x_coor: '946470.351929',
        name: '금천구',
        code: '180',
        subClassList: [
          {
            class: 'C',
            y_coor: '1942136.72968',
            x_coor: '946223.029175',
            name: '가산동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1941392.55133',
            x_coor: '946683.048279',
            name: '독산1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1940936.05768',
            x_coor: '946920.421204',
            name: '독산2동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1941937.68451',
            x_coor: '947229.001099',
            name: '독산3동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1941083.49628',
            x_coor: '947132.504272',
            name: '독산4동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1939541.67212',
            x_coor: '947221.119019',
            name: '시흥1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1939091.73169',
            x_coor: '948213.4729',
            name: '시흥2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1938063.89972',
            x_coor: '947437.799011',
            name: '시흥3동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1940142.17493',
            x_coor: '947484.407898',
            name: '시흥4동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1939409.38672',
            x_coor: '947666.747925',
            name: '시흥5동',
            code: '61'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1961743.2027',
        x_coor: '960873.367798',
        name: '노원구',
        code: '110',
        subClassList: [
          {
            class: 'C',
            y_coor: '1958464.67792',
            x_coor: '962398.852295',
            name: '공릉1동',
            code: '79'
          },
          {
            class: 'C',
            y_coor: '1958063.04327',
            x_coor: '963236.179504',
            name: '공릉2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1962511.03528',
            x_coor: '961214.832214',
            name: '상계10동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1964581.23547',
            x_coor: '960757.579102',
            name: '상계1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1962233.27393',
            x_coor: '961942.449402',
            name: '상계2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1963792.52472',
            x_coor: '963248.327087',
            name: '상계3·4동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1962694.75928',
            x_coor: '962019.850403',
            name: '상계5동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1961743.2027',
            x_coor: '960873.367798',
            name: '상계6·7동',
            code: '77'
          },
          {
            class: 'C',
            y_coor: '1963118.97168',
            x_coor: '960450.052429',
            name: '상계8동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1962868.4317',
            x_coor: '961530.57428',
            name: '상계9동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1957928.44489',
            x_coor: '961424.339905',
            name: '월계1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1959322.31488',
            x_coor: '960363.569824',
            name: '월계2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1958038.89349',
            x_coor: '961986.077576',
            name: '월계3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1961534.34729',
            x_coor: '962728.885925',
            name: '중계1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1960382.18951',
            x_coor: '961952.382813',
            name: '중계2·3동',
            code: '78'
          },
          {
            class: 'C',
            y_coor: '1962224.29071',
            x_coor: '962776.141479',
            name: '중계4동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1961006.75513',
            x_coor: '962974.827393',
            name: '중계본동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1960206.64191',
            x_coor: '962289.129089',
            name: '하계1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1959263.61688',
            x_coor: '961878.612793',
            name: '하계2동',
            code: '59'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1963335.54272',
        x_coor: '960055.1875',
        name: '도봉구',
        code: '100',
        subClassList: [
          {
            class: 'C',
            y_coor: '1964449.28351',
            x_coor: '959738.639099',
            name: '도봉1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1963446.0733',
            x_coor: '960010.95697',
            name: '도봉2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1962845.54211',
            x_coor: '959487.210571',
            name: '방학1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1963290.59027',
            x_coor: '958996.026917',
            name: '방학2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1962291.30109',
            x_coor: '958369.166809',
            name: '방학3동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1961055.99109',
            x_coor: '958190.389404',
            name: '쌍문1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1962148.18671',
            x_coor: '959324.154419',
            name: '쌍문2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1961159.85687',
            x_coor: '958356.084229',
            name: '쌍문3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1961988.99609',
            x_coor: '958400.894409',
            name: '쌍문4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1961086.38708',
            x_coor: '959758.303894',
            name: '창1동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1960318.39209',
            x_coor: '959033.908203',
            name: '창2동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1959951.44971',
            x_coor: '959669.786987',
            name: '창3동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1961510.56189',
            x_coor: '960442.78479',
            name: '창4동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1961969.94391',
            x_coor: '959740.238403',
            name: '창5동',
            code: '63'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1952862.4483',
        x_coor: '959367.520508',
        name: '동대문구',
        code: '060',
        subClassList: [
          {
            class: 'C',
            y_coor: '1952600.96869',
            x_coor: '960364.065979',
            name: '답십리1동',
            code: '91'
          },
          {
            class: 'C',
            y_coor: '1952093.33868',
            x_coor: '961257.136475',
            name: '답십리2동',
            code: '86'
          },
          {
            class: 'C',
            y_coor: '1953036.61249',
            x_coor: '959140.457886',
            name: '용신동',
            code: '81'
          },
          {
            class: 'C',
            y_coor: '1955454.56592',
            x_coor: '961643.962891',
            name: '이문1동',
            code: '89'
          },
          {
            class: 'C',
            y_coor: '1956084.04327',
            x_coor: '961612.26239',
            name: '이문2동',
            code: '90'
          },
          {
            class: 'C',
            y_coor: '1952138.77808',
            x_coor: '961709.786377',
            name: '장안1동',
            code: '87'
          },
          {
            class: 'C',
            y_coor: '1953318.74072',
            x_coor: '962084.245911',
            name: '장안2동',
            code: '88'
          },
          {
            class: 'C',
            y_coor: '1953272.8139',
            x_coor: '960065.16449',
            name: '전농1동',
            code: '83'
          },
          {
            class: 'C',
            y_coor: '1953281.9071',
            x_coor: '961148.414795',
            name: '전농2동',
            code: '84'
          },
          {
            class: 'C',
            y_coor: '1953849.71368',
            x_coor: '959192.539307',
            name: '제기동',
            code: '82'
          },
          {
            class: 'C',
            y_coor: '1954192.22333',
            x_coor: '960030.03717',
            name: '청량리동',
            code: '80'
          },
          {
            class: 'C',
            y_coor: '1954693.4953',
            x_coor: '960747.508179',
            name: '회기동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1954923.78967',
            x_coor: '961662.317505',
            name: '휘경1동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1954615.24591',
            x_coor: '961912.620117',
            name: '휘경2동',
            code: '73'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1946056.50372',
        x_coor: '950465.496216',
        name: '동작구',
        code: '200',
        subClassList: [
          {
            class: 'C',
            y_coor: '1946114.23853',
            x_coor: '951932.315613',
            name: '노량진1동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1946056.50372',
            x_coor: '950465.496216',
            name: '노량진2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1945584.97571',
            x_coor: '949298.23053',
            name: '대방동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1942775.79529',
            x_coor: '953917.633728',
            name: '사당1동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1943393.77533',
            x_coor: '953961.403503',
            name: '사당2동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1943180.27509',
            x_coor: '953325.057312',
            name: '사당3동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1942542.2569',
            x_coor: '953261.022827',
            name: '사당4동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1943068.2641',
            x_coor: '952876.302795',
            name: '사당5동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1944454.1781',
            x_coor: '951654.530823',
            name: '상도1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1945279.28247',
            x_coor: '950708.262085',
            name: '상도2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1944580.10992',
            x_coor: '949741.606873',
            name: '상도3동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1944741.26929',
            x_coor: '950305.212097',
            name: '상도4동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1943463.09869',
            x_coor: '947845.431396',
            name: '신대방1동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1944563.37451',
            x_coor: '949248.579712',
            name: '신대방2동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1945301.7959',
            x_coor: '952855.601013',
            name: '흑석동',
            code: '71'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1952059.45209',
        x_coor: '947155.40863',
        name: '마포구',
        code: '140',
        subClassList: [
          {
            class: 'C',
            y_coor: '1950229.77728',
            x_coor: '952303.967407',
            name: '공덕동',
            code: '77'
          },
          {
            class: 'C',
            y_coor: '1950868.44647',
            x_coor: '950746.129395',
            name: '대흥동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1949276.06952',
            x_coor: '951401.194702',
            name: '도화동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1950863.00708',
            x_coor: '947500.657471',
            name: '망원1동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1951386.23529',
            x_coor: '947213.993408',
            name: '망원2동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1953389.9989',
            x_coor: '946551.030029',
            name: '상암동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1949973.64728',
            x_coor: '949831.109802',
            name: '서강동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1950801.6731',
            x_coor: '948293.487183',
            name: '서교동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1951721.44672',
            x_coor: '947707.966492',
            name: '성산1동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1952059.45209',
            x_coor: '947155.40863',
            name: '성산2동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1949907.6015',
            x_coor: '950097.049377',
            name: '신수동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1949925.0647',
            x_coor: '951688.960022',
            name: '아현동',
            code: '78'
          },
          {
            class: 'C',
            y_coor: '1951839.09552',
            x_coor: '948956.310608',
            name: '연남동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1949892.30389',
            x_coor: '951031.434021',
            name: '염리동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1949431.36249',
            x_coor: '950560.420593',
            name: '용강동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1950179.28912',
            x_coor: '947508.442627',
            name: '합정동',
            code: '68'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1953458.3927',
        x_coor: '950264.717896',
        name: '서대문구',
        code: '130',
        subClassList: [
          {
            class: 'C',
            y_coor: '1952546.68011',
            x_coor: '948470.521606',
            name: '남가좌1동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1953382.37231',
            x_coor: '949128.800415',
            name: '남가좌2동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1952939.74353',
            x_coor: '947914.383423',
            name: '북가좌1동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1953729.85492',
            x_coor: '948010.120972',
            name: '북가좌2동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1951263.77533',
            x_coor: '952044.106995',
            name: '북아현동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1951277.59949',
            x_coor: '950850.399231',
            name: '신촌동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1952872.62671',
            x_coor: '950128.671997',
            name: '연희동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1952553.6131',
            x_coor: '952231.486389',
            name: '천연동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1951855.80811',
            x_coor: '951844.265381',
            name: '충현동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1955637.77228',
            x_coor: '951196.70813',
            name: '홍은1동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1953554.8559',
            x_coor: '950037.88269',
            name: '홍은2동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1954400.56293',
            x_coor: '950990.026306',
            name: '홍제1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1954221.79388',
            x_coor: '951385.031006',
            name: '홍제2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1955073.11328',
            x_coor: '951419.052307',
            name: '홍제3동',
            code: '64'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1942805.86713',
        x_coor: '958686.518005',
        name: '서초구',
        code: '220',
        subClassList: [
          {
            class: 'C',
            y_coor: '1940400.95868',
            x_coor: '960309.285889',
            name: '내곡동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1945202.6651',
            x_coor: '956990.303528',
            name: '반포1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1945155.08209',
            x_coor: '955318.810608',
            name: '반포2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1945975.11871',
            x_coor: '956304.539612',
            name: '반포3동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1944363.90912',
            x_coor: '955830.825073',
            name: '반포4동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1944704.07953',
            x_coor: '954575.945313',
            name: '반포본동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1942795.7569',
            x_coor: '955312.452698',
            name: '방배1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1942417.44751',
            x_coor: '954531.518799',
            name: '방배2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1942460.89587',
            x_coor: '955708.145996',
            name: '방배3동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1943420.6051',
            x_coor: '955113.288391',
            name: '방배4동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1943999.92908',
            x_coor: '954815.736572',
            name: '방배본동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1943546.3819',
            x_coor: '957519.697998',
            name: '서초1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1943752.28387',
            x_coor: '958005.61322',
            name: '서초2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1942816.3653',
            x_coor: '956900.765381',
            name: '서초3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1944932.83893',
            x_coor: '957767.307129',
            name: '서초4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1942909.23669',
            x_coor: '958992.125122',
            name: '양재1동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1941988.96429',
            x_coor: '959606.765076',
            name: '양재2동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1946297.50189',
            x_coor: '957048.091125',
            name: '잠원동',
            code: '55'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1951635.6615',
        x_coor: '959102.986877',
        name: '성동구',
        code: '040',
        subClassList: [
          {
            class: 'C',
            y_coor: '1950720.58191',
            x_coor: '957751.709717',
            name: '금호1가동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1950536.12927',
            x_coor: '957683.911804',
            name: '금호2·3가동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1949867.38013',
            x_coor: '957805.590698',
            name: '금호4가동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1951981.16669',
            x_coor: '959853.969482',
            name: '마장동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1951414.49127',
            x_coor: '959891.342285',
            name: '사근동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1949270.43268',
            x_coor: '960217.689575',
            name: '성수1가1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1949788.58911',
            x_coor: '959746.252625',
            name: '성수1가2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1949006.68311',
            x_coor: '960600.98468',
            name: '성수2가1동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1949969.11627',
            x_coor: '960713.504272',
            name: '성수2가3동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1950663.43127',
            x_coor: '961981.720093',
            name: '송정동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1949484.56708',
            x_coor: '957018.172485',
            name: '옥수동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1951405.13452',
            x_coor: '958536.865784',
            name: '왕십리2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1952162.17273',
            x_coor: '958099.356079',
            name: '왕십리도선동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1951727.24329',
            x_coor: '960750.046082',
            name: '용답동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1950523.93213',
            x_coor: '958786.591309',
            name: '응봉동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1951119.2901',
            x_coor: '959027.461121',
            name: '행당1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1951089.52808',
            x_coor: '958431.348511',
            name: '행당2동',
            code: '57'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1954560.06073',
        x_coor: '957344.941284',
        name: '성북구',
        code: '080',
        subClassList: [
          {
            class: 'C',
            y_coor: '1956892.42432',
            x_coor: '957587.312317',
            name: '길음1동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1956481.56848',
            x_coor: '958276.036682',
            name: '길음2동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1955653.66021',
            x_coor: '957987.001936',
            name: '돈암1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1955513.8111',
            x_coor: '956792.85199',
            name: '돈암2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1955060.8891',
            x_coor: '957661.987',
            name: '동선동',
            code: '83'
          },
          {
            class: 'C',
            y_coor: '1953550.04572',
            x_coor: '957865.681885',
            name: '보문동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1954715.84448',
            x_coor: '957151.027893',
            name: '삼선동',
            code: '82'
          },
          {
            class: 'C',
            y_coor: '1957149.42969',
            x_coor: '961291.514709',
            name: '석관동',
            code: '85'
          },
          {
            class: 'C',
            y_coor: '1954743.56812',
            x_coor: '956144.863708',
            name: '성북동',
            code: '81'
          },
          {
            class: 'C',
            y_coor: '1954155.16809',
            x_coor: '957742.524902',
            name: '안암동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1956891.00592',
            x_coor: '959026.487915',
            name: '월곡1동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1956357.99292',
            x_coor: '960092.620483',
            name: '월곡2동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1957280.17688',
            x_coor: '959725.40979',
            name: '장위1동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1957089.82147',
            x_coor: '960681.68457',
            name: '장위2동',
            code: '77'
          },
          {
            class: 'C',
            y_coor: '1957550.27307',
            x_coor: '960870.00769',
            name: '장위3동',
            code: '78'
          },
          {
            class: 'C',
            y_coor: '1955889.94287',
            x_coor: '957333.472717',
            name: '정릉1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1956229.07013',
            x_coor: '956849.977417',
            name: '정릉2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1956729.59167',
            x_coor: '956238.206726',
            name: '정릉3동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1958349.06962',
            x_coor: '955452.161993',
            name: '정릉4동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1955616.20111',
            x_coor: '958971.910217',
            name: '종암동',
            code: '84'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1946215.43927',
        x_coor: '965175.006104',
        name: '송파구',
        code: '240',
        subClassList: [
          {
            class: 'C',
            y_coor: '1944217.03131',
            x_coor: '965142.35553',
            name: '가락1동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1944444.47467',
            x_coor: '966995.244385',
            name: '가락2동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1944104.11932',
            x_coor: '966564.414001',
            name: '가락본동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1944246.63611',
            x_coor: '968470.502502',
            name: '거여1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1943868.92767',
            x_coor: '968782.539429',
            name: '거여2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1944141.08392',
            x_coor: '969057.641724',
            name: '마천1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1944232.2619',
            x_coor: '968932.683777',
            name: '마천2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1943491.20349',
            x_coor: '966776.69928',
            name: '문정1동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1943474.6145',
            x_coor: '965602.027527',
            name: '문정2동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1945810.7439',
            x_coor: '966761.494507',
            name: '방이1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1946210.61108',
            x_coor: '965927.290588',
            name: '방이2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1944906.37732',
            x_coor: '963984.32312',
            name: '삼전동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1944995.41309',
            x_coor: '964971.798218',
            name: '석촌동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1945294.70709',
            x_coor: '965471.382324',
            name: '송파1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1944851.51453',
            x_coor: '966124.868103',
            name: '송파2동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1944923.60748',
            x_coor: '967127.74939',
            name: '오금동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1946301.03247',
            x_coor: '967684.586609',
            name: '오륜동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1942214.75',
            x_coor: '967969.0625',
            name: '위례동',
            code: '82'
          },
          {
            class: 'C',
            y_coor: '1945924.30371',
            x_coor: '963636.642273',
            name: '잠실2동',
            code: '79'
          },
          {
            class: 'C',
            y_coor: '1946062.61548',
            x_coor: '964151.820007',
            name: '잠실3동',
            code: '80'
          },
          {
            class: 'C',
            y_coor: '1946833.60828',
            x_coor: '965734.33313',
            name: '잠실4동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1946611.36908',
            x_coor: '964708.967773',
            name: '잠실6동',
            code: '77'
          },
          {
            class: 'C',
            y_coor: '1945578.5683',
            x_coor: '962626.621094',
            name: '잠실7동',
            code: '78'
          },
          {
            class: 'C',
            y_coor: '1945289.70508',
            x_coor: '963262.18927',
            name: '잠실본동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1942730.5',
            x_coor: '967437.125',
            name: '장지동',
            code: '81'
          },
          {
            class: 'C',
            y_coor: '1948816.86871',
            x_coor: '966612.072998',
            name: '풍납1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1947785.65167',
            x_coor: '966139.158508',
            name: '풍납2동',
            code: '52'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1946596.73431',
        x_coor: '944017.562378',
        name: '양천구',
        code: '150',
        subClassList: [
          {
            class: 'C',
            y_coor: '1948080.48248',
            x_coor: '944441.601624',
            name: '목1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1949830.9527',
            x_coor: '944498.631409',
            name: '목2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1949680.27008',
            x_coor: '943856.111694',
            name: '목3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1948646.04443',
            x_coor: '944066.042076',
            name: '목4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1948612.0047',
            x_coor: '945104.768127',
            name: '목5동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1948376.02112',
            x_coor: '940939.516479',
            name: '신월1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1947498.92651',
            x_coor: '942085.406921',
            name: '신월2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1948469.55011',
            x_coor: '940724.226074',
            name: '신월3동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1947472.30231',
            x_coor: '941689.423889',
            name: '신월4동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1949017.66309',
            x_coor: '940559.36908',
            name: '신월5동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1946514.90552',
            x_coor: '942000.584717',
            name: '신월6동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1947160.85492',
            x_coor: '941211.655884',
            name: '신월7동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1946784.93408',
            x_coor: '942940.595093',
            name: '신정1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1946843.46368',
            x_coor: '944386.845398',
            name: '신정2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1946402.30768',
            x_coor: '942981.120972',
            name: '신정3동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1947317.50153',
            x_coor: '943331.288391',
            name: '신정4동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1946596.73431',
            x_coor: '944017.562378',
            name: '신정6동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1946316.38849',
            x_coor: '943411.904297',
            name: '신정7동',
            code: '70'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1947628.7337',
        x_coor: '946630.603027',
        name: '영등포구',
        code: '190',
        subClassList: [
          {
            class: 'C',
            y_coor: '1947466.49109',
            x_coor: '946750.199219',
            name: '당산1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1948545.25189',
            x_coor: '947174.810974',
            name: '당산2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1944181.13831',
            x_coor: '947510.405396',
            name: '대림1동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1943890.91553',
            x_coor: '946805.915222',
            name: '대림2동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1944510.93848',
            x_coor: '946790.803223',
            name: '대림3동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1945748.5863',
            x_coor: '946619.115784',
            name: '도림동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1946594.57672',
            x_coor: '946936.07782',
            name: '문래동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1945921.39691',
            x_coor: '948868.885315',
            name: '신길1동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1945501.84729',
            x_coor: '947656.351807',
            name: '신길3동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1945626.81531',
            x_coor: '947968.378479',
            name: '신길4동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1944874.16791',
            x_coor: '947426.620972',
            name: '신길5동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1944620.20947',
            x_coor: '947835.718018',
            name: '신길6동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1945394.42908',
            x_coor: '948871.059082',
            name: '신길7동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1947353.65253',
            x_coor: '945938.776184',
            name: '양평1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1948886.55469',
            x_coor: '946633.122925',
            name: '양평2동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1947986.3103',
            x_coor: '949264.381775',
            name: '여의동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1946951.5097',
            x_coor: '947925.271606',
            name: '영등포동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1946317.99371',
            x_coor: '947801.778198',
            name: '영등포본동',
            code: '73'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1947987.56891',
        x_coor: '953009.779297',
        name: '용산구',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1949734.34729',
            x_coor: '953604.730774',
            name: '남영동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1947563.18433',
            x_coor: '955836.060791',
            name: '보광동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1946917.9317',
            x_coor: '955346.505493',
            name: '서빙고동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1948986.34009',
            x_coor: '952080.561523',
            name: '용문동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1949763.31689',
            x_coor: '954557.81427',
            name: '용산2가동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1948826.35309',
            x_coor: '952874.447562',
            name: '원효로1동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1948480.85529',
            x_coor: '951543.095886',
            name: '원효로2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1947009.84668',
            x_coor: '953456.48761',
            name: '이촌1동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1947581.88171',
            x_coor: '951813.990479',
            name: '이촌2동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1948253.35168',
            x_coor: '955387.764282',
            name: '이태원1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1949296.58228',
            x_coor: '954963.243286',
            name: '이태원2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1949705.8429',
            x_coor: '953171.667297',
            name: '청파동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1947987.56891',
            x_coor: '953009.779297',
            name: '한강로동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1948476.6369',
            x_coor: '955868.24707',
            name: '한남동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1949375.34888',
            x_coor: '952457.238098',
            name: '효창동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1950057.0191',
            x_coor: '953903.594482',
            name: '후암동',
            code: '51'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1956086.20813',
        x_coor: '949611.695923',
        name: '은평구',
        code: '120',
        subClassList: [
          {
            class: 'C',
            y_coor: '1958408.68433',
            x_coor: '948524.8703',
            name: '갈현1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1957834.6463',
            x_coor: '948444.056396',
            name: '갈현2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1957088.44348',
            x_coor: '947958.809814',
            name: '구산동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1956019.96948',
            x_coor: '949672.072876',
            name: '녹번동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1957351.12567',
            x_coor: '948882.924805',
            name: '대조동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1956920.90393',
            x_coor: '949876.153076',
            name: '불광1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1958713.88849',
            x_coor: '949462.114624',
            name: '불광2동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1954033.91449',
            x_coor: '946810.421509',
            name: '수색동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1955538.25012',
            x_coor: '948074.53949',
            name: '신사1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1954703.17273',
            x_coor: '947770.749329',
            name: '신사2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1956270.18372',
            x_coor: '948372.848572',
            name: '역촌동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1955850.75812',
            x_coor: '949398.442383',
            name: '응암1동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1955175.73853',
            x_coor: '949068.852905',
            name: '응암2동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1954919.99573',
            x_coor: '948418.124512',
            name: '응암3동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1954050.01349',
            x_coor: '947645.414612',
            name: '증산동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1959672.39148',
            x_coor: '948907.262329',
            name: '진관동',
            code: '71'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1952714.65411',
        x_coor: '954044.940308',
        name: '종로구',
        code: '010',
        subClassList: [
          {
            class: 'C',
            y_coor: '1953534.0293',
            x_coor: '954508.895996',
            name: '가회동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1952640.29907',
            x_coor: '952488.299622',
            name: '교남동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1953095.92273',
            x_coor: '952155.002686',
            name: '무악동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1954913.35468',
            x_coor: '952687.475525',
            name: '부암동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1953109.39288',
            x_coor: '953099.308899',
            name: '사직동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1954083.32349',
            x_coor: '954253.211121',
            name: '삼청동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1953271.7605',
            x_coor: '957230.941528',
            name: '숭인1동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1952941.39313',
            x_coor: '957611.583618',
            name: '숭인2동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1953181.58069',
            x_coor: '956234.056519',
            name: '이화동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1952494.30847',
            x_coor: '954872.705872',
            name: '종로1·2·3·4가동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1952635.50708',
            x_coor: '956290.764221',
            name: '종로5·6가동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1952481.98328',
            x_coor: '957289.750427',
            name: '창신1동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1952898.54211',
            x_coor: '956808.583313',
            name: '창신2동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1953282.33069',
            x_coor: '957158.617188',
            name: '창신3동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1953986.57489',
            x_coor: '953259.110229',
            name: '청운효자동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1956460.82593',
            x_coor: '953074.044312',
            name: '평창동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1954273.3559',
            x_coor: '955905.646729',
            name: '혜화동',
            code: '73'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1951722.8197',
        x_coor: '955627.401672',
        name: '중구',
        code: '020',
        subClassList: [
          {
            class: 'C',
            y_coor: '1951791.85449',
            x_coor: '956286.736328',
            name: '광희동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1950670.0083',
            x_coor: '956569.650208',
            name: '다산동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1951258.66211',
            x_coor: '957594.72699',
            name: '동화동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1951313.08569',
            x_coor: '954588.381287',
            name: '명동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1951580.30029',
            x_coor: '953814.013428',
            name: '소공동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1951859.0907',
            x_coor: '957774.3797',
            name: '신당5동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1951527.0271',
            x_coor: '957125.589417',
            name: '신당동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1950168.13528',
            x_coor: '956738.728292',
            name: '약수동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1952047.51331',
            x_coor: '955080.252319',
            name: '을지로동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1951517.66949',
            x_coor: '956559.226379',
            name: '장충동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1950990.84967',
            x_coor: '953028.358093',
            name: '중림동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1950968.2569',
            x_coor: '957135.534119',
            name: '청구동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1951320.1037',
            x_coor: '955451.780884',
            name: '필동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1952115.06049',
            x_coor: '957733.559204',
            name: '황학동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1951150.47913',
            x_coor: '953667.68811',
            name: '회현동',
            code: '54'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1956379.39752',
        x_coor: '964057.659912',
        name: '중랑구',
        code: '070',
        subClassList: [
          {
            class: 'C',
            y_coor: '1954850.02429',
            x_coor: '964524.41571',
            name: '망우3동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1955856.96149',
            x_coor: '965253.441223',
            name: '망우본동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1954569.32031',
            x_coor: '962834.8797',
            name: '면목2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1953809.80652',
            x_coor: '963629.754883',
            name: '면목3·8동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1952894.45691',
            x_coor: '963408.479492',
            name: '면목4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1954126.50873',
            x_coor: '962874.172974',
            name: '면목5동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1953372.23767',
            x_coor: '963530.334778',
            name: '면목7동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1954283.7959',
            x_coor: '963596.827026',
            name: '면목본동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1957081.49329',
            x_coor: '962797.639771',
            name: '묵1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1956772.27509',
            x_coor: '962577.849182',
            name: '묵2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1955683.99091',
            x_coor: '963558.031372',
            name: '상봉1동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1954861.88989',
            x_coor: '963209.92749',
            name: '상봉2동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1956349.75067',
            x_coor: '964649.996887',
            name: '신내1동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1956379.39752',
            x_coor: '964057.659912',
            name: '신내2동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1955833.18628',
            x_coor: '962984.711487',
            name: '중화1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1956019.2981',
            x_coor: '962588.753296',
            name: '중화2동',
            code: '62'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1690473.875',
    x_coor: '1141856.25',
    name: '부산광역시',
    code: '21',
    subClassList: [
      {
        class: 'B',
        y_coor: '1691721.39911',
        x_coor: '1134755.71838',
        name: '강서구',
        code: '120',
        subClassList: [
          {
            class: 'C',
            y_coor: '1672673',
            x_coor: '1121101.25',
            name: '가덕도동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1689909.43292',
            x_coor: '1127615.03912',
            name: '가락동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1691964.12769',
            x_coor: '1130633.3075',
            name: '강동동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1684775.32831',
            x_coor: '1121263.23779',
            name: '녹산동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1691721.39911',
            x_coor: '1134755.71838',
            name: '대저1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1688002.96991',
            x_coor: '1132622.06982',
            name: '대저2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1680145.0675',
            x_coor: '1129994.23901',
            name: '명지동',
            code: '54'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1695342.0199',
        x_coor: '1144862.14191',
        name: '금정구',
        code: '110',
        subClassList: [
          {
            class: 'C',
            y_coor: '1695564.77551',
            x_coor: '1144380.05701',
            name: '구서1동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1696688.05249',
            x_coor: '1144698.18359',
            name: '구서2동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1692849.16968',
            x_coor: '1146627.89832',
            name: '금사동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1696098.76349',
            x_coor: '1141572.04651',
            name: '금성동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1698517.13971',
            x_coor: '1144820.95343',
            name: '남산동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1693275.89288',
            x_coor: '1144893.26331',
            name: '부곡1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1693878.96173',
            x_coor: '1144935.19751',
            name: '부곡2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1695064.27612',
            x_coor: '1145017.71002',
            name: '부곡3동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1692769.31152',
            x_coor: '1144576.81342',
            name: '부곡4동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1692611.47308',
            x_coor: '1145540.95679',
            name: '서1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1692014.02448',
            x_coor: '1146039.54608',
            name: '서2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1692496.79468',
            x_coor: '1145980.9978',
            name: '서3동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1701499.52209',
            x_coor: '1146690.58441',
            name: '선두구동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1694739.84808',
            x_coor: '1144214.17462',
            name: '장전1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1693629.86987',
            x_coor: '1143872.60211',
            name: '장전2동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1693606.31549',
            x_coor: '1144285.29248',
            name: '장전3동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1698912.2923',
            x_coor: '1144596.7677',
            name: '청룡노포동',
            code: '67'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1695694.18372',
        x_coor: '1156703.08069',
        name: '기장군',
        code: '310',
        subClassList: [
          {
            class: 'C',
            y_coor: '1695047.84308',
            x_coor: '1156130.9964',
            name: '기장읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1697863.24469',
            x_coor: '1157576.20563',
            name: '일광면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1703430.01593',
            x_coor: '1158543.85248',
            name: '장안읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1705731.875',
            x_coor: '1152589.25',
            name: '정관읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1699003.74628',
            x_coor: '1150042.91962',
            name: '철마면',
            code: '33'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1683516.8197',
        x_coor: '1144345.30658',
        name: '남구',
        code: '070',
        subClassList: [
          {
            class: 'C',
            y_coor: '1681328.75928',
            x_coor: '1144038.72369',
            name: '감만1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1681963.99628',
            x_coor: '1144382.25623',
            name: '감만2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1683309.38708',
            x_coor: '1145175.37451',
            name: '대연1동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1683921.9173',
            x_coor: '1146076.16107',
            name: '대연3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1682782.3587',
            x_coor: '1144995.89801',
            name: '대연4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1683739.62128',
            x_coor: '1144866.15118',
            name: '대연5동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1683516.8197',
            x_coor: '1144345.30658',
            name: '대연6동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1684164.47369',
            x_coor: '1143142.71729',
            name: '문현1동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1684464.94928',
            x_coor: '1142897.92798',
            name: '문현2동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1683678.71887',
            x_coor: '1143183.72949',
            name: '문현3동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1683451.94592',
            x_coor: '1142948.24957',
            name: '문현4동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1681439.46649',
            x_coor: '1145348.9118',
            name: '용당동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1681807.92249',
            x_coor: '1146618.18292',
            name: '용호1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1681153.44489',
            x_coor: '1147028.62421',
            name: '용호2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1681838.96307',
            x_coor: '1146960.98688',
            name: '용호3동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1680969.18689',
            x_coor: '1146755.62042',
            name: '용호4동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1682226.4801',
            x_coor: '1143586.12653',
            name: '우암동',
            code: '71'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1682658.89587',
        x_coor: '1140794.20129',
        name: '동구',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1683794.8642',
            x_coor: '1141756.0363',
            name: '범일1동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1683326.18872',
            x_coor: '1142107.96722',
            name: '범일2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1682805.19891',
            x_coor: '1141567.49939',
            name: '범일5동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1682223.61768',
            x_coor: '1140524.54572',
            name: '수정1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1682730.43091',
            x_coor: '1140550.625',
            name: '수정2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1682411.40991',
            x_coor: '1140378.94238',
            name: '수정4동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1683161.6189',
            x_coor: '1140521.44012',
            name: '수정5동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1683209.875',
            x_coor: '1141272.75',
            name: '좌천동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1680942.58392',
            x_coor: '1140061.28448',
            name: '초량1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1681234.24048',
            x_coor: '1140195.74219',
            name: '초량2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1681768.44348',
            x_coor: '1140306.66779',
            name: '초량3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1681618.0965',
            x_coor: '1139828.10608',
            name: '초량6동',
            code: '55'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1691109.87292',
        x_coor: '1144152.48187',
        name: '동래구',
        code: '060',
        subClassList: [
          {
            class: 'C',
            y_coor: '1691938.72089',
            x_coor: '1143952.15662',
            name: '명륜동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1691107.26947',
            x_coor: '1146031.2652',
            name: '명장1동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1691464.48907',
            x_coor: '1145857.86383',
            name: '명장2동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1691201.1795',
            x_coor: '1144377.07202',
            name: '복산동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1690409.32928',
            x_coor: '1142190.43549',
            name: '사직1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1690432.09851',
            x_coor: '1141787.06549',
            name: '사직2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1690474.91888',
            x_coor: '1142872.20868',
            name: '사직3동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1690127.6889',
            x_coor: '1144843.9715',
            name: '수민동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1690260.00232',
            x_coor: '1145529.79498',
            name: '안락1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1690346.08893',
            x_coor: '1146572.6626',
            name: '안락2동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1692775.61853',
            x_coor: '1143806.52612',
            name: '온천1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1691425.86249',
            x_coor: '1143179.98199',
            name: '온천2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1691077.12128',
            x_coor: '1142575.82709',
            name: '온천3동',
            code: '57'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1686385.8609',
        x_coor: '1141451.68799',
        name: '부산진구',
        code: '050',
        subClassList: [
          {
            class: 'C',
            y_coor: '1684903.82892',
            x_coor: '1139277.1803',
            name: '가야2동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1685300.47247',
            x_coor: '1139750.33679',
            name: '가야제1동',
            code: '81'
          },
          {
            class: 'C',
            y_coor: '1685221.15729',
            x_coor: '1138623.07281',
            name: '개금1동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1684354.65131',
            x_coor: '1138420.64783',
            name: '개금2동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1685562.33649',
            x_coor: '1138621.12482',
            name: '개금3동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1685833.47968',
            x_coor: '1140979.9035',
            name: '당감2동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1686931.92151',
            x_coor: '1139926.23932',
            name: '당감4동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1686566.1543',
            x_coor: '1139856.21411',
            name: '당감제1동',
            code: '80'
          },
          {
            class: 'C',
            y_coor: '1684646.63373',
            x_coor: '1142195.46057',
            name: '범천1동',
            code: '77'
          },
          {
            class: 'C',
            y_coor: '1684585.2214',
            x_coor: '1141758.8901',
            name: '범천2동',
            code: '84'
          },
          {
            class: 'C',
            y_coor: '1686434.16589',
            x_coor: '1141033.94891',
            name: '부암1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1687056.36987',
            x_coor: '1140211.60748',
            name: '부암3동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1686121.28711',
            x_coor: '1141955.35028',
            name: '부전1동',
            code: '82'
          },
          {
            class: 'C',
            y_coor: '1685260.72791',
            x_coor: '1141800.65381',
            name: '부전2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1687699.45612',
            x_coor: '1142453.31189',
            name: '양정1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1687536.87549',
            x_coor: '1143490.39697',
            name: '양정2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1687492.44928',
            x_coor: '1141406.54742',
            name: '연지동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1685131.59528',
            x_coor: '1142679.46741',
            name: '전포1동',
            code: '83'
          },
          {
            class: 'C',
            y_coor: '1686283.12689',
            x_coor: '1142643.86108',
            name: '전포2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1688142.82727',
            x_coor: '1140914.51611',
            name: '초읍동',
            code: '55'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1690121.38708',
        x_coor: '1135661.63879',
        name: '북구',
        code: '080',
        subClassList: [
          {
            class: 'C',
            y_coor: '1691157.33569',
            x_coor: '1136640.00482',
            name: '구포1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1690732.9953',
            x_coor: '1136358.39948',
            name: '구포2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1689888.35089',
            x_coor: '1137358.349',
            name: '구포3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1696010.13031',
            x_coor: '1137633.91913',
            name: '금곡동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1691841.44928',
            x_coor: '1138045.06219',
            name: '덕천1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1691822.02271',
            x_coor: '1137253.23242',
            name: '덕천2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1691561.7431',
            x_coor: '1138121.40942',
            name: '덕천3동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1691980.95972',
            x_coor: '1139836.70288',
            name: '만덕1동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1691619.30011',
            x_coor: '1139917.17987',
            name: '만덕2동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1691740.54248',
            x_coor: '1139183.32861',
            name: '만덕3동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1694092.7569',
            x_coor: '1137748.45258',
            name: '화명1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1695303.3053',
            x_coor: '1138281.3075',
            name: '화명2동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1693986.78931',
            x_coor: '1137409.76147',
            name: '화명3동',
            code: '63'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1685173.5979',
        x_coor: '1135800.70923',
        name: '사상구',
        code: '150',
        subClassList: [
          {
            class: 'C',
            y_coor: '1685330.89148',
            x_coor: '1134749.53168',
            name: '감전동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1686400.79089',
            x_coor: '1135442.80359',
            name: '괘법동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1687127.92273',
            x_coor: '1135072.4502',
            name: '덕포1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1687582.52692',
            x_coor: '1135042.28601',
            name: '덕포2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1689440.24847',
            x_coor: '1135865.6933',
            name: '모라1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1688730.69891',
            x_coor: '1136215.9129',
            name: '모라3동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1687850.67889',
            x_coor: '1134563.01569',
            name: '삼락동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1682491.9433',
            x_coor: '1134132.42078',
            name: '엄궁동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1685078.3999',
            x_coor: '1136442.66498',
            name: '주례1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1684913.33807',
            x_coor: '1137589.38129',
            name: '주례2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1684600.00012',
            x_coor: '1136765.6109',
            name: '주례3동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1684220.18988',
            x_coor: '1135486.03082',
            name: '학장동',
            code: '63'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1679776.78528',
        x_coor: '1134459.46301',
        name: '사하구',
        code: '100',
        subClassList: [
          {
            class: 'C',
            y_coor: '1678026.41772',
            x_coor: '1137160.41443',
            name: '감천1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1678762.16089',
            x_coor: '1137578.39258',
            name: '감천2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1679297.00031',
            x_coor: '1135746.01971',
            name: '괴정1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1679729.61908',
            x_coor: '1137077.79492',
            name: '괴정2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1679380.14252',
            x_coor: '1136541.85291',
            name: '괴정3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1679228.89691',
            x_coor: '1135182.6076',
            name: '괴정4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1677325.1673',
            x_coor: '1135636.76501',
            name: '구평동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1674778.85248',
            x_coor: '1134169.51367',
            name: '다대1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1675272.01508',
            x_coor: '1135153.86169',
            name: '다대2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1679776.78528',
            x_coor: '1134459.46301',
            name: '당리동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1678211.06873',
            x_coor: '1134396.08612',
            name: '신평1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1678699.54291',
            x_coor: '1133024.409',
            name: '신평2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1677422.50787',
            x_coor: '1133724.15723',
            name: '장림1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1676854.78607',
            x_coor: '1134256.98901',
            name: '장림2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1679737.9649',
            x_coor: '1133449.255',
            name: '하단1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1680911.72229',
            x_coor: '1133094.63342',
            name: '하단2동',
            code: '57'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1679152.15729',
        x_coor: '1138908.8006',
        name: '서구',
        code: '020',
        subClassList: [
          {
            class: 'C',
            y_coor: '1678574.78369',
            x_coor: '1138853.23792',
            name: '남부민1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1677655.85492',
            x_coor: '1138616.13409',
            name: '남부민2동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1680442.87073',
            x_coor: '1138541.35577',
            name: '동대신1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1680815.99951',
            x_coor: '1138810.87921',
            name: '동대신2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1680969.96729',
            x_coor: '1138265.07831',
            name: '동대신3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1679795.60431',
            x_coor: '1138394.77051',
            name: '부민동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1680595.73669',
            x_coor: '1138010.66559',
            name: '서대신1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1680856.9873',
            x_coor: '1137781.47668',
            name: '서대신3동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1681492.41669',
            x_coor: '1137829.81519',
            name: '서대신4동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1679388.3797',
            x_coor: '1138122.52942',
            name: '아미동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1674419.89172',
            x_coor: '1137814.10608',
            name: '암남동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1678928.04547',
            x_coor: '1138571.11047',
            name: '초장동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1679067.61511',
            x_coor: '1138860.84082',
            name: '충무동',
            code: '64'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1684553.7243',
        x_coor: '1146939.74408',
        name: '수영구',
        code: '140',
        subClassList: [
          {
            class: 'C',
            y_coor: '1686483.4729',
            x_coor: '1146848.3432',
            name: '광안1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1685692.98071',
            x_coor: '1146988.57147',
            name: '광안2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1687041.54608',
            x_coor: '1146947.43231',
            name: '광안3동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1685611.40747',
            x_coor: '1146770.88153',
            name: '광안4동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1684237.91229',
            x_coor: '1146696.3407',
            name: '남천1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1684371.63611',
            x_coor: '1147096.68103',
            name: '남천2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1687645.92871',
            x_coor: '1146149.62543',
            name: '망미1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1687861.03412',
            x_coor: '1147084.51929',
            name: '망미2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1685878.02429',
            x_coor: '1148045.9577',
            name: '민락동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1687332.06073',
            x_coor: '1147167.3645',
            name: '수영동',
            code: '53'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1687912.20508',
        x_coor: '1143850.78479',
        name: '연제구',
        code: '130',
        subClassList: [
          {
            class: 'C',
            y_coor: '1689977.01172',
            x_coor: '1143910.37958',
            name: '거제1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1689179.5921',
            x_coor: '1142969.28778',
            name: '거제2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1688776.74969',
            x_coor: '1143229.3985',
            name: '거제3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1688227.70728',
            x_coor: '1142754.93347',
            name: '거제4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1689455.57953',
            x_coor: '1144798.73889',
            name: '연산1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1687912.20508',
            x_coor: '1143850.78479',
            name: '연산2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1687615.15271',
            x_coor: '1145175.4043',
            name: '연산3동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1689037.30267',
            x_coor: '1144304.98169',
            name: '연산4동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1688824.84308',
            x_coor: '1143501.65582',
            name: '연산5동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1688064.13092',
            x_coor: '1144748.70673',
            name: '연산6동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1689154.6499',
            x_coor: '1145767.32581',
            name: '연산8동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1689323.98993',
            x_coor: '1146120.07092',
            name: '연산9동',
            code: '63'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1678468.27271',
        x_coor: '1142921.22388',
        name: '영도구',
        code: '040',
        subClassList: [
          {
            class: 'C',
            y_coor: '1678287.09729',
            x_coor: '1140163.24261',
            name: '남항동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1676661.28412',
            x_coor: '1142995.5014',
            name: '동삼1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1675894.05511',
            x_coor: '1144125.82813',
            name: '동삼2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1677743.00488',
            x_coor: '1143001.46417',
            name: '동삼3동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1678688.83588',
            x_coor: '1140767.36371',
            name: '봉래1동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1678659.77342',
            x_coor: '1141388.72432',
            name: '봉래2동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1677567.38208',
            x_coor: '1140860.92029',
            name: '신선동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1678327.46289',
            x_coor: '1140809.18707',
            name: '영선1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1677963.27289',
            x_coor: '1140504.75378',
            name: '영선2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1679082.22913',
            x_coor: '1142040.21368',
            name: '청학1동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1678543.31708',
            x_coor: '1142721.86359',
            name: '청학2동',
            code: '64'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1680081.42468',
        x_coor: '1139654.80133',
        name: '중구',
        code: '010',
        subClassList: [
          {
            class: 'C',
            y_coor: '1679384.7699',
            x_coor: '1139487.15472',
            name: '광복동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1679099.49231',
            x_coor: '1139608.73108',
            name: '남포동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1679862.18927',
            x_coor: '1139543.19849',
            name: '대청동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1679435.17291',
            x_coor: '1139949.17092',
            name: '동광동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1680069.62909',
            x_coor: '1138957.39911',
            name: '보수동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1679424.59387',
            x_coor: '1139134.54932',
            name: '부평동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1680627.24249',
            x_coor: '1139888.31641',
            name: '영주1동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1680675.97449',
            x_coor: '1139598.22083',
            name: '영주2동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1679541.5517',
            x_coor: '1139935.2912',
            name: '중앙동',
            code: '51'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1686584.55511',
        x_coor: '1151507.63281',
        name: '해운대구',
        code: '090',
        subClassList: [
          {
            class: 'C',
            y_coor: '1692968.625',
            x_coor: '1149568.375',
            name: '반송1동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1693867.58948',
            x_coor: '1151099.85303',
            name: '반송2동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1690734.93372',
            x_coor: '1147375.25818',
            name: '반여1동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1690168.65887',
            x_coor: '1148404.34363',
            name: '반여2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1690740.53192',
            x_coor: '1148701.93341',
            name: '반여3동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1691630.55969',
            x_coor: '1147192.40918',
            name: '반여4동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1689348.28387',
            x_coor: '1155000.26459',
            name: '송정동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1686540.9543',
            x_coor: '1150990.9831',
            name: '우1동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1687481.2201',
            x_coor: '1149346.0949',
            name: '우2동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1686096.035',
            x_coor: '1149773.417',
            name: '우3동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1688912.55072',
            x_coor: '1147975.50189',
            name: '재송1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1689470.09589',
            x_coor: '1147979.63879',
            name: '재송2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1687462.33832',
            x_coor: '1152463.578',
            name: '좌1동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1687277.90527',
            x_coor: '1153231.04797',
            name: '좌2동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1687603.48767',
            x_coor: '1151769.06189',
            name: '좌3동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1688241.05933',
            x_coor: '1152635.38361',
            name: '좌4동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1686521.24451',
            x_coor: '1151568.41071',
            name: '중1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1686478.37689',
            x_coor: '1152926.48053',
            name: '중2동',
            code: '54'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1764433.39789',
    x_coor: '1099470.55048',
    name: '대구광역시',
    code: '22',
    subClassList: [
      {
        class: 'B',
        y_coor: '1761556.44989',
        x_coor: '1099139.72699',
        name: '남구',
        code: '040',
        subClassList: [
          {
            class: 'C',
            y_coor: '1760913.54852',
            x_coor: '1096539.14258',
            name: '대명10동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1760488.49548',
            x_coor: '1095787.65509',
            name: '대명11동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1760957.36029',
            x_coor: '1097261.72009',
            name: '대명1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1762630.28333',
            x_coor: '1098120.95789',
            name: '대명2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1762294.69049',
            x_coor: '1097441.86792',
            name: '대명3동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1761575.08673',
            x_coor: '1096581.06183',
            name: '대명4동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1761291.98212',
            x_coor: '1098236.70563',
            name: '대명5동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1760372.85553',
            x_coor: '1096284.52008',
            name: '대명6동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1760616.77393',
            x_coor: '1097482.8385',
            name: '대명9동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1761556.44989',
            x_coor: '1099139.72699',
            name: '봉덕1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1761371.63507',
            x_coor: '1099437.89081',
            name: '봉덕2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1761210.63373',
            x_coor: '1098971.82642',
            name: '봉덕3동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1762463.01428',
            x_coor: '1099272.64551',
            name: '이천동',
            code: '51'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1759764.75189',
        x_coor: '1093295.01202',
        name: '달서구',
        code: '070',
        subClassList: [
          {
            class: 'C',
            y_coor: '1762110.42249',
            x_coor: '1094108.29181',
            name: '감삼동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1757272.25891',
            x_coor: '1093255.8999',
            name: '도원동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1762920.0957',
            x_coor: '1096365.2251',
            name: '두류1·2동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1762421.69928',
            x_coor: '1095304.57727',
            name: '두류3동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1760270.60553',
            x_coor: '1094025.45392',
            name: '본동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1761002.77588',
            x_coor: '1094206.47571',
            name: '본리동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1758037.42029',
            x_coor: '1094406.80988',
            name: '상인1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1757838.5199',
            x_coor: '1093617.65369',
            name: '상인2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1757576.26007',
            x_coor: '1094880.31458',
            name: '상인3동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1760810.80249',
            x_coor: '1095565.58331',
            name: '성당동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1759693.65131',
            x_coor: '1095268.7478',
            name: '송현1동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1760091.88812',
            x_coor: '1094436.01318',
            name: '송현2동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1762951.6709',
            x_coor: '1090183.9743',
            name: '신당동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1762723.21667',
            x_coor: '1093111.19501',
            name: '용산1동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1762913.82471',
            x_coor: '1092366.95111',
            name: '용산2동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1758599.14709',
            x_coor: '1092397.74762',
            name: '월성1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1759871.7995',
            x_coor: '1092875.27191',
            name: '월성2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1762150.7417',
            x_coor: '1091260.01233',
            name: '이곡1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1762602.18073',
            x_coor: '1090367.30212',
            name: '이곡2동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1761252.99268',
            x_coor: '1093011.13348',
            name: '장기동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1762637.75427',
            x_coor: '1093887.08063',
            name: '죽전동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1757790.19153',
            x_coor: '1092401.18073',
            name: '진천동',
            code: '64'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1753529.57971',
        x_coor: '1084175.90588',
        name: '달성군',
        code: '310',
        subClassList: [
          {
            class: 'C',
            y_coor: '1756833.12689',
            x_coor: '1101451.70563',
            name: '가창면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1740674.77191',
            x_coor: '1082694.81677',
            name: '구지면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1753529.57971',
            x_coor: '1084175.90588',
            name: '논공읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1763564.32208',
            x_coor: '1086427.46741',
            name: '다사읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1755224.39532',
            x_coor: '1087090.58392',
            name: '옥포면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1744606.2923',
            x_coor: '1086840.30603',
            name: '유가면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1767556.64948',
            x_coor: '1085324.45062',
            name: '하빈면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1744992.55048',
            x_coor: '1085735.51428',
            name: '현풍면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1756834.27411',
            x_coor: '1090399.3443',
            name: '화원읍',
            code: '11'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1766151.42987',
        x_coor: '1102490.18188',
        name: '동구',
        code: '020',
        subClassList: [
          {
            class: 'C',
            y_coor: '1772109.58569',
            x_coor: '1103204.57861',
            name: '공산동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1768758.82751',
            x_coor: '1103778.4375',
            name: '도평동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1766535.61011',
            x_coor: '1103760.05353',
            name: '동촌동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1765454.66913',
            x_coor: '1105182.89911',
            name: '방촌동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1768778.40369',
            x_coor: '1102803.25842',
            name: '불로·봉무동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1765875.66852',
            x_coor: '1100762.32019',
            name: '신암1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1765393.06812',
            x_coor: '1100438.80042',
            name: '신암2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1765359.80591',
            x_coor: '1101381.79639',
            name: '신암3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1765972.27087',
            x_coor: '1101932.89111',
            name: '신암4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1766499.6651',
            x_coor: '1102263.8197',
            name: '신암5동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1764280.82672',
            x_coor: '1100644.74353',
            name: '신천1·2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1764764.20251',
            x_coor: '1101541.83362',
            name: '신천3동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1764496.15411',
            x_coor: '1101947.82861',
            name: '신천4동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1764425.96973',
            x_coor: '1108522.6842',
            name: '안심1동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1764967.93652',
            x_coor: '1107158.73132',
            name: '안심2동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1764409.0755',
            x_coor: '1109331.36047',
            name: '안심3·4동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1766908.25488',
            x_coor: '1102730.05511',
            name: '지저동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1765688.89972',
            x_coor: '1105759.60071',
            name: '해안동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1765609.03088',
            x_coor: '1103346.81097',
            name: '효목1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1765221.14209',
            x_coor: '1103017.46301',
            name: '효목2동',
            code: '61'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1765998.14148',
        x_coor: '1097735.80499',
        name: '북구',
        code: '050',
        subClassList: [
          {
            class: 'C',
            y_coor: '1769122.52228',
            x_coor: '1101706.8537',
            name: '검단동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1765578.63013',
            x_coor: '1097810.4408',
            name: '고성동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1767733.48309',
            x_coor: '1094045.32532',
            name: '관문동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1772554.45245',
            x_coor: '1093840.02576',
            name: '관음동',
            code: '77'
          },
          {
            class: 'C',
            y_coor: '1771885.33588',
            x_coor: '1096155.2995',
            name: '구암동',
            code: '79'
          },
          {
            class: 'C',
            y_coor: '1772903.11047',
            x_coor: '1096988.58478',
            name: '국우동',
            code: '83'
          },
          {
            class: 'C',
            y_coor: '1766484.18689',
            x_coor: '1097133.80701',
            name: '노원동',
            code: '81'
          },
          {
            class: 'C',
            y_coor: '1765630.65167',
            x_coor: '1099815.81219',
            name: '대현동',
            code: '84'
          },
          {
            class: 'C',
            y_coor: '1771699.5401',
            x_coor: '1095448.39832',
            name: '동천동',
            code: '82'
          },
          {
            class: 'C',
            y_coor: '1769966.33209',
            x_coor: '1098974.18817',
            name: '무태조야동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1766928.78967',
            x_coor: '1100952.59192',
            name: '복현1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1767112.6897',
            x_coor: '1101573.57617',
            name: '복현2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1766777.84747',
            x_coor: '1098794.37549',
            name: '산격1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1767801.4715',
            x_coor: '1100101.29413',
            name: '산격2동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1766892.93768',
            x_coor: '1100062.51978',
            name: '산격3동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1766744.78009',
            x_coor: '1099665.55688',
            name: '산격4동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1772631.72852',
            x_coor: '1094753.87097',
            name: '읍내동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1765295.82727',
            x_coor: '1099283.896',
            name: '칠성동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1767554.14702',
            x_coor: '1097849.75531',
            name: '침산1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1766186.10272',
            x_coor: '1099011.3075',
            name: '침산2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1766707.10651',
            x_coor: '1098315.44678',
            name: '침산3동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1770215.62592',
            x_coor: '1094117.04907',
            name: '태전1동',
            code: '78'
          },
          {
            class: 'C',
            y_coor: '1769933.9483',
            x_coor: '1094617.77631',
            name: '태전2동',
            code: '74'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1764425.13452',
        x_coor: '1095616.10358',
        name: '서구',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1763198.2771',
            x_coor: '1095767.3385',
            name: '내당1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1763948.31311',
            x_coor: '1097008.93781',
            name: '내당2·3동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1763007.57147',
            x_coor: '1094969.97339',
            name: '내당4동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1765481.0813',
            x_coor: '1096490.49237',
            name: '비산1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1764892.18689',
            x_coor: '1097014.8902',
            name: '비산2·3동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1764221.25488',
            x_coor: '1096984.16193',
            name: '비산4동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1766053.9917',
            x_coor: '1096544.38177',
            name: '비산5동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1764941.09912',
            x_coor: '1096505.90887',
            name: '비산6동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1766216.92389',
            x_coor: '1095090.08759',
            name: '비산7동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1763986.57013',
            x_coor: '1094272.95819',
            name: '상중이동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1766110.8587',
            x_coor: '1096972.2843',
            name: '원대동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1764857.42987',
            x_coor: '1095981.18329',
            name: '평리1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1764371.92889',
            x_coor: '1096021.16333',
            name: '평리2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1764895.11951',
            x_coor: '1095803.84241',
            name: '평리3동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1763935.32532',
            x_coor: '1095407.9046',
            name: '평리4동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1764641.26068',
            x_coor: '1094672.55872',
            name: '평리5동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1764797.93152',
            x_coor: '1094626.42651',
            name: '평리6동',
            code: '65'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1762997.78949',
        x_coor: '1102083.77301',
        name: '수성구',
        code: '060',
        subClassList: [
          {
            class: 'C',
            y_coor: '1760743.54529',
            x_coor: '1109497.32092',
            name: '고산1동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1761431.98248',
            x_coor: '1107934.00848',
            name: '고산2동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1761517.91669',
            x_coor: '1108961.95947',
            name: '고산3동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1759787.47888',
            x_coor: '1101215.18719',
            name: '두산동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1763900.1463',
            x_coor: '1102925.39362',
            name: '만촌1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1763197.95532',
            x_coor: '1103581.3728',
            name: '만촌2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1762719.15411',
            x_coor: '1103888.71631',
            name: '만촌3동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1758525.79907',
            x_coor: '1103523.33221',
            name: '범물1동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1758495.1795',
            x_coor: '1103294.21368',
            name: '범물2동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1762689.3175',
            x_coor: '1101313.71417',
            name: '범어1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1763206.55908',
            x_coor: '1102140.97168',
            name: '범어2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1763858.03748',
            x_coor: '1100917.59113',
            name: '범어3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1762997.43433',
            x_coor: '1103044.10339',
            name: '범어4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1760088.28052',
            x_coor: '1100748.59882',
            name: '상동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1762633.79449',
            x_coor: '1100256.99878',
            name: '수성1가동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1762598.14508',
            x_coor: '1101039.44318',
            name: '수성2·3가동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1763474.31848',
            x_coor: '1100817.63593',
            name: '수성4가동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1761776.91168',
            x_coor: '1100695.42029',
            name: '중동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1759915.15271',
            x_coor: '1102257.67133',
            name: '지산1동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1759102.05951',
            x_coor: '1101895.0694',
            name: '지산2동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1758238.17511',
            x_coor: '1100739.51672',
            name: '파동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1761426.59491',
            x_coor: '1102782.03949',
            name: '황금1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1761142.8443',
            x_coor: '1101616.26361',
            name: '황금2동',
            code: '62'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1764433.39789',
        x_coor: '1099470.55048',
        name: '중구',
        code: '010',
        subClassList: [
          {
            class: 'C',
            y_coor: '1763082.71393',
            x_coor: '1098454.30353',
            name: '남산1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1763606.83148',
            x_coor: '1098370.2832',
            name: '남산2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1763139.62329',
            x_coor: '1098013.41132',
            name: '남산3동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1762947.56128',
            x_coor: '1097565.3219',
            name: '남산4동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1763337.49072',
            x_coor: '1099710.23291',
            name: '대봉1동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1762959.43311',
            x_coor: '1099297.7442',
            name: '대봉2동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1763758.96588',
            x_coor: '1097174.62982',
            name: '대신동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1764195.3595',
            x_coor: '1099856.42047',
            name: '동인동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1763785.53369',
            x_coor: '1100117.52252',
            name: '삼덕동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1764191.42548',
            x_coor: '1099127.88831',
            name: '성내1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1764084.35651',
            x_coor: '1098438.86292',
            name: '성내2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1764546.57831',
            x_coor: '1098012.93262',
            name: '성내3동',
            code: '61'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1939946.40369',
    x_coor: '929709.120728',
    name: '인천광역시',
    code: '23',
    subClassList: [
      {
        class: 'B',
        y_coor: '1972457.31952',
        x_coor: '910788.079285',
        name: '강화군',
        code: '310',
        subClassList: [
          {
            class: 'C',
            y_coor: '1972457.31952',
            x_coor: '910788.079285',
            name: '강화읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1976792.08832',
            x_coor: '892839.14032',
            name: '교동면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1960707.77289',
            x_coor: '910997.02771',
            name: '길상면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1969503.30188',
            x_coor: '902107.202698',
            name: '내가면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1965762.45349',
            x_coor: '910005.450989',
            name: '불은면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1967755.07709',
            x_coor: '896061.355286',
            name: '삼산면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1961959.2959',
            x_coor: '888801.513306',
            name: '서도면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1968800.36871',
            x_coor: '910486.898315',
            name: '선원면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1974470.49487',
            x_coor: '908625.478027',
            name: '송해면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1963185.3233',
            x_coor: '904930.690186',
            name: '양도면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1978246.62451',
            x_coor: '903809.536499',
            name: '양사면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1975565.86951',
            x_coor: '904062.546204',
            name: '하점면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1959774.26331',
            x_coor: '904707.921387',
            name: '화도면',
            code: '34'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1948951.53491',
        x_coor: '932659.12677',
        name: '계양구',
        code: '070',
        subClassList: [
          {
            class: 'C',
            y_coor: '1949206.77911',
            x_coor: '931207.713623',
            name: '계산1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1949712.19513',
            x_coor: '931817.780701',
            name: '계산2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1948880.76251',
            x_coor: '931881.943909',
            name: '계산3동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1948951.53491',
            x_coor: '932659.12677',
            name: '계산4동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1952756.25',
            x_coor: '931679.9375',
            name: '계양1동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1949657.03333',
            x_coor: '932599.903687',
            name: '계양2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1952461',
            x_coor: '935081.8125',
            name: '계양3동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1948221.99707',
            x_coor: '931940.345825',
            name: '작전1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1948460.61987',
            x_coor: '931428.213684',
            name: '작전2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1947920.14789',
            x_coor: '932532.866516',
            name: '작전서운동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1948419.75391',
            x_coor: '930388.054688',
            name: '효성1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1947597.60712',
            x_coor: '930178.752808',
            name: '효성2동',
            code: '52'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1940817.91309',
        x_coor: '924878.694702',
        name: '남구',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1938633.58209',
            x_coor: '928949.436401',
            name: '관교동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1940509.61572',
            x_coor: '926934.857605',
            name: '도화1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1941247.06628',
            x_coor: '926141.300476',
            name: '도화2·3동',
            code: '77'
          },
          {
            class: 'C',
            y_coor: '1937925.33289',
            x_coor: '927900.877014',
            name: '문학동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1941233.41309',
            x_coor: '924588.584717',
            name: '숭의1·3동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1940767.67108',
            x_coor: '924588.626892',
            name: '숭의2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1940956.80573',
            x_coor: '925640.506775',
            name: '숭의4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1939999.5647',
            x_coor: '925701.592224',
            name: '용현1·4동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1940059.05933',
            x_coor: '924039.838623',
            name: '용현2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1940064.76471',
            x_coor: '924991.696899',
            name: '용현3동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1938946.58411',
            x_coor: '923642.375793',
            name: '용현5동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1940823.9411',
            x_coor: '927187.516479',
            name: '주안1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1939821.90411',
            x_coor: '926830.281311',
            name: '주안2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1938729.96149',
            x_coor: '926938.215088',
            name: '주안3동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1939855.92108',
            x_coor: '928386.077271',
            name: '주안4동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1941053.92853',
            x_coor: '928109.078003',
            name: '주안5동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1940537.50452',
            x_coor: '928572.669617',
            name: '주안6동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1939124.26288',
            x_coor: '927262.000671',
            name: '주안7동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1939239.87689',
            x_coor: '928293.961731',
            name: '주안8동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1938176.99847',
            x_coor: '926055.663696',
            name: '학익1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1938923.89288',
            x_coor: '926358.117615',
            name: '학익2동',
            code: '61'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1938959.77551',
        x_coor: '932042.072571',
        name: '남동구',
        code: '050',
        subClassList: [
          {
            class: 'C',
            y_coor: '1940231.17188',
            x_coor: '929715.895325',
            name: '간석1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1940577.91449',
            x_coor: '930042.119019',
            name: '간석2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1941058.31348',
            x_coor: '930544.100098',
            name: '간석3동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1941114.9007',
            x_coor: '929317.210205',
            name: '간석4동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1939536.43689',
            x_coor: '930266.08429',
            name: '구월1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1939946.57068',
            x_coor: '930426.972107',
            name: '구월2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1939581.08252',
            x_coor: '928971.268005',
            name: '구월3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1939221.32172',
            x_coor: '931368.494019',
            name: '구월4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1937300.69788',
            x_coor: '930568.607727',
            name: '남촌도림동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1934342.04968',
            x_coor: '931793.381775',
            name: '논현1동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1934188.89551',
            x_coor: '930648.070313',
            name: '논현2동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1933463.26489',
            x_coor: '931526.665527',
            name: '논현고잔동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1939114.18488',
            x_coor: '932066.664001',
            name: '만수1동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1940520.31989',
            x_coor: '932006.643127',
            name: '만수2동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1940589.7229',
            x_coor: '931285.94812',
            name: '만수3동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1940307.07727',
            x_coor: '932401.059875',
            name: '만수4동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1940131.33508',
            x_coor: '931705.058899',
            name: '만수5동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1938560.59729',
            x_coor: '932565.003784',
            name: '만수6동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1937677.82928',
            x_coor: '933416.663025',
            name: '장수서창동',
            code: '65'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1941969.81293',
        x_coor: '924250.817505',
        name: '동구',
        code: '020',
        subClassList: [
          {
            class: 'C',
            y_coor: '1941824.64789',
            x_coor: '923936.148499',
            name: '금창동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1943027.96149',
            x_coor: '922684.627197',
            name: '만석동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1942240.98712',
            x_coor: '923979.812317',
            name: '송림1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1942191.36511',
            x_coor: '924196.52478',
            name: '송림2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1942064.74292',
            x_coor: '924736.758118',
            name: '송림3·5동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1942445.30432',
            x_coor: '924838.288879',
            name: '송림4동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1942354.47949',
            x_coor: '924663.130005',
            name: '송림6동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1942232.62671',
            x_coor: '923694.450012',
            name: '송현1·2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1942906.66632',
            x_coor: '924199.668213',
            name: '송현3동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1942836.69629',
            x_coor: '923072.995972',
            name: '화수1·화평동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1943149.19067',
            x_coor: '923099.921082',
            name: '화수2동',
            code: '53'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1945595.13348',
        x_coor: '931225.188904',
        name: '부평구',
        code: '060',
        subClassList: [
          {
            class: 'C',
            y_coor: '1946758.12152',
            x_coor: '931701.830017',
            name: '갈산1동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1945999.26093',
            x_coor: '931569.665771',
            name: '갈산2동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1943119.69708',
            x_coor: '932556.2453',
            name: '부개1동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1944224.87531',
            x_coor: '932564.6875',
            name: '부개2동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1945280.70831',
            x_coor: '932358.418213',
            name: '부개3동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1944170.04852',
            x_coor: '931055.727783',
            name: '부평1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1943358.87793',
            x_coor: '930859.696777',
            name: '부평2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1943274.82251',
            x_coor: '930006.861694',
            name: '부평3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1944898.00128',
            x_coor: '931489.935303',
            name: '부평4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1944099.63989',
            x_coor: '931783.809509',
            name: '부평5동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1943305.29132',
            x_coor: '931434.540894',
            name: '부평6동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1945597.99231',
            x_coor: '929313.95459',
            name: '산곡1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1945470.55872',
            x_coor: '930053.3349',
            name: '산곡2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1943794.00928',
            x_coor: '930112.582275',
            name: '산곡3동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1945010.55591',
            x_coor: '930303.158997',
            name: '산곡4동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1946840.76007',
            x_coor: '932626.99762',
            name: '삼산1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1946108.03247',
            x_coor: '932512.466431',
            name: '삼산2동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1942144.83209',
            x_coor: '928922.231506',
            name: '십정1동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1941921.73309',
            x_coor: '929958.992371',
            name: '십정2동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1942486.17273',
            x_coor: '933487.441406',
            name: '일신동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1946688.35352',
            x_coor: '929456.197815',
            name: '청천1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1946473.39929',
            x_coor: '929702.798828',
            name: '청천2동',
            code: '62'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1949890.1377',
        x_coor: '927215.724609',
        name: '서구',
        code: '080',
        subClassList: [
          {
            class: 'C',
            y_coor: '1947427.94989',
            x_coor: '927052.295776',
            name: '가정1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1947762.73273',
            x_coor: '927350.947327',
            name: '가정2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1946568.84192',
            x_coor: '927343.381287',
            name: '가정3동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1944220.28632',
            x_coor: '926858.727417',
            name: '가좌1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1943810.42908',
            x_coor: '927939.167603',
            name: '가좌2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1944007.1875',
            x_coor: '927497.001892',
            name: '가좌3동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1943440.94409',
            x_coor: '927826.768188',
            name: '가좌4동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1956192.5705',
            x_coor: '925971.60437',
            name: '검단1동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1957825.9967',
            x_coor: '928422.585999',
            name: '검단2동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1955374.42133',
            x_coor: '929527.881287',
            name: '검단3동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1955065.4549',
            x_coor: '927131.830627',
            name: '검단4동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1955714.4411',
            x_coor: '923831.466614',
            name: '검단5동',
            code: '77'
          },
          {
            class: 'C',
            y_coor: '1951958.7663',
            x_coor: '927016.134521',
            name: '검암경서동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1946087.3819',
            x_coor: '927067.790771',
            name: '석남1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1945138.07489',
            x_coor: '927045.758484',
            name: '석남2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1945754.44208',
            x_coor: '927377.908386',
            name: '석남3동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1946470.12848',
            x_coor: '926850.501221',
            name: '신현원창동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1950279.04993',
            x_coor: '927410.715576',
            name: '연희동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1948409.76312',
            x_coor: '925238.497314',
            name: '청라1동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1948494.8207',
            x_coor: '924385.1512',
            name: '청라2동',
            code: '78'
          },
          {
            class: 'C',
            y_coor: '1948647.723',
            x_coor: '922265.1988',
            name: '청라3동',
            code: '79'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1934875.22632',
        x_coor: '927282.206787',
        name: '연수구',
        code: '040',
        subClassList: [
          {
            class: 'C',
            y_coor: '1934821.59491',
            x_coor: '926615.981628',
            name: '동춘1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1934059.94788',
            x_coor: '926480.112183',
            name: '동춘2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1934687.50568',
            x_coor: '927282.887329',
            name: '동춘3동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1936227.52448',
            x_coor: '929328.594421',
            name: '선학동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1932777.3515',
            x_coor: '924942.990906',
            name: '송도1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1933348.40411',
            x_coor: '923371.652771',
            name: '송도2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1931761.70929',
            x_coor: '925847.038574',
            name: '송도3동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1936207.16809',
            x_coor: '927580.951782',
            name: '연수1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1935041.0799',
            x_coor: '927596.551392',
            name: '연수2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1935884.71851',
            x_coor: '928499.736877',
            name: '연수3동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1936804.41309',
            x_coor: '925245.130005',
            name: '옥련1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1936677.95032',
            x_coor: '924642.902283',
            name: '옥련2동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1936533.8233',
            x_coor: '926215.995972',
            name: '청학동',
            code: '56'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1917938.28027',
        x_coor: '909853.081909',
        name: '옹진군',
        code: '320',
        subClassList: [
          {
            class: 'C',
            y_coor: '1984336.07568',
            x_coor: '754784.391785',
            name: '대청면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1915195.88507',
            x_coor: '879795.858826',
            name: '덕적면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '2000816.60052',
            x_coor: '755651.255188',
            name: '백령면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1948966.70709',
            x_coor: '897323.185181',
            name: '북도면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1964298.78088',
            x_coor: '841447.028931',
            name: '연평면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1917938.28027',
            x_coor: '909853.081909',
            name: '영흥면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1917971.5813',
            x_coor: '894226.554321',
            name: '자월면',
            code: '36'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1941968.77209',
        x_coor: '922325.279297',
        name: '중구',
        code: '010',
        subClassList: [
          {
            class: 'C',
            y_coor: '1941332.6861',
            x_coor: '923766.268127',
            name: '도원동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1942308.60468',
            x_coor: '922985.979675',
            name: '동인천동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1942141.39868',
            x_coor: '922061.333008',
            name: '북성동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1942664.05573',
            x_coor: '922567.924316',
            name: '송월동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1941595.0069',
            x_coor: '922635.079285',
            name: '신포동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1941290.40271',
            x_coor: '923427.570007',
            name: '신흥동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1939714.19873',
            x_coor: '920797.73761',
            name: '연안동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1944212.96472',
            x_coor: '914783.61322',
            name: '영종동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1932813.5733',
            x_coor: '904857.400879',
            name: '용유동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1944273.68011',
            x_coor: '910575.61731',
            name: '운서동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1941481.20929',
            x_coor: '923575.809998',
            name: '율목동',
            code: '57'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1685175.00391',
    x_coor: '940933.938599',
    name: '광주광역시',
    code: '24',
    subClassList: [
      {
        class: 'B',
        y_coor: '1682926.7301',
        x_coor: '935655.623596',
        name: '광산구',
        code: '050',
        subClassList: [
          {
            class: 'C',
            y_coor: '1681813.94153',
            x_coor: '935462.101318',
            name: '도산동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1678408.97009',
            x_coor: '933651.225708',
            name: '동곡동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1687551.2395',
            x_coor: '929780.097229',
            name: '본량동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1692060.5575',
            x_coor: '938510.628784',
            name: '비아동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1685511.08789',
            x_coor: '926921.725586',
            name: '삼도동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1683061.20508',
            x_coor: '936120.819092',
            name: '송정1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1682880.80011',
            x_coor: '935723.098022',
            name: '송정2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1689294.22192',
            x_coor: '938621.052673',
            name: '수완동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1687573.43292',
            x_coor: '938781.925598',
            name: '신가동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1689117.0257',
            x_coor: '939981.982727',
            name: '신창동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1683557.90033',
            x_coor: '936294.713623',
            name: '신흥동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1683256.2785',
            x_coor: '935789.451416',
            name: '어룡동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1685215.31549',
            x_coor: '936890.982117',
            name: '우산동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1686653.33228',
            x_coor: '938252.256104',
            name: '운남동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1686497.86987',
            x_coor: '937142.765808',
            name: '월곡1동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1686784.57111',
            x_coor: '936962.810913',
            name: '월곡2동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1691842.36591',
            x_coor: '931269.797119',
            name: '임곡동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1691770.81671',
            x_coor: '940148.711731',
            name: '첨단1동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1691406.07092',
            x_coor: '940234.6745',
            name: '첨단2동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1681311.12653',
            x_coor: '932598.737915',
            name: '평동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1687364.10388',
            x_coor: '936264.495911',
            name: '하남동',
            code: '63'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1682129.43707',
        x_coor: '945557.284424',
        name: '남구',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1676450.44409',
            x_coor: '939287.27832',
            name: '대촌동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1682282.16809',
            x_coor: '947001.983887',
            name: '방림1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1682011.02789',
            x_coor: '947340.918274',
            name: '방림2동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1682727.53851',
            x_coor: '945696.175415',
            name: '백운1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1682484.77051',
            x_coor: '945550.144409',
            name: '백운2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1681863.3681',
            x_coor: '946342.092102',
            name: '봉선1동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1681073.9975',
            x_coor: '946582.373779',
            name: '봉선2동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1683551.68591',
            x_coor: '946075.224304',
            name: '사직동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1679775.24249',
            x_coor: '943236.480103',
            name: '송암동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1682567.01691',
            x_coor: '946767.181519',
            name: '양림동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1683665.88312',
            x_coor: '944511.40918',
            name: '월산4동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1683023.43793',
            x_coor: '944703.952209',
            name: '월산5동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1683750.21368',
            x_coor: '945582.582581',
            name: '월산동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1682027.28571',
            x_coor: '944728.804626',
            name: '주월1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1682333.4375',
            x_coor: '944813.961792',
            name: '주월2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1679863.9657',
            x_coor: '945191.644775',
            name: '효덕동',
            code: '66'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1683571.28387',
        x_coor: '947449.640381',
        name: '동구',
        code: '010',
        subClassList: [
          {
            class: 'C',
            y_coor: '1684963.53271',
            x_coor: '947142.933899',
            name: '계림1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1684913.3385',
            x_coor: '947481.456299',
            name: '계림2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1684145.05573',
            x_coor: '947641.299683',
            name: '동명동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1684819.51129',
            x_coor: '948151.997009',
            name: '산수1동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1684516.11108',
            x_coor: '948643.665222',
            name: '산수2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1683456.33112',
            x_coor: '947454.309875',
            name: '서남동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1683899.67371',
            x_coor: '948328.689575',
            name: '지산1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1683784.06891',
            x_coor: '948488.492188',
            name: '지산2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1681209.66467',
            x_coor: '948272.626282',
            name: '지원1동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1680735.5321',
            x_coor: '948321.265625',
            name: '지원2동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1683902.79773',
            x_coor: '946963.96521',
            name: '충장동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1682286.16571',
            x_coor: '947542.5849',
            name: '학동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1682065.0531',
            x_coor: '948391.903625',
            name: '학운동',
            code: '71'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1686713.60248',
        x_coor: '946465.598877',
        name: '북구',
        code: '040',
        subClassList: [
          {
            class: 'C',
            y_coor: '1692126.9483',
            x_coor: '943727.286682',
            name: '건국동',
            code: '79'
          },
          {
            class: 'C',
            y_coor: '1688153.4967',
            x_coor: '942333.364197',
            name: '동림동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1686336.87128',
            x_coor: '948000.227905',
            name: '두암1동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1686719.12347',
            x_coor: '948310.399414',
            name: '두암2동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1685441.26147',
            x_coor: '948522.296082',
            name: '두암3동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1688427.47052',
            x_coor: '944653.39563',
            name: '매곡동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1687500.75067',
            x_coor: '948726.304993',
            name: '문화동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1688112.21332',
            x_coor: '947350.968628',
            name: '문흥1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1687821.2063',
            x_coor: '947366.408081',
            name: '문흥2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1689490.54449',
            x_coor: '945333.800171',
            name: '삼각동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1691148.91107',
            x_coor: '949906.960815',
            name: '석곡동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1685959.20331',
            x_coor: '945242.997375',
            name: '신안동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1690600.94672',
            x_coor: '943534.071106',
            name: '양산동',
            code: '80'
          },
          {
            class: 'C',
            y_coor: '1688359.49011',
            x_coor: '946115.374023',
            name: '오치1동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1688472.92212',
            x_coor: '945422.562378',
            name: '오치2동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1687397.94409',
            x_coor: '945476.398499',
            name: '용봉동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1686267.9245',
            x_coor: '947269.156982',
            name: '우산동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1686798.84912',
            x_coor: '943038.568726',
            name: '운암1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1686537.17249',
            x_coor: '944003.211914',
            name: '운암2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1687673.90472',
            x_coor: '943031.079224',
            name: '운암3동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1690242.04688',
            x_coor: '945139.029114',
            name: '일곡동',
            code: '78'
          },
          {
            class: 'C',
            y_coor: '1685789.68127',
            x_coor: '944835.708496',
            name: '임동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1684836.95709',
            x_coor: '945954.094727',
            name: '중앙동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1685315.82813',
            x_coor: '946611.19342',
            name: '중흥1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1686050.47009',
            x_coor: '946202.325073',
            name: '중흥2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1686489.52448',
            x_coor: '946923.462402',
            name: '중흥3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1685627.61871',
            x_coor: '947466.936707',
            name: '풍향동',
            code: '63'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1685175.00391',
        x_coor: '940933.938599',
        name: '서구',
        code: '020',
        subClassList: [
          {
            class: 'C',
            y_coor: '1685630.66589',
            x_coor: '943563.320679',
            name: '광천동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1682408.94049',
            x_coor: '941435.869995',
            name: '금호1동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1681710.38812',
            x_coor: '941432.932922',
            name: '금호2동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1684773.4613',
            x_coor: '944412.267273',
            name: '농성1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1684074.93152',
            x_coor: '944457.882507',
            name: '농성2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1686362.65192',
            x_coor: '942151.191589',
            name: '동천동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1684464.52411',
            x_coor: '942383.857605',
            name: '상무1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1683665.37433',
            x_coor: '942287.877075',
            name: '상무2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1680118.53052',
            x_coor: '938971.023926',
            name: '서창동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1684847.81348',
            x_coor: '944819.652771',
            name: '양3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1684560.42749',
            x_coor: '945440.654114',
            name: '양동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1685730.7915',
            x_coor: '940971.691895',
            name: '유덕동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1684053.75372',
            x_coor: '940187.387512',
            name: '치평동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1681240.53632',
            x_coor: '943387.671631',
            name: '풍암동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1684743.6181',
            x_coor: '943323.850098',
            name: '화정1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1683180.3045',
            x_coor: '943941.588379',
            name: '화정2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1683314.21631',
            x_coor: '943241.150024',
            name: '화정3동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1683135.50452',
            x_coor: '942953.335388',
            name: '화정4동',
            code: '63'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1817012.6449',
    x_coor: '989650.711426',
    name: '대전광역시',
    code: '25',
    subClassList: [
      {
        class: 'B',
        y_coor: '1816598.8877',
        x_coor: '992424.451477',
        name: '대덕구',
        code: '050',
        subClassList: [
          {
            class: 'C',
            y_coor: '1818783.2337',
            x_coor: '992051.697021',
            name: '대화동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1826972.37329',
            x_coor: '993446.099121',
            name: '덕암동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1827887.00153',
            x_coor: '992137.536316',
            name: '목상동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1819257.24768',
            x_coor: '993429.970276',
            name: '법1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1818865.6123',
            x_coor: '993795.686218',
            name: '법2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1817500.38611',
            x_coor: '995515.530212',
            name: '비래동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1827840.75513',
            x_coor: '993338.547729',
            name: '석봉동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1818698.38153',
            x_coor: '994604.108582',
            name: '송촌동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1828240.35773',
            x_coor: '993646.430725',
            name: '신탄진동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1817385.73352',
            x_coor: '991914.914673',
            name: '오정동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1818130.57892',
            x_coor: '993399.052795',
            name: '중리동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1819872.2207',
            x_coor: '992952.669128',
            name: '회덕동',
            code: '53'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1812769.92828',
        x_coor: '995959.469971',
        name: '동구',
        code: '010',
        subClassList: [
          {
            class: 'C',
            y_coor: '1816624.77228',
            x_coor: '994746.168518',
            name: '가양1동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1816851.15668',
            x_coor: '995279.129211',
            name: '가양2동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1814743.55029',
            x_coor: '994865.98468',
            name: '대동',
            code: '78'
          },
          {
            class: 'C',
            y_coor: '1816240.73151',
            x_coor: '999338.598877',
            name: '대청동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1809388.00067',
            x_coor: '997128.580505',
            name: '산내동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1815912.99591',
            x_coor: '993014.745911',
            name: '삼성동',
            code: '80'
          },
          {
            class: 'C',
            y_coor: '1816349.79749',
            x_coor: '994391.338074',
            name: '성남동',
            code: '79'
          },
          {
            class: 'C',
            y_coor: '1814009.84009',
            x_coor: '994431.138184',
            name: '신인동',
            code: '77'
          },
          {
            class: 'C',
            y_coor: '1814528.93311',
            x_coor: '996548.768921',
            name: '용운동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1817814.11627',
            x_coor: '993933.877502',
            name: '용전동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1815345.63629',
            x_coor: '995391.561829',
            name: '자양동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1815248.8327',
            x_coor: '994508.372681',
            name: '중앙동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1813339.68488',
            x_coor: '996202.854797',
            name: '판암1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1813680.78552',
            x_coor: '996174.341003',
            name: '판암2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1816856.79089',
            x_coor: '993344.746277',
            name: '홍도동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1812627.24269',
            x_coor: '995653.202822',
            name: '효동',
            code: '53'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1817571.66107',
        x_coor: '989576.795105',
        name: '서구',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1811812.2713',
            x_coor: '986475.256287',
            name: '가수원동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1814756.34808',
            x_coor: '989697.022095',
            name: '가장동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1817054.76251',
            x_coor: '988138.984192',
            name: '갈마1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1816603.55048',
            x_coor: '988771.645874',
            name: '갈마2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1811848.64972',
            x_coor: '985396.031372',
            name: '관저1동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1811340.42749',
            x_coor: '985202.216309',
            name: '관저2동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1815539.17828',
            x_coor: '989415.963989',
            name: '괴정동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1806524.41931',
            x_coor: '985770.542175',
            name: '기성동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1814989.5127',
            x_coor: '988994.138611',
            name: '내동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1813192.04529',
            x_coor: '989328.995911',
            name: '도마1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1812834.4895',
            x_coor: '988652.7453',
            name: '도마2동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1817239.88049',
            x_coor: '989773.911926',
            name: '둔산1동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1817571.66107',
            x_coor: '989576.795105',
            name: '둔산2동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1817341.30908',
            x_coor: '991024.554199',
            name: '둔산3동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1818907.2923',
            x_coor: '988788.70752',
            name: '만년동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1814277.85712',
            x_coor: '989835.442078',
            name: '변동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1812167.67633',
            x_coor: '988655.559082',
            name: '복수동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1815503.07788',
            x_coor: '990519.873474',
            name: '용문동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1817484.6355',
            x_coor: '987223.270691',
            name: '월평1동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1818468.90033',
            x_coor: '988705.31842',
            name: '월평2동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1818103.77332',
            x_coor: '988056.724792',
            name: '월평3동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1811915.56873',
            x_coor: '988034.696899',
            name: '정림동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1816587.05908',
            x_coor: '990611.691711',
            name: '탄방동',
            code: '57'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1818328.65649',
        x_coor: '987104.00293',
        name: '유성구',
        code: '040',
        subClassList: [
          {
            class: 'C',
            y_coor: '1825076.58051',
            x_coor: '990029.576782',
            name: '관평동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1826997.04651',
            x_coor: '989583.612976',
            name: '구즉동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1818995.57471',
            x_coor: '983714.011597',
            name: '노은1동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1823057.125',
            x_coor: '982910.625',
            name: '노은2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1821179.375',
            x_coor: '982001.8125',
            name: '노은3동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1821315.2359',
            x_coor: '986313.280823',
            name: '신성동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1817310.57928',
            x_coor: '985550.347473',
            name: '온천1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1818328.65649',
            x_coor: '987104.00293',
            name: '온천2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1816094.96509',
            x_coor: '985937.873901',
            name: '원신흥동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1822506.6673',
            x_coor: '991067.16687',
            name: '전민동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1811401.0387',
            x_coor: '983518.379517',
            name: '진잠동',
            code: '51'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1814237.37988',
        x_coor: '992929.122681',
        name: '중구',
        code: '020',
        subClassList: [
          {
            class: 'C',
            y_coor: '1813372.51172',
            x_coor: '993254.582092',
            name: '대사동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1814237.37988',
            x_coor: '992929.122681',
            name: '대흥동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1815395.0769',
            x_coor: '991786.922485',
            name: '목동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1813208.23712',
            x_coor: '994427.353088',
            name: '문창동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1813114.50409',
            x_coor: '991602.841675',
            name: '문화1동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1812273.63452',
            x_coor: '990954.90802',
            name: '문화2동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1812992.12592',
            x_coor: '994044.139893',
            name: '부사동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1812015.56427',
            x_coor: '989777.621887',
            name: '산성동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1812486.85791',
            x_coor: '994829.772095',
            name: '석교동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1814237.87811',
            x_coor: '991369.722229',
            name: '오류동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1814205.85211',
            x_coor: '991957.369019',
            name: '용두동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1813078.48468',
            x_coor: '990601.59729',
            name: '유천1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1813124.25092',
            x_coor: '990950.956299',
            name: '유천2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1815006.47113',
            x_coor: '992520.238525',
            name: '은행선화동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1815727.45227',
            x_coor: '992141.047607',
            name: '중촌동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1814308.24188',
            x_coor: '990761.99231',
            name: '태평1동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1813775.74432',
            x_coor: '990386.786804',
            name: '태평2동',
            code: '64'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1728578.64948',
    x_coor: '1164223.2204',
    name: '울산광역시',
    code: '26',
    subClassList: [
      {
        class: 'B',
        y_coor: '1729076.8045',
        x_coor: '1165895.91589',
        name: '남구',
        code: '020',
        subClassList: [
          {
            class: 'C',
            y_coor: '1728228.9917',
            x_coor: '1164681.70831',
            name: '달동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1727154.96429',
            x_coor: '1165632.86987',
            name: '대현동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1729758.7251',
            x_coor: '1159591.88959',
            name: '무거동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1729141.11469',
            x_coor: '1166055.83911',
            name: '삼산동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1729658.40808',
            x_coor: '1160073.1734',
            name: '삼호동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1725655.47852',
            x_coor: '1166427.52881',
            name: '선암동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1726908.20892',
            x_coor: '1164881.6886',
            name: '수암동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1728762.40552',
            x_coor: '1163766.78699',
            name: '신정1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1728026.14349',
            x_coor: '1163898.65039',
            name: '신정2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1729191.77631',
            x_coor: '1164649.56348',
            name: '신정3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1727447.91467',
            x_coor: '1164505.13971',
            name: '신정4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1729183.94873',
            x_coor: '1165107.19098',
            name: '신정5동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1726410.41211',
            x_coor: '1166754.23907',
            name: '야음장생포동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1727907.5553',
            x_coor: '1162727.1109',
            name: '옥동',
            code: '60'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1724899.63348',
        x_coor: '1173822.31219',
        name: '동구',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1728730.25629',
            x_coor: '1174123.74512',
            name: '남목1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1727124.83728',
            x_coor: '1175126.78473',
            name: '남목2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1729500.0033',
            x_coor: '1175072.72888',
            name: '남목3동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1724899.63348',
            x_coor: '1173822.31219',
            name: '대송동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1722850.50409',
            x_coor: '1174535.42682',
            name: '방어동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1724166.86548',
            x_coor: '1174716.67731',
            name: '일산동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1726252.9397',
            x_coor: '1174886.84131',
            name: '전하1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1725365.53027',
            x_coor: '1174726.49518',
            name: '전하2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1723920.33691',
            x_coor: '1174385.30591',
            name: '화정동',
            code: '53'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1733441.88928',
        x_coor: '1168637.18738',
        name: '북구',
        code: '040',
        subClassList: [
          {
            class: 'C',
            y_coor: '1736933.87872',
            x_coor: '1176219.94269',
            name: '강동동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1737882.57349',
            x_coor: '1168084.974',
            name: '농소1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1739582.87671',
            x_coor: '1167346.50208',
            name: '농소2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1738500.5531',
            x_coor: '1166589.20837',
            name: '농소3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1734517.42328',
            x_coor: '1168976.43103',
            name: '송정동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1729710.4801',
            x_coor: '1170893.48529',
            name: '양정동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1727734.0473',
            x_coor: '1171749.27771',
            name: '염포동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1732899.1059',
            x_coor: '1168630.21069',
            name: '효문동',
            code: '56'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1729067.9872',
        x_coor: '1152931.27075',
        name: '울주군',
        code: '310',
        subClassList: [
          {
            class: 'C',
            y_coor: '1741109.99188',
            x_coor: '1154000.73889',
            name: '두동면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1740354.55688',
            x_coor: '1150448.59943',
            name: '두서면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1732002.37408',
            x_coor: '1158060.9223',
            name: '범서읍',
            code: '14'
          },
          {
            class: 'C',
            y_coor: '1727965.77972',
            x_coor: '1145863.03821',
            name: '삼남면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1726504.42249',
            x_coor: '1150293.74982',
            name: '삼동면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1733868.8797',
            x_coor: '1144161.50989',
            name: '상북면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1707568.09351',
            x_coor: '1165916.7981',
            name: '서생면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1731594.2049',
            x_coor: '1147327.2901',
            name: '언양읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1716941.92908',
            x_coor: '1164712.75061',
            name: '온산읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1715153.30188',
            x_coor: '1161669.40771',
            name: '온양읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1719722.87048',
            x_coor: '1155013.8418',
            name: '웅촌면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1723421.62653',
            x_coor: '1163820.17328',
            name: '청량면',
            code: '33'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1731919.06787',
        x_coor: '1166068.54773',
        name: '중구',
        code: '010',
        subClassList: [
          {
            class: 'C',
            y_coor: '1730367.94672',
            x_coor: '1160942.59949',
            name: '다운동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1730495.50513',
            x_coor: '1166915.534',
            name: '반구1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1731263.93927',
            x_coor: '1166825.396',
            name: '반구2동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1732015.24072',
            x_coor: '1167336.14691',
            name: '병영1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1733052.03308',
            x_coor: '1167260.86749',
            name: '병영2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1731203.9895',
            x_coor: '1165580.31122',
            name: '복산1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1731525.49609',
            x_coor: '1166226.99127',
            name: '복산2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1732436.33472',
            x_coor: '1163988.11298',
            name: '성안동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1732042.94592',
            x_coor: '1166494.2926',
            name: '약사동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1730262.80109',
            x_coor: '1164268.56409',
            name: '우정동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1730587.5755',
            x_coor: '1165324.26312',
            name: '중앙동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1730446.1123',
            x_coor: '1163547.18219',
            name: '태화동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1730364.49127',
            x_coor: '1166287.37079',
            name: '학성동',
            code: '51'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1843889.07831',
    x_coor: '981426.26123',
    name: '세종특별자치시',
    code: '29',
    subClassList: [
      {
        class: 'B',
        y_coor: '1843889.07831',
        x_coor: '981426.26123',
        name: '세종시',
        code: '010',
        subClassList: [
          {
            class: 'C',
            y_coor: '1829607.3811',
            x_coor: '980321.337097',
            name: '금남면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1834404.5',
            x_coor: '978696.8125',
            name: '도담동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1836898.21692',
            x_coor: '988442.379211',
            name: '부강면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1858313.2251',
            x_coor: '969485.608398',
            name: '소정면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1834992.9282',
            x_coor: '977336.2261',
            name: '아름동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1838243.0343',
            x_coor: '979746.967712',
            name: '연기면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1840162.0849',
            x_coor: '984503.583313',
            name: '연동면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1843886.7243',
            x_coor: '979562.54541',
            name: '연서면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1833266.48389',
            x_coor: '973636.145874',
            name: '장군면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1850934.56848',
            x_coor: '978922.96759',
            name: '전동면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1853759.32428',
            x_coor: '972840.127625',
            name: '전의면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1845212.54547',
            x_coor: '981975.628601',
            name: '조치원읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1833998.448',
            x_coor: '977396.9955',
            name: '종촌동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1831294.00513',
            x_coor: '978029.387024',
            name: '한솔동',
            code: '51'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1919647.64191',
    x_coor: '956444.22821',
    name: '경기도',
    code: '31',
    subClassList: [
      {
        class: 'B',
        y_coor: '1981263.67468',
        x_coor: '1000828.77802',
        name: '가평군',
        code: '370',
        subClassList: [
          {
            class: 'C',
            y_coor: '1981263.67468',
            x_coor: '1000828.77802',
            name: '가평읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1987312.68793',
            x_coor: '1004419.11853',
            name: '북면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1978340.3833',
            x_coor: '987393.676331',
            name: '상면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1964073.8277',
            x_coor: '999531.761292',
            name: '설악면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1985256.9373',
            x_coor: '988724.760339',
            name: '조종면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1971206.26813',
            x_coor: '993319.033997',
            name: '청평면',
            code: '32'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1962311.43152',
        x_coor: '941076.667908',
        name: '고양시 덕양구',
        code: '101',
        subClassList: [
          {
            class: 'C',
            y_coor: '1967254.82288',
            x_coor: '947438.332581',
            name: '고양동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1965576.65393',
            x_coor: '943795.613098',
            name: '관산동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1958357.34369',
            x_coor: '939818.246521',
            name: '능곡동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1954200.77332',
            x_coor: '944834.494629',
            name: '대덕동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1961872.22192',
            x_coor: '941902.94342',
            name: '성사1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1961704.96832',
            x_coor: '941156.9151',
            name: '성사2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1961628.40948',
            x_coor: '946511.840027',
            name: '신도동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1964389.67853',
            x_coor: '944961.787109',
            name: '원신동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1962431.38647',
            x_coor: '940870.666016',
            name: '주교동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1960945.47491',
            x_coor: '947005.432922',
            name: '창릉동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1958303.73907',
            x_coor: '941394.457397',
            name: '행신1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1957511.71667',
            x_coor: '941135.778076',
            name: '행신2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1958752.76849',
            x_coor: '941636.840515',
            name: '행신3동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1957881.51593',
            x_coor: '940456.7146',
            name: '행주동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1955809.64972',
            x_coor: '944620.591614',
            name: '화전동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1960786.57147',
            x_coor: '941198.781982',
            name: '화정1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1959217.76489',
            x_coor: '941384.55011',
            name: '화정2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1961524.9679',
            x_coor: '948891.311096',
            name: '효자동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1960806.06049',
            x_coor: '943040.730896',
            name: '흥도동',
            code: '53'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1962407.27173',
        x_coor: '936048.57959',
        name: '고양시 일산동구',
        code: '103',
        subClassList: [
          {
            class: 'C',
            y_coor: '1967140.63452',
            x_coor: '940689.307007',
            name: '고봉동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1962407.27173',
            x_coor: '936048.57959',
            name: '마두1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1961807.05652',
            x_coor: '936882.40033',
            name: '마두2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1961362.21112',
            x_coor: '937587.689575',
            name: '백석1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1960732.20093',
            x_coor: '936965.800598',
            name: '백석2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1964422.82489',
            x_coor: '939482.062683',
            name: '식사동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1960488.9671',
            x_coor: '935644.870422',
            name: '장항1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1961399.55249',
            x_coor: '936337.570374',
            name: '장항2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1963903.7901',
            x_coor: '936490.322693',
            name: '정발산동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1966050.30011',
            x_coor: '936561.417786',
            name: '중산동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1962961.17529',
            x_coor: '938250.243896',
            name: '풍산동',
            code: '54'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1964222.65289',
        x_coor: '933919.480591',
        name: '고양시 일산서구',
        code: '104',
        subClassList: [
          {
            class: 'C',
            y_coor: '1964222.65289',
            x_coor: '933919.480591',
            name: '대화동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1965968.75531',
            x_coor: '934254.361572',
            name: '송산동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1963820.22412',
            x_coor: '932576.466492',
            name: '송포동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1965551.17133',
            x_coor: '935507.156128',
            name: '일산1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1965255.3219',
            x_coor: '936268.005371',
            name: '일산2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1964407.38629',
            x_coor: '935649.111511',
            name: '일산3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1963655.18311',
            x_coor: '935030.03302',
            name: '주엽1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1964101.3587',
            x_coor: '934784.992493',
            name: '주엽2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1966335.36731',
            x_coor: '935501.621277',
            name: '탄현동',
            code: '54'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1936794.7135',
        x_coor: '954672.079773',
        name: '과천시',
        code: '110',
        subClassList: [
          {
            class: 'C',
            y_coor: '1935704.70068',
            x_coor: '954795.341614',
            name: '갈현동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1938917.32953',
            x_coor: '955367.289307',
            name: '과천동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1936479.46973',
            x_coor: '955930.693604',
            name: '문원동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1936243.38348',
            x_coor: '955210.933472',
            name: '별양동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1937265.8949',
            x_coor: '955634.352295',
            name: '부림동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1936794.7135',
            x_coor: '954672.079773',
            name: '중앙동',
            code: '51'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1942331.9751',
        x_coor: '943823.605591',
        name: '광명시',
        code: '060',
        subClassList: [
          {
            class: 'C',
            y_coor: '1943454.82831',
            x_coor: '943657.709473',
            name: '광명1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1942875.7561',
            x_coor: '943057.161072',
            name: '광명2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1942527.93347',
            x_coor: '943144.444214',
            name: '광명3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1942183.5531',
            x_coor: '943087.494019',
            name: '광명4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1942370.5423',
            x_coor: '942309.415771',
            name: '광명5동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1941186.22888',
            x_coor: '942386.206177',
            name: '광명6동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1941322.70068',
            x_coor: '942834.261719',
            name: '광명7동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1939400.55511',
            x_coor: '945598.05481',
            name: '소하1동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1937175.57428',
            x_coor: '945168.290222',
            name: '소하2동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1943695.0249',
            x_coor: '944121.964172',
            name: '철산1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1943016.77551',
            x_coor: '944003.952209',
            name: '철산2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1942154.06207',
            x_coor: '944491.768188',
            name: '철산3동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1941840.05573',
            x_coor: '943807.892395',
            name: '철산4동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1940848.14929',
            x_coor: '944212.443115',
            name: '하안1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1940793.60809',
            x_coor: '944705.635376',
            name: '하안2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1940125.4837',
            x_coor: '945310.997192',
            name: '하안3동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1940904.67249',
            x_coor: '944972.280823',
            name: '하안4동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1935344.74988',
            x_coor: '942600.539185',
            name: '학온동',
            code: '68'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1936726.26813',
        x_coor: '978332.233276',
        name: '광주시',
        code: '250',
        subClassList: [
          {
            class: 'C',
            y_coor: '1934662.93811',
            x_coor: '978526.600708',
            name: '경안동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1927997.59851',
            x_coor: '986924.973572',
            name: '곤지암읍',
            code: '14'
          },
          {
            class: 'C',
            y_coor: '1932248.40308',
            x_coor: '976079.978394',
            name: '광남동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1943897.16791',
            x_coor: '982473.355103',
            name: '남종면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1940027',
            x_coor: '976482.625',
            name: '남한산성면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1922856.27148',
            x_coor: '985038.453613',
            name: '도척면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1935649.1795',
            x_coor: '977532.753174',
            name: '송정동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1929716.24872',
            x_coor: '975967.810974',
            name: '오포읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1931816.32092',
            x_coor: '981228.788391',
            name: '초월읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1940847.25568',
            x_coor: '982937.881897',
            name: '퇴촌면',
            code: '35'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1955055.47247',
        x_coor: '967308.106201',
        name: '구리시',
        code: '120',
        subClassList: [
          {
            class: 'C',
            y_coor: '1960300.40393',
            x_coor: '965915.962891',
            name: '갈매동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1955822.13892',
            x_coor: '967134.342773',
            name: '교문1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1954234.71112',
            x_coor: '967704.581177',
            name: '교문2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1956987.94067',
            x_coor: '968171.73822',
            name: '동구동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1955285.40588',
            x_coor: '969029.46698',
            name: '수택1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1954926.31909',
            x_coor: '968227.274902',
            name: '수택2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1954741.94189',
            x_coor: '968096.721619',
            name: '수택3동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1956185.92133',
            x_coor: '967781.639099',
            name: '인창동',
            code: '53'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1929261.8587',
        x_coor: '949975.586182',
        name: '군포시',
        code: '160',
        subClassList: [
          {
            class: 'C',
            y_coor: '1929379.27368',
            x_coor: '949343.143982',
            name: '광정동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1928431.36688',
            x_coor: '950896.752686',
            name: '군포1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1927623.19269',
            x_coor: '950673.754211',
            name: '군포2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1929113.16968',
            x_coor: '948801.028687',
            name: '궁내동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1929741.67188',
            x_coor: '950348.423706',
            name: '금정동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1925857.9635',
            x_coor: '948206.807007',
            name: '대야동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1930626.20508',
            x_coor: '950291.690002',
            name: '산본1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1930256.51691',
            x_coor: '949770.244019',
            name: '산본2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1928715.89209',
            x_coor: '948727.940613',
            name: '수리동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1928151.18231',
            x_coor: '949476.759094',
            name: '오금동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1928968.9679',
            x_coor: '950323.05188',
            name: '재궁동',
            code: '57'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1957598.60248',
        x_coor: '930782.28363',
        name: '김포시',
        code: '230',
        subClassList: [
          {
            class: 'C',
            y_coor: '1956245.29028',
            x_coor: '935648.549988',
            name: '고촌읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1961136.43372',
            x_coor: '922695.909973',
            name: '구래동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1958975.63068',
            x_coor: '929914.481995',
            name: '김포1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1961248.625',
            x_coor: '926185.25',
            name: '김포2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1961463.4743',
            x_coor: '919009.686829',
            name: '대곶면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1958050.9599',
            x_coor: '930876.911499',
            name: '사우동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1962355.83429',
            x_coor: '922853.133118',
            name: '양촌읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1962271.625',
            x_coor: '928167.25',
            name: '운양동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1969042.96051',
            x_coor: '916493.195496',
            name: '월곶면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1960351.4101',
            x_coor: '926890.540527',
            name: '장기동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1966187.77307',
            x_coor: '920413.581299',
            name: '통진읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1956143.01331',
            x_coor: '931328.873596',
            name: '풍무동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1969308.92712',
            x_coor: '923444.236694',
            name: '하성면',
            code: '36'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1959651.31927',
        x_coor: '974987.363281',
        name: '남양주시',
        code: '130',
        subClassList: [
          {
            class: 'C',
            y_coor: '1959651.31927',
            x_coor: '974987.363281',
            name: '금곡동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1956476.83649',
            x_coor: '969897.762878',
            name: '도농동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1960808.46368',
            x_coor: '966643.344604',
            name: '별내동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1967074.34949',
            x_coor: '966932.240173',
            name: '별내면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1967125.9679',
            x_coor: '984671.928284',
            name: '수동면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1957481.29828',
            x_coor: '972389.36969',
            name: '양정동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1966629.11652',
            x_coor: '973966.770874',
            name: '오남읍',
            code: '15'
          },
          {
            class: 'C',
            y_coor: '1954033.02649',
            x_coor: '974982.809875',
            name: '와부읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1948524.74768',
            x_coor: '982635.37262',
            name: '조안면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1956713.95007',
            x_coor: '970738.148987',
            name: '지금동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1961731.63788',
            x_coor: '971569.515808',
            name: '진건읍',
            code: '14'
          },
          {
            class: 'C',
            y_coor: '1969683.34351',
            x_coor: '972668.024109',
            name: '진접읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1961153.96289',
            x_coor: '968653.47937',
            name: '퇴계원면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1961010.76727',
            x_coor: '976717.690979',
            name: '평내동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1961740.50952',
            x_coor: '977828.690674',
            name: '호평동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1962058.43988',
            x_coor: '982422.752014',
            name: '화도읍',
            code: '13'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1989395.9895',
        x_coor: '961344.738525',
        name: '동두천시',
        code: '080',
        subClassList: [
          {
            class: 'C',
            y_coor: '1990951.90289',
            x_coor: '961440.082275',
            name: '보산동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1988830.36969',
            x_coor: '961530.036011',
            name: '불현동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1989599.35431',
            x_coor: '959937.102905',
            name: '상패동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1989814.93909',
            x_coor: '961839.557129',
            name: '생연1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1989184.98669',
            x_coor: '960349.356079',
            name: '생연2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1992269.2619',
            x_coor: '961090.411316',
            name: '소요동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1987925.62927',
            x_coor: '960823.657288',
            name: '송내동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1989859.9201',
            x_coor: '960726.850891',
            name: '중앙동',
            code: '53'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1945164.0768',
        x_coor: '935145.412',
        name: '부천시',
        code: '050',
        subClassList: [
          {
            class: 'C',
            y_coor: '1948017.2079',
            x_coor: '939211.0889',
            name: '고강1동',
            code: '82'
          },
          {
            class: 'C',
            y_coor: '1947742.8414',
            x_coor: '940341.9456',
            name: '고강본동',
            code: '81'
          },
          {
            class: 'C',
            y_coor: '1942325.9418',
            x_coor: '938728.0368',
            name: '괴안동',
            code: '77'
          },
          {
            class: 'C',
            y_coor: '1946575.4164',
            x_coor: '936896.5236',
            name: '도당동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1941486.8869',
            x_coor: '938961.966',
            name: '범박동',
            code: '78'
          },
          {
            class: 'C',
            y_coor: '1943880.3366',
            x_coor: '933979.5673',
            name: '상1동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1944851.3666',
            x_coor: '934097.767',
            name: '상2동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1945700.0038',
            x_coor: '933792.7471',
            name: '상3동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1944218.7612',
            x_coor: '934656.3116',
            name: '상동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1946605.4855',
            x_coor: '938451.1001',
            name: '성곡동',
            code: '80'
          },
          {
            class: 'C',
            y_coor: '1943193.4383',
            x_coor: '937639.5959',
            name: '소사동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1941743.9077',
            x_coor: '937936.5827',
            name: '소사본3동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1941927.585',
            x_coor: '937454.7863',
            name: '소사본동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1943017.0259',
            x_coor: '934241.1917',
            name: '송내1동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1942840.7396',
            x_coor: '935423.4823',
            name: '송내2동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1946986.3406',
            x_coor: '935817.1186',
            name: '신흥동',
            code: '86'
          },
          {
            class: 'C',
            y_coor: '1943762.7731',
            x_coor: '936404.7849',
            name: '심곡1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1943358.7392',
            x_coor: '936977.094',
            name: '심곡2동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1943376.0852',
            x_coor: '935806.2492',
            name: '심곡3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1942822.4788',
            x_coor: '936254.7483',
            name: '심곡본1동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1942630.8213',
            x_coor: '936347.6201',
            name: '심곡본동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1946251.9351',
            x_coor: '935602.1158',
            name: '약대동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1943553.2951',
            x_coor: '939593.5921',
            name: '역곡1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1943207.068',
            x_coor: '938704.9164',
            name: '역곡2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1942817.449',
            x_coor: '939015.4757',
            name: '역곡3동',
            code: '79'
          },
          {
            class: 'C',
            y_coor: '1947962.4427',
            x_coor: '937334.0856',
            name: '오정동',
            code: '83'
          },
          {
            class: 'C',
            y_coor: '1944153.6274',
            x_coor: '937108.3611',
            name: '원미1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1943869.9099',
            x_coor: '937084.9888',
            name: '원미2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1947631.0209',
            x_coor: '938628.2852',
            name: '원종1동',
            code: '84'
          },
          {
            class: 'C',
            y_coor: '1947550.4554',
            x_coor: '938070.9076',
            name: '원종2동',
            code: '85'
          },
          {
            class: 'C',
            y_coor: '1944537.2616',
            x_coor: '935597.5814',
            name: '중1동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1944108.6747',
            x_coor: '935460.8325',
            name: '중2동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1945186.5291',
            x_coor: '936189.6657',
            name: '중3동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1945452.9017',
            x_coor: '934825.1623',
            name: '중4동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1943425.6642',
            x_coor: '935303.8753',
            name: '중동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1945061.1853',
            x_coor: '936881.5553',
            name: '춘의동',
            code: '59'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1931596.24213',
        x_coor: '966266.569885',
        name: '성남시 분당구',
        code: '023',
        subClassList: [
          {
            class: 'C',
            y_coor: '1927876.35553',
            x_coor: '965616.321411',
            name: '구미1동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1926800.73309',
            x_coor: '966414.395874',
            name: '구미동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1928138.72467',
            x_coor: '965201.736328',
            name: '금곡동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1932231.99408',
            x_coor: '965550.55481',
            name: '백현동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1930179.88953',
            x_coor: '967334.490112',
            name: '분당동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1934181.30133',
            x_coor: '966043.742493',
            name: '삼평동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1931596.40192',
            x_coor: '966894.707703',
            name: '서현1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1930838.2403',
            x_coor: '967649.263184',
            name: '서현2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1930778.41589',
            x_coor: '966184.588623',
            name: '수내1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1930444.50769',
            x_coor: '966430.133911',
            name: '수내2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1929821.62189',
            x_coor: '966895.629578',
            name: '수내3동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1934833.40088',
            x_coor: '967278.289917',
            name: '야탑1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1934542.7309',
            x_coor: '967023.815125',
            name: '야탑2동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1934695.59528',
            x_coor: '967959.09967',
            name: '야탑3동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1932472.09473',
            x_coor: '962637.089417',
            name: '운중동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1933447.85327',
            x_coor: '967001.140015',
            name: '이매1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1933452.2597',
            x_coor: '966533.633118',
            name: '이매2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1930122.25',
            x_coor: '965142.625',
            name: '정자1동',
            code: '77'
          },
          {
            class: 'C',
            y_coor: '1929729.89832',
            x_coor: '965932.436584',
            name: '정자2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1929149.8067',
            x_coor: '966309.820313',
            name: '정자3동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1929812.125',
            x_coor: '965600',
            name: '정자동',
            code: '78'
          },
          {
            class: 'C',
            y_coor: '1932389.43549',
            x_coor: '964475.351379',
            name: '판교동',
            code: '75'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1939055.46289',
        x_coor: '968668.456909',
        name: '성남시 수정구',
        code: '021',
        subClassList: [
          {
            class: 'C',
            y_coor: '1936285.2417',
            x_coor: '964746.393188',
            name: '고등동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1938967.79547',
            x_coor: '969517.562012',
            name: '단대동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1940022.52693',
            x_coor: '967327.723631',
            name: '복정동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1939269.47931',
            x_coor: '969050.710022',
            name: '산성동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1937747.81635',
            x_coor: '967782.620763',
            name: '수진1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1937638.87073',
            x_coor: '967156.804382',
            name: '수진2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1935948.11932',
            x_coor: '965301.590576',
            name: '시흥동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1939570.23907',
            x_coor: '965011.793884',
            name: '신촌동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1938268.94989',
            x_coor: '968260.070496',
            name: '신흥1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1939055.46289',
            x_coor: '968668.456909',
            name: '신흥2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1938319.47333',
            x_coor: '968937.825928',
            name: '신흥3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1939579.0509',
            x_coor: '970013.808289',
            name: '양지동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1941042.47881',
            x_coor: '968757.202515',
            name: '위례동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1938019.83411',
            x_coor: '966930.871399',
            name: '태평1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1938723.7959',
            x_coor: '968044.858398',
            name: '태평2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1938523.28369',
            x_coor: '967545.306274',
            name: '태평3동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1938811.72992',
            x_coor: '968280.865479',
            name: '태평4동',
            code: '57'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1936864.14893',
        x_coor: '967909.303101',
        name: '성남시 중원구',
        code: '022',
        subClassList: [
          {
            class: 'C',
            y_coor: '1938491.45929',
            x_coor: '970141.042297',
            name: '금광1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1938617.63971',
            x_coor: '970280.444702',
            name: '금광2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1935319.0863',
            x_coor: '969276.686401',
            name: '도촌동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1937168.88232',
            x_coor: '970308.56543',
            name: '상대원1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1937803.35193',
            x_coor: '969775.648926',
            name: '상대원2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1937886.0473',
            x_coor: '970404.848328',
            name: '상대원3동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1937050.52692',
            x_coor: '967405.72699',
            name: '성남동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1939266.00812',
            x_coor: '970717.391907',
            name: '은행1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1939814.62433',
            x_coor: '970503.237305',
            name: '은행2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1938240.99268',
            x_coor: '969597.977905',
            name: '중앙동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1936628.84149',
            x_coor: '968712.171082',
            name: '하대원동',
            code: '60'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1917766.38611',
        x_coor: '953174.007507',
        name: '수원시 권선구',
        code: '012',
        subClassList: [
          {
            class: 'C',
            y_coor: '1916153.76788',
            x_coor: '958610.263184',
            name: '곡선동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1919930.5105',
            x_coor: '953143.981873',
            name: '구운동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1917757.18213',
            x_coor: '957844.278625',
            name: '권선1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1917041.53351',
            x_coor: '958293.653625',
            name: '권선2동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1919553.243',
            x_coor: '950735.7363',
            name: '금곡동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1919422.17072',
            x_coor: '954435.943176',
            name: '서둔동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1918259.07288',
            x_coor: '956371.879211',
            name: '세류1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1917275.39313',
            x_coor: '956820.223022',
            name: '세류2동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1917906.88312',
            x_coor: '956723.518799',
            name: '세류3동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1921723.3291',
            x_coor: '952096.815491',
            name: '입북동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1917805.80713',
            x_coor: '955144.712524',
            name: '평동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1918729.6946',
            x_coor: '951858.9791',
            name: '호매실동',
            code: '66'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1917950.67889',
        x_coor: '959790.593201',
        name: '수원시 영통구',
        code: '014',
        subClassList: [
          {
            class: 'C',
            y_coor: '1922589.5',
            x_coor: '959914.9375',
            name: '광교1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1921014.5',
            x_coor: '962097.9375',
            name: '광교2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1919164.4057',
            x_coor: '959263.146973',
            name: '매탄1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1919123.90253',
            x_coor: '959875.086609',
            name: '매탄2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1917950.67889',
            x_coor: '959790.593201',
            name: '매탄3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1918562.78027',
            x_coor: '959985.874817',
            name: '매탄4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1918686.0481',
            x_coor: '962810.348694',
            name: '영통1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1916546.56873',
            x_coor: '960651.389771',
            name: '영통2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1919487.0899',
            x_coor: '960393.755798',
            name: '원천동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1915648.59912',
            x_coor: '960230.888428',
            name: '태장동',
            code: '59'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1922902.55048',
        x_coor: '956604.193909',
        name: '수원시 장안구',
        code: '011',
        subClassList: [
          {
            class: 'C',
            y_coor: '1922514.36591',
            x_coor: '956312.739685',
            name: '송죽동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1921392.45361',
            x_coor: '957602.604393',
            name: '연무동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1921688.74109',
            x_coor: '956932.301025',
            name: '영화동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1922204.32269',
            x_coor: '953153.216492',
            name: '율천동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1922703.42108',
            x_coor: '954916.525208',
            name: '정자1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1921907.89349',
            x_coor: '955723.790283',
            name: '정자2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1921980.68091',
            x_coor: '955027.23468',
            name: '정자3동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1922647.78192',
            x_coor: '957150.723877',
            name: '조원1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1923074.13409',
            x_coor: '956547.985107',
            name: '조원2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1923601.37488',
            x_coor: '955464.583618',
            name: '파장동',
            code: '54'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1920522.34167',
        x_coor: '957458.685425',
        name: '수원시 팔달구',
        code: '013',
        subClassList: [
          {
            class: 'C',
            y_coor: '1919510.58551',
            x_coor: '955772.793396',
            name: '고등동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1918961.99371',
            x_coor: '956932.340515',
            name: '매교동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1918984.09851',
            x_coor: '956173.470825',
            name: '매산동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1921144.42792',
            x_coor: '958650.946106',
            name: '우만1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1919998.11969',
            x_coor: '959200.40332',
            name: '우만2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1918381.73352',
            x_coor: '958212.816101',
            name: '인계동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1920449.02032',
            x_coor: '958200.091492',
            name: '지동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1920522.34167',
            x_coor: '957458.685425',
            name: '행궁동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1919835.62073',
            x_coor: '955234.048706',
            name: '화서1동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1920802.43689',
            x_coor: '954464.202698',
            name: '화서2동',
            code: '71'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1931457.60968',
        x_coor: '938295.278076',
        name: '시흥시',
        code: '150',
        subClassList: [
          {
            class: 'C',
            y_coor: '1937731.44812',
            x_coor: '940983.649109',
            name: '과림동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1927016.7843',
            x_coor: '936669.397217',
            name: '군자동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1929915.01672',
            x_coor: '939419.494873',
            name: '능곡동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1938445.08008',
            x_coor: '937064.823792',
            name: '대야동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1935648.92633',
            x_coor: '939415.375977',
            name: '매화동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1931919.50732',
            x_coor: '943107.620789',
            name: '목감동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1937608.56628',
            x_coor: '936460.389282',
            name: '신천동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1934357.59509',
            x_coor: '936687.165405',
            name: '신현동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1931610.26508',
            x_coor: '938335.568726',
            name: '연성동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1932450.85052',
            x_coor: '932679.928223',
            name: '월곶동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1937707.34192',
            x_coor: '937895.277283',
            name: '은행동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1931407.66589',
            x_coor: '936542.574707',
            name: '장곡동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1927072.57111',
            x_coor: '933033.038696',
            name: '정왕1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1928279.23053',
            x_coor: '931711.036682',
            name: '정왕2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1929010.16052',
            x_coor: '931495.701782',
            name: '정왕3동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1929884.9917',
            x_coor: '932016.482117',
            name: '정왕4동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1928081.70172',
            x_coor: '933228.940125',
            name: '정왕본동',
            code: '64'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1924984.3219',
        x_coor: '940715.401123',
        name: '안산시 단원구',
        code: '092',
        subClassList: [
          {
            class: 'C',
            y_coor: '1925572.0799',
            x_coor: '939676.98822',
            name: '고잔1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1925181.40393',
            x_coor: '941313.981201',
            name: '고잔2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1916452.9787',
            x_coor: '918870.27771',
            name: '대부동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1926371.74188',
            x_coor: '938381.106689',
            name: '선부1동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1926848.40869',
            x_coor: '938234.358215',
            name: '선부2동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1927558.2243',
            x_coor: '939110.469299',
            name: '선부3동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1927170.23389',
            x_coor: '940278.551086',
            name: '와동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1925667.3429',
            x_coor: '937711.442993',
            name: '원곡1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1926073.86829',
            x_coor: '938150.619507',
            name: '원곡2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1926008.45279',
            x_coor: '937029.902871',
            name: '원곡본동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1923658.94733',
            x_coor: '939463.995789',
            name: '초지동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1923692.62451',
            x_coor: '940131.295288',
            name: '호수동',
            code: '73'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1922600.52289',
        x_coor: '942080.726074',
        name: '안산시 상록구',
        code: '091',
        subClassList: [
          {
            class: 'C',
            y_coor: '1923175.49768',
            x_coor: '947020.737',
            name: '반월동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1920874.71771',
            x_coor: '943643.468811',
            name: '본오1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1922113.89349',
            x_coor: '944366.256287',
            name: '본오2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1922818.9844',
            x_coor: '943844.5029',
            name: '본오3동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1926073.50592',
            x_coor: '943401.593018',
            name: '부곡동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1922214.11151',
            x_coor: '942483.615173',
            name: '사1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1921404.67029',
            x_coor: '942551.930725',
            name: '사2동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1921972.26312',
            x_coor: '939733.491821',
            name: '사3동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1924831.94891',
            x_coor: '942361.090271',
            name: '성포동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1929387.08612',
            x_coor: '944508.302673',
            name: '안산동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1926251.56372',
            x_coor: '943009.907593',
            name: '월피동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1923135.49811',
            x_coor: '943358.566223',
            name: '이동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1923671.24872',
            x_coor: '943837.088684',
            name: '일동',
            code: '51'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1892946.97303',
        x_coor: '982480.074496',
        name: '안성시',
        code: '220',
        subClassList: [
          {
            class: 'C',
            y_coor: '1898257.2713',
            x_coor: '978976.284729',
            name: '고삼면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1889236.04413',
            x_coor: '970886.864075',
            name: '공도읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1888765.58673',
            x_coor: '983764.047729',
            name: '금광면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1890468.63208',
            x_coor: '976681.137207',
            name: '대덕면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1886361.13892',
            x_coor: '974663.60437',
            name: '미양면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1891633.69873',
            x_coor: '981397.374695',
            name: '보개면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1897138.89789',
            x_coor: '988868.347107',
            name: '삼죽면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1882795.13568',
            x_coor: '978589.899109',
            name: '서운면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1889972.5921',
            x_coor: '980403.352722',
            name: '안성1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1889151.71472',
            x_coor: '979523.238525',
            name: '안성2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1890654.3949',
            x_coor: '978449.875977',
            name: '안성3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1895743.68268',
            x_coor: '972836.698975',
            name: '양성면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1893527.52368',
            x_coor: '967063.111877',
            name: '원곡면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1899331.2699',
            x_coor: '998075.193787',
            name: '일죽면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1897775.42108',
            x_coor: '993109.248413',
            name: '죽산면',
            code: '40'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1932937.61407',
        x_coor: '951923.778687',
        name: '안양시 동안구',
        code: '042',
        subClassList: [
          {
            class: 'C',
            y_coor: '1930920.12372',
            x_coor: '952736.778015',
            name: '갈산동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1934098.10712',
            x_coor: '952609.510315',
            name: '관양1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1933816.60852',
            x_coor: '953180.395081',
            name: '관양2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1931957.9809',
            x_coor: '953036.170471',
            name: '귀인동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1933142.08752',
            x_coor: '951334.12207',
            name: '달안동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1932436.4541',
            x_coor: '951536.300171',
            name: '범계동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1933428.38068',
            x_coor: '952157.264282',
            name: '부림동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1932873.93433',
            x_coor: '951065.906494',
            name: '부흥동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1933564.86548',
            x_coor: '949853.063782',
            name: '비산1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1933254.2641',
            x_coor: '950557.413208',
            name: '비산2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1934066.86389',
            x_coor: '950871.367004',
            name: '비산3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1931568.90912',
            x_coor: '951873.428894',
            name: '신촌동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1932502.04651',
            x_coor: '952577.455017',
            name: '평안동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1932967.1203',
            x_coor: '953714.604919',
            name: '평촌동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1930337.5545',
            x_coor: '952037.286682',
            name: '호계1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1931485.63593',
            x_coor: '951542.380615',
            name: '호계2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1929926.22412',
            x_coor: '952084.229187',
            name: '호계3동',
            code: '64'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1932110.28809',
        x_coor: '949755.656494',
        name: '안양시 만안구',
        code: '041',
        subClassList: [
          {
            class: 'C',
            y_coor: '1934001.41852',
            x_coor: '947709.782593',
            name: '박달1동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1933796.05548',
            x_coor: '947030.540527',
            name: '박달2동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1935770.97308',
            x_coor: '947847.173096',
            name: '석수1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1935136.14709',
            x_coor: '947735.515503',
            name: '석수2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1934617.8905',
            x_coor: '946474.989807',
            name: '석수3동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1933488.64447',
            x_coor: '949186.544189',
            name: '안양1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1934155.0271',
            x_coor: '948476.470581',
            name: '안양2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1933180.2749',
            x_coor: '948197.962891',
            name: '안양3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1933208.51532',
            x_coor: '948474.409485',
            name: '안양4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1932956.48071',
            x_coor: '948736.462585',
            name: '안양5동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1932484.64111',
            x_coor: '949594.2724',
            name: '안양6동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1932439.08832',
            x_coor: '949987.693298',
            name: '안양7동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1931833.74469',
            x_coor: '949728.941528',
            name: '안양8동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1932650.5249',
            x_coor: '947635.403687',
            name: '안양9동',
            code: '59'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1976277.5097',
        x_coor: '960010.005188',
        name: '양주시',
        code: '260',
        subClassList: [
          {
            class: 'C',
            y_coor: '1980663.37708',
            x_coor: '954556.961182',
            name: '광적면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1988826.1131',
            x_coor: '953993.754517',
            name: '남면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1977348.94031',
            x_coor: '954709.266296',
            name: '백석읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1976277.5097',
            x_coor: '960010.005188',
            name: '양주1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1977545.38708',
            x_coor: '963055.386292',
            name: '양주2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1986237.77789',
            x_coor: '958188.572693',
            name: '은현면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1968847.02087',
            x_coor: '950739.849182',
            name: '장흥면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1982797.1875',
            x_coor: '961827.786194',
            name: '회천1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1980311.27191',
            x_coor: '960108.850586',
            name: '회천2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1982095.3183',
            x_coor: '962069.113708',
            name: '회천3동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1981538.6767',
            x_coor: '963949.672913',
            name: '회천4동',
            code: '56'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1943589.21991',
        x_coor: '998913.086792',
        name: '양평군',
        code: '380',
        subClassList: [
          {
            class: 'C',
            y_coor: '1941989.56787',
            x_coor: '998717.099426',
            name: '강상면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1943971.49152',
            x_coor: '992084.332581',
            name: '강하면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1936317.58673',
            x_coor: '1003257.07788',
            name: '개군면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1948817.37909',
            x_coor: '1015282.4444',
            name: '단월면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1956361.29492',
            x_coor: '986647.571289',
            name: '서종면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1936248.38953',
            x_coor: '1022224.4563',
            name: '양동면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1946036.9491',
            x_coor: '991369.501099',
            name: '양서면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1943020.0069',
            x_coor: '999426.333679',
            name: '양평읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1946528.45532',
            x_coor: '996148.268188',
            name: '옥천면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1943045.7663',
            x_coor: '1008461.25861',
            name: '용문면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1941709.68433',
            x_coor: '1012317.08319',
            name: '지평면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1950788.11108',
            x_coor: '1018611.62579',
            name: '청운면',
            code: '37'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1922161.83691',
        x_coor: '1012166.71729',
        name: '여주시',
        code: '280',
        subClassList: [
          {
            class: 'C',
            y_coor: '1911444.8349',
            x_coor: '1004005.80542',
            name: '가남읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1919350.34448',
            x_coor: '1018751.87451',
            name: '강천면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1932611.48291',
            x_coor: '1002952.78473',
            name: '금사면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1922362.7395',
            x_coor: '1006516.98883',
            name: '능서면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1930670.46527',
            x_coor: '1007660.85162',
            name: '대신면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1925606.37189',
            x_coor: '1015852.91998',
            name: '북내면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1933623.00153',
            x_coor: '994955.904907',
            name: '산북면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1921800.02429',
            x_coor: '1012397.62231',
            name: '여흥동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1923421.36407',
            x_coor: '1012786.94983',
            name: '오학동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1911929.78949',
            x_coor: '1014437.46289',
            name: '점동면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1919924.63247',
            x_coor: '1010527.24623',
            name: '중앙동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1926020.72009',
            x_coor: '1003691.03821',
            name: '흥천면',
            code: '33'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '2010793.37732',
        x_coor: '962755.20752',
        name: '연천군',
        code: '350',
        subClassList: [
          {
            class: 'C',
            y_coor: '2009561.33771',
            x_coor: '957824.186829',
            name: '군남면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '2005387.09027',
            x_coor: '955506.394714',
            name: '미산면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '2003510.4491',
            x_coor: '948856.73468',
            name: '백학면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '2020371.08569',
            x_coor: '965577.69458',
            name: '신서면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '2011611.15527',
            x_coor: '962814.723572',
            name: '연천읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '2006612.44153',
            x_coor: '957259.451477',
            name: '왕징면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1998160.64392',
            x_coor: '945921.231873',
            name: '장남면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '2003197.44452',
            x_coor: '961706.556702',
            name: '전곡읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '2015179.44067',
            x_coor: '957856.086487',
            name: '중면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1998060.36768',
            x_coor: '962042.559387',
            name: '청산면',
            code: '32'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1905766.0415',
        x_coor: '962478.314087',
        name: '오산시',
        code: '140',
        subClassList: [
          {
            class: 'C',
            y_coor: '1906295.69592',
            x_coor: '961236.553284',
            name: '남촌동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1904520.71173',
            x_coor: '961965.434814',
            name: '대원동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1910047.46228',
            x_coor: '959245.337891',
            name: '세마동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1906904.79688',
            x_coor: '961281.770874',
            name: '신장동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1905766.0415',
            x_coor: '962478.314087',
            name: '중앙동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1904668.99188',
            x_coor: '959204.331482',
            name: '초평동',
            code: '56'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1920238.88812',
        x_coor: '965843.783875',
        name: '용인시 기흥구',
        code: '192',
        subClassList: [
          {
            class: 'C',
            y_coor: '1919343.00153',
            x_coor: '966982.806885',
            name: '구갈동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1922047.20587',
            x_coor: '966230.592407',
            name: '구성동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1914810.9245',
            x_coor: '965894.683594',
            name: '기흥동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1919338.44672',
            x_coor: '969115.89679',
            name: '동백동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1922583.98712',
            x_coor: '966099.056824',
            name: '마북동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1924569.07373',
            x_coor: '965861.60498',
            name: '보정동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1918702.69513',
            x_coor: '965216.282593',
            name: '상갈동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1919125.73352',
            x_coor: '967938.010803',
            name: '상하동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1915177.30048',
            x_coor: '962010.923828',
            name: '서농동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1920555.1153',
            x_coor: '965454.020203',
            name: '신갈동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1919213.95251',
            x_coor: '961552.455505',
            name: '영덕동',
            code: '62'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1924840.36731',
        x_coor: '964330.372986',
        name: '용인시 수지구',
        code: '193',
        subClassList: [
          {
            class: 'C',
            y_coor: '1927059.54248',
            x_coor: '964501.429688',
            name: '동천동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1922934.2403',
            x_coor: '962881.169495',
            name: '상현1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1923533.41536',
            x_coor: '963360.663768',
            name: '상현2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1924255.18231',
            x_coor: '961810.891418',
            name: '성복동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1924711.97308',
            x_coor: '963109.871277',
            name: '신봉동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1925850.66071',
            x_coor: '965801.451721',
            name: '죽전1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1925285.34528',
            x_coor: '965159.40741',
            name: '죽전2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1925522.22913',
            x_coor: '964121.381775',
            name: '풍덕천1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1924577.16089',
            x_coor: '963565.760925',
            name: '풍덕천2동',
            code: '52'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1915097.83087',
        x_coor: '973503.538696',
        name: '용인시 처인구',
        code: '191',
        subClassList: [
          {
            class: 'C',
            y_coor: '1901949.19568',
            x_coor: '968949.611206',
            name: '남사면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1914917.69568',
            x_coor: '975089.546997',
            name: '동부동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1925641.46991',
            x_coor: '977177.554016',
            name: '모현면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1907193.3479',
            x_coor: '988934.732178',
            name: '백암면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1915203.7561',
            x_coor: '980471.483582',
            name: '양지면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1915796.40771',
            x_coor: '971547.419373',
            name: '역삼동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1907557.48151',
            x_coor: '983466.186584',
            name: '원삼면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1917102.5575',
            x_coor: '974435.718079',
            name: '유림동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1904755.52667',
            x_coor: '973018.867615',
            name: '이동면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1915097.83087',
            x_coor: '973503.538696',
            name: '중앙동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1919910.93433',
            x_coor: '976136.869873',
            name: '포곡읍',
            code: '11'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1927442.25549',
        x_coor: '952903.237122',
        name: '의왕시',
        code: '170',
        subClassList: [
          {
            class: 'C',
            y_coor: '1927775.6629',
            x_coor: '953582.641174',
            name: '고천동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1931149.99231',
            x_coor: '953574.237183',
            name: '내손1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1932174.98212',
            x_coor: '954111.681702',
            name: '내손2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1924555.6333',
            x_coor: '951868.549988',
            name: '부곡동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1928418.48511',
            x_coor: '953198.852905',
            name: '오전동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1932284.57147',
            x_coor: '955380.994629',
            name: '청계동',
            code: '56'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1970832.09992',
        x_coor: '961941.834232',
        name: '의정부시',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1972256.87311',
            x_coor: '959676.700317',
            name: '가능1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1971647.49178',
            x_coor: '959105.980601',
            name: '가능2동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1971636.73029',
            x_coor: '958563.029724',
            name: '가능3동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1973480.4101',
            x_coor: '958805.775208',
            name: '녹양동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1970247.71307',
            x_coor: '963592.156189',
            name: '송산1동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1971205.21613',
            x_coor: '963876.958984',
            name: '송산2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1970306.92371',
            x_coor: '960945.137329',
            name: '신곡1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1972074.81891',
            x_coor: '962265.645508',
            name: '신곡2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1971966.20972',
            x_coor: '960148.343811',
            name: '의정부1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1971043.01093',
            x_coor: '958922.615723',
            name: '의정부2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1970439.79773',
            x_coor: '960252.217773',
            name: '의정부3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1972389.35248',
            x_coor: '961076.042725',
            name: '자금동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1969738.75873',
            x_coor: '960720.632324',
            name: '장암동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1968139.61029',
            x_coor: '960227.337402',
            name: '호원1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1969755.28448',
            x_coor: '959740.476685',
            name: '호원2동',
            code: '65'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1919250.14948',
        x_coor: '994240.972778',
        name: '이천시',
        code: '210',
        subClassList: [
          {
            class: 'C',
            y_coor: '1920061.63708',
            x_coor: '993577.828125',
            name: '관고동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1914558.63049',
            x_coor: '999324.601929',
            name: '대월면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1916686.96509',
            x_coor: '987403.889282',
            name: '마장면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1908103.8775',
            x_coor: '998238.815979',
            name: '모가면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1926674.92688',
            x_coor: '999178.541992',
            name: '백사면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1920549.98907',
            x_coor: '998845.1427',
            name: '부발읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1903751.30591',
            x_coor: '1001957.42621',
            name: '설성면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1923037.72552',
            x_coor: '991497.867126',
            name: '신둔면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1899519.7749',
            x_coor: '1004128.36627',
            name: '율면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1901814.48993',
            x_coor: '1010380.04749',
            name: '장호원읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1919910.40088',
            x_coor: '994837.531494',
            name: '중리동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1921263.51727',
            x_coor: '995788.757019',
            name: '증포동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1920441.66309',
            x_coor: '994782.925903',
            name: '창전동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1913811.1593',
            x_coor: '993327.533691',
            name: '호법면',
            code: '33'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1973627.45313',
        x_coor: '936560.908508',
        name: '파주시',
        code: '200',
        subClassList: [
          {
            class: 'C',
            y_coor: '1975363.13428',
            x_coor: '942865.589111',
            name: '광탄면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1969257.50513',
            x_coor: '930447.481995',
            name: '교하동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1989883.35211',
            x_coor: '932413.547485',
            name: '군내면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1973627.45313',
            x_coor: '936560.908508',
            name: '금촌1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1972684.48529',
            x_coor: '936326.176819',
            name: '금촌2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1974887.63928',
            x_coor: '936446.154724',
            name: '금촌3동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1984343.6651',
            x_coor: '937631.257385',
            name: '문산읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1983445.21033',
            x_coor: '945664.208313',
            name: '법원읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1969661.78632',
            x_coor: '934016.895996',
            name: '운정1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1969949.2117',
            x_coor: '933028.839178',
            name: '운정2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1968294.85739',
            x_coor: '934205.906476',
            name: '운정3동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1977617.62433',
            x_coor: '937508.724976',
            name: '월롱면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1986204.10624',
            x_coor: '930356.430718',
            name: '장단면',
            code: '26'
          },
          {
            class: 'C',
            y_coor: '1995083.1535',
            x_coor: '948837.151978',
            name: '적성면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1971910.53693',
            x_coor: '938791.042114',
            name: '조리읍',
            code: '15'
          },
          {
            class: 'C',
            y_coor: '1993769.31099',
            x_coor: '938275.201089',
            name: '진동면',
            code: '21'
          },
          {
            class: 'C',
            y_coor: '1995334.251',
            x_coor: '930765.3897',
            name: '진서면',
            code: '27'
          },
          {
            class: 'C',
            y_coor: '1978363.00848',
            x_coor: '930999.006226',
            name: '탄현면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1981435.40527',
            x_coor: '940160.370117',
            name: '파주읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1991544.19348',
            x_coor: '941813.965576',
            name: '파평면',
            code: '36'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1888271.6925',
        x_coor: '965523.186218',
        name: '평택시',
        code: '070',
        subClassList: [
          {
            class: 'C',
            y_coor: '1893861.0567',
            x_coor: '957115.128174',
            name: '고덕면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1889197.88129',
            x_coor: '963986.203491',
            name: '비전1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1888271.6925',
            x_coor: '965523.186218',
            name: '비전2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1896668.44989',
            x_coor: '960412.102295',
            name: '서정동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1901165.06512',
            x_coor: '958715.299988',
            name: '서탄면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1889135.7923',
            x_coor: '962846.898499',
            name: '세교동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1898205.24432',
            x_coor: '960913.587402',
            name: '송북동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1894063.4071',
            x_coor: '963972.504883',
            name: '송탄동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1898453.85712',
            x_coor: '960217.892395',
            name: '신장1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1897632.09631',
            x_coor: '960217.994812',
            name: '신장2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1888028.9939',
            x_coor: '963751.126587',
            name: '신평동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1887661.8075',
            x_coor: '949389.127686',
            name: '안중읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1890043.65308',
            x_coor: '953767.216614',
            name: '오성면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1887950.76129',
            x_coor: '962668.677612',
            name: '원평동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1895290.4657',
            x_coor: '960521.280273',
            name: '중앙동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1897736.79712',
            x_coor: '960677.505615',
            name: '지산동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1900230.82532',
            x_coor: '963619.661682',
            name: '진위면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1893619.5253',
            x_coor: '949688.3317',
            name: '청북읍',
            code: '14'
          },
          {
            class: 'C',
            y_coor: '1889226.71429',
            x_coor: '963276.986206',
            name: '통복동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1885285.52332',
            x_coor: '961041.096375',
            name: '팽성읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1887327.8717',
            x_coor: '945294.855103',
            name: '포승읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1885591.56329',
            x_coor: '948503.91803',
            name: '현덕면',
            code: '37'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1988369.5271',
        x_coor: '973655.773315',
        name: '포천시',
        code: '270',
        subClassList: [
          {
            class: 'C',
            y_coor: '1983256.02533',
            x_coor: '972411.314087',
            name: '가산면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '2017657.34589',
            x_coor: '977965.083496',
            name: '관인면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1987607.08868',
            x_coor: '974566.963684',
            name: '군내면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1976315.84369',
            x_coor: '976103.723511',
            name: '내촌면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1983873.54749',
            x_coor: '970016.226501',
            name: '선단동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1980458.49731',
            x_coor: '968190.713623',
            name: '소흘읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1992702.54248',
            x_coor: '975967.556702',
            name: '신북면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '2009912.84113',
            x_coor: '980316.847229',
            name: '영북면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '2000648.22827',
            x_coor: '977633.87439',
            name: '영중면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '2003412.8457',
            x_coor: '988379.961975',
            name: '이동면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1995719.03992',
            x_coor: '983949.727112',
            name: '일동면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1999127.98529',
            x_coor: '972701.177979',
            name: '창수면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1988369.5271',
            x_coor: '973655.773315',
            name: '포천동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1989058.50909',
            x_coor: '981368.598816',
            name: '화현면',
            code: '41'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1948916.56653',
        x_coor: '974782.298218',
        name: '하남시',
        code: '180',
        subClassList: [
          {
            class: 'C',
            y_coor: '1944762.03749',
            x_coor: '970162.21692',
            name: '감북동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1948467.92792',
            x_coor: '973358.342407',
            name: '덕풍1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1949260.1405',
            x_coor: '973331.68811',
            name: '덕풍2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1950393.15692',
            x_coor: '973924.274902',
            name: '덕풍3동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1952056.58302',
            x_coor: '973935.699037',
            name: '미사1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1952026.13892',
            x_coor: '972276.365417',
            name: '미사2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1948866.30048',
            x_coor: '974340.895508',
            name: '신장1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1949190.2193',
            x_coor: '974726.290222',
            name: '신장2동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1942446.7314',
            x_coor: '969425.943883',
            name: '위례동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1946694.49451',
            x_coor: '975614.353027',
            name: '천현동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1948640.24609',
            x_coor: '970923.176697',
            name: '초이동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1947029.32953',
            x_coor: '972973.314026',
            name: '춘궁동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1950011.16608',
            x_coor: '972183.323975',
            name: '풍산동',
            code: '61'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1911400.57813',
        x_coor: '940675.023682',
        name: '화성시',
        code: '240',
        subClassList: [
          {
            class: 'C',
            y_coor: '1914077.95508',
            x_coor: '954279.941772',
            name: '기배동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1912764.29468',
            x_coor: '939999.705322',
            name: '남양읍',
            code: '15'
          },
          {
            class: 'C',
            y_coor: '1912047.59692',
            x_coor: '962014.056824',
            name: '동탄1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1910992.3811',
            x_coor: '962043.951721',
            name: '동탄2동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1912439.05151',
            x_coor: '960848.484985',
            name: '동탄3동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1911317.375',
            x_coor: '964919.125',
            name: '동탄4동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1908973.5',
            x_coor: '966339.75',
            name: '동탄면',
            code: '45'
          },
          {
            class: 'C',
            y_coor: '1912102.37207',
            x_coor: '935190.494385',
            name: '마도면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1917215.42151',
            x_coor: '947602.553284',
            name: '매송면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1914953.43671',
            x_coor: '961022.38739',
            name: '반월동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1912107.13568',
            x_coor: '958939.475403',
            name: '병점1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1912615.2229',
            x_coor: '959452.368591',
            name: '병점2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1913608.55511',
            x_coor: '951157.333923',
            name: '봉담읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1915340.35211',
            x_coor: '944452.851196',
            name: '비봉면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1907737.84668',
            x_coor: '929741.949707',
            name: '서신면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1913495.10571',
            x_coor: '932496.345886',
            name: '송산면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1898225.5365',
            x_coor: '950622.109375',
            name: '양감면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1899242.2807',
            x_coor: '939156.809326',
            name: '우정읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1898082.78473',
            x_coor: '940551.984802',
            name: '장안면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1906968.6817',
            x_coor: '953040.730896',
            name: '정남면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1912825.06409',
            x_coor: '958741.72052',
            name: '진안동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1907109.7691',
            x_coor: '947010.739197',
            name: '팔탄면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1903873.17688',
            x_coor: '948484.935486',
            name: '향남읍',
            code: '14'
          },
          {
            class: 'C',
            y_coor: '1912075.57928',
            x_coor: '956974.646973',
            name: '화산동',
            code: '57'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1987302.3421',
    x_coor: '1020213.0423',
    name: '강원도',
    code: '32',
    subClassList: [
      {
        class: 'B',
        y_coor: '1973382.50409',
        x_coor: '1121213.87207',
        name: '강릉시',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1972548.51251',
            x_coor: '1123842.0802',
            name: '강남동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1970827.00848',
            x_coor: '1128150.32843',
            name: '강동면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1976910.2077',
            x_coor: '1121574.51489',
            name: '경포동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1974878.33087',
            x_coor: '1121061.48853',
            name: '교1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1975166.88647',
            x_coor: '1122631.42828',
            name: '교2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1969620.28888',
            x_coor: '1121600.6687',
            name: '구정면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1971937.03589',
            x_coor: '1121674.84369',
            name: '내곡동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1981264.40509',
            x_coor: '1118688.6886',
            name: '사천면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1974699.55731',
            x_coor: '1124516.21643',
            name: '성덕동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1969627.01288',
            x_coor: '1117402.53821',
            name: '성산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1975936.85632',
            x_coor: '1125723.3999',
            name: '송정동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1985324.08112',
            x_coor: '1117605.11761',
            name: '연곡면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1958153.96393',
            x_coor: '1135753.87128',
            name: '옥계면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1974304.16827',
            x_coor: '1123583.37091',
            name: '옥천동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1964524.38049',
            x_coor: '1117984.14819',
            name: '왕산면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1989069.26611',
            x_coor: '1116359.02838',
            name: '주문진읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1973860.71808',
            x_coor: '1122807.94458',
            name: '중앙동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1977853.34369',
            x_coor: '1124671.64209',
            name: '초당동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1975185.83331',
            x_coor: '1124037.22882',
            name: '포남1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1975720.41351',
            x_coor: '1124466.17468',
            name: '포남2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1973382.50409',
            x_coor: '1121213.87207',
            name: '홍제동',
            code: '51'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '2042673.9881',
        x_coor: '1084537.13098',
        name: '고성군',
        code: '400',
        subClassList: [
          {
            class: 'C',
            y_coor: '2042425.96069',
            x_coor: '1084450.55072',
            name: '간성읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '2048795.65747',
            x_coor: '1083134.08459',
            name: '거진읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '2048982.02',
            x_coor: '1070492.674',
            name: '수동면',
            code: '26'
          },
          {
            class: 'C',
            y_coor: '2036981.26947',
            x_coor: '1089635.78558',
            name: '죽왕면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '2029067.09167',
            x_coor: '1092617.82129',
            name: '토성면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '2055270.2359',
            x_coor: '1080893.29327',
            name: '현내면',
            code: '31'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1948500.69312',
        x_coor: '1142653.82861',
        name: '동해시',
        code: '040',
        subClassList: [
          {
            class: 'C',
            y_coor: '1950809.82391',
            x_coor: '1141365.21069',
            name: '동호동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1952168.18213',
            x_coor: '1141718.13562',
            name: '망상동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1952262.96912',
            x_coor: '1142576.2229',
            name: '묵호동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1951117.09808',
            x_coor: '1142036.60651',
            name: '발한동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1949815.4873',
            x_coor: '1141796.72693',
            name: '부곡동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1944564.93213',
            x_coor: '1142120.66229',
            name: '북삼동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1943965.2027',
            x_coor: '1143675.50781',
            name: '북평동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1944399.19128',
            x_coor: '1138586.98438',
            name: '삼화동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1945739.85052',
            x_coor: '1143960.55048',
            name: '송정동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1948500.69312',
            x_coor: '1142653.82861',
            name: '천곡동',
            code: '51'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1940270.75092',
        x_coor: '1147273.08612',
        name: '삼척시',
        code: '070',
        subClassList: [
          {
            class: 'C',
            y_coor: '1907032.85193',
            x_coor: '1151429.97192',
            name: '가곡면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1940270.75092',
            x_coor: '1147273.08612',
            name: '교동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1932526.66589',
            x_coor: '1152796.24182',
            name: '근덕면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1939462.33728',
            x_coor: '1147593.81653',
            name: '남양동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1920788.33087',
            x_coor: '1148882.75409',
            name: '노곡면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1916405.5473',
            x_coor: '1137059.24072',
            name: '도계읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1936601.90167',
            x_coor: '1142692.02649',
            name: '미로면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1939856.58691',
            x_coor: '1147095.56543',
            name: '성내동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1929020.82672',
            x_coor: '1140222.25848',
            name: '신기면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1910211.97729',
            x_coor: '1162959.5069',
            name: '원덕읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1938766.90308',
            x_coor: '1149030.72571',
            name: '정라동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1928801.34808',
            x_coor: '1127811.42059',
            name: '하장면',
            code: '32'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '2023550.91992',
        x_coor: '1095585.16443',
        name: '속초시',
        code: '060',
        subClassList: [
          {
            class: 'C',
            y_coor: '2023025.39868',
            x_coor: '1094788.47992',
            name: '교동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '2023519.28571',
            x_coor: '1095276.34149',
            name: '금호동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '2022411.72528',
            x_coor: '1094240.10797',
            name: '노학동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '2018913.4411',
            x_coor: '1092602.74268',
            name: '대포동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '2024169.13733',
            x_coor: '1095922.99738',
            name: '동명동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '2025377.1225',
            x_coor: '1095253.84308',
            name: '영랑동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '2021383.12231',
            x_coor: '1095522.35272',
            name: '조양동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '2022534.51093',
            x_coor: '1095921.65149',
            name: '청호동',
            code: '59'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '2012318.18512',
        x_coor: '1042953.70477',
        name: '양구군',
        code: '380',
        subClassList: [
          {
            class: 'C',
            y_coor: '2012168.95172',
            x_coor: '1046862.93073',
            name: '남면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '2022584.7749',
            x_coor: '1047588.98657',
            name: '동면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '2023292.57849',
            x_coor: '1039343.43658',
            name: '방산면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '2012318.18512',
            x_coor: '1042953.70477',
            name: '양구읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '2031829.0675',
            x_coor: '1055720.32092',
            name: '해안면',
            code: '34'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '2008967.85669',
        x_coor: '1098150.89398',
        name: '양양군',
        code: '410',
        subClassList: [
          {
            class: 'C',
            y_coor: '2017214.68768',
            x_coor: '1097048.22021',
            name: '강현면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '2008491.22913',
            x_coor: '1095191.00922',
            name: '서면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '2007335.09967',
            x_coor: '1100102.27838',
            name: '손양면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '2009546.24188',
            x_coor: '1098579.29779',
            name: '양양읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1997330.7821',
            x_coor: '1110626.52209',
            name: '현남면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '2002813.81531',
            x_coor: '1107362.23499',
            name: '현북면',
            code: '33'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1909870.49652',
        x_coor: '1085372.53021',
        name: '영월군',
        code: '330',
        subClassList: [
          {
            class: 'C',
            y_coor: '1903522.33228',
            x_coor: '1095047.36621',
            name: '김삿갓면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1910139.04773',
            x_coor: '1080282.10712',
            name: '남면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1926323.756',
            x_coor: '1063788.752',
            name: '무릉도원면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1917716.56073',
            x_coor: '1084706.39081',
            name: '북면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1904006.11749',
            x_coor: '1117920.21777',
            name: '상동읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1910286.25513',
            x_coor: '1085749.04498',
            name: '영월읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1919531.35992',
            x_coor: '1068170.6795',
            name: '주천면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1905824.34729',
            x_coor: '1104839.78418',
            name: '중동면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1915648.30353',
            x_coor: '1073478.70587',
            name: '한반도면',
            code: '39'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1927079.63049',
        x_coor: '1037178.14673',
        name: '원주시',
        code: '020',
        subClassList: [
          {
            class: 'C',
            y_coor: '1926996.83087',
            x_coor: '1040750.58191',
            name: '개운동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1907988.91351',
            x_coor: '1034164.62769',
            name: '귀래면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1928266.17212',
            x_coor: '1038478.20758',
            name: '단계동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1925333.25427',
            x_coor: '1040777.71759',
            name: '단구동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1927010.93573',
            x_coor: '1040150.64722',
            name: '명륜1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1925938.76007',
            x_coor: '1039328.04401',
            name: '명륜2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1926660.05432',
            x_coor: '1038018.4751',
            name: '무실동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1923788.61609',
            x_coor: '1028107.69781',
            name: '문막읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1924503.69513',
            x_coor: '1041326.99561',
            name: '반곡관설동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1927712.10352',
            x_coor: '1040473.15381',
            name: '봉산동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1912116.6413',
            x_coor: '1022227.21399',
            name: '부론면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1935541.07928',
            x_coor: '1044454.43573',
            name: '소초면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1914810.93109',
            x_coor: '1051403.33612',
            name: '신림면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1930362.88373',
            x_coor: '1038965.07257',
            name: '우산동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1927491.28711',
            x_coor: '1039573.8797',
            name: '원인동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1927939.56512',
            x_coor: '1039160.26959',
            name: '일산동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1928292.4325',
            x_coor: '1039630.58197',
            name: '중앙동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1929287.3125',
            x_coor: '1030124.0553',
            name: '지정면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1928573.5415',
            x_coor: '1040320.51361',
            name: '태장1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1931573.84509',
            x_coor: '1040008.2417',
            name: '태장2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1920503.27124',
            x_coor: '1043510.02708',
            name: '판부면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1928368.57648',
            x_coor: '1039338.46021',
            name: '학성동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1927170.92987',
            x_coor: '1042860.33862',
            name: '행구동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1934742.85748',
            x_coor: '1037673.19421',
            name: '호저면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1922710.68469',
            x_coor: '1037324.8504',
            name: '흥업면',
            code: '36'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '2007943.83789',
        x_coor: '1058800.85168',
        name: '인제군',
        code: '390',
        subClassList: [
          {
            class: 'C',
            y_coor: '1995386.3089',
            x_coor: '1071968.16357',
            name: '기린면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1996379.4295',
            x_coor: '1051241.53833',
            name: '남면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '2014066.86609',
            x_coor: '1061719.55231',
            name: '북면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1986301.60889',
            x_coor: '1066841.7655',
            name: '상남면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '2024465.31372',
            x_coor: '1062022.21252',
            name: '서화면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '2008023.84711',
            x_coor: '1058961.44421',
            name: '인제읍',
            code: '11'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1931910.82428',
        x_coor: '1102770.44379',
        name: '정선군',
        code: '350',
        subClassList: [
          {
            class: 'C',
            y_coor: '1912539.94568',
            x_coor: '1119967.38672',
            name: '고한읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1919599.75348',
            x_coor: '1109997.2226',
            name: '남면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1939498.73492',
            x_coor: '1103532.25531',
            name: '북평면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1915135.90393',
            x_coor: '1117260.19043',
            name: '사북읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1913206.92633',
            x_coor: '1101338.65851',
            name: '신동읍',
            code: '14'
          },
          {
            class: 'C',
            y_coor: '1941938.64789',
            x_coor: '1107924.90332',
            name: '여량면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1944809.74573',
            x_coor: '1119525.3844',
            name: '임계면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1931910.82428',
            x_coor: '1102770.44379',
            name: '정선읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1927568.16827',
            x_coor: '1114072.69177',
            name: '화암면',
            code: '36'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '2016302.64331',
        x_coor: '983652.004089',
        name: '철원군',
        code: '360',
        subClassList: [
          {
            class: 'C',
            y_coor: '2016302.64331',
            x_coor: '983652.004089',
            name: '갈말읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '2026306.93231',
            x_coor: '997469.5354',
            name: '근남면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '2033696.568',
            x_coor: '1003513.78',
            name: '근동면',
            code: '26'
          },
          {
            class: 'C',
            y_coor: '2035049.58581',
            x_coor: '991503.14136',
            name: '근북면',
            code: '21'
          },
          {
            class: 'C',
            y_coor: '2027715.34772',
            x_coor: '993107.139282',
            name: '김화읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '2023028.94232',
            x_coor: '974453.1521',
            name: '동송읍',
            code: '14'
          },
          {
            class: 'C',
            y_coor: '2018272.37073',
            x_coor: '992615.999817',
            name: '서면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '2032639.206',
            x_coor: '1012641.329',
            name: '원남면',
            code: '28'
          },
          {
            class: 'C',
            y_coor: '2034402.223',
            x_coor: '1022003.03',
            name: '원동면',
            code: '27'
          },
          {
            class: 'C',
            y_coor: '2033230.182',
            x_coor: '1030815.091',
            name: '임남면',
            code: '29'
          },
          {
            class: 'C',
            y_coor: '2023574.67529',
            x_coor: '974857.076416',
            name: '철원읍',
            code: '11'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1986853.3833',
        x_coor: '1020240.84558',
        name: '춘천시',
        code: '010',
        subClassList: [
          {
            class: 'C',
            y_coor: '1985367.4967',
            x_coor: '1019257.69427',
            name: '강남동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1986784.34692',
            x_coor: '1020775.75262',
            name: '교동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1986784.4317',
            x_coor: '1018660.63068',
            name: '근화동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1970289.38129',
            x_coor: '1008796.11328',
            name: '남면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1976917.0567',
            x_coor: '1012871.16217',
            name: '남산면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1983158.27448',
            x_coor: '1022975.3999',
            name: '동내면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1990090.25891',
            x_coor: '1024712.75427',
            name: '동면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1972563.23328',
            x_coor: '1026101.38599',
            name: '동산면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1998664.87189',
            x_coor: '1033893.4986',
            name: '북산면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '2003323.7915',
            x_coor: '1012356.40198',
            name: '사북면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1988780.53711',
            x_coor: '1016949.92987',
            name: '서면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1984332.3573',
            x_coor: '1021318.22357',
            name: '석사동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1986962.12567',
            x_coor: '1019755.33282',
            name: '소양동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1979797.11627',
            x_coor: '1019013.75269',
            name: '신동면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1991808.49329',
            x_coor: '1021638.5426',
            name: '신북읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1989590.59473',
            x_coor: '1020034.10748',
            name: '신사우동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1986324.75269',
            x_coor: '1019764.50531',
            name: '약사명동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1986648.71729',
            x_coor: '1020256.99768',
            name: '조운동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1984992.13269',
            x_coor: '1019894.49908',
            name: '퇴계동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1985843.81549',
            x_coor: '1020011.39551',
            name: '효자1동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1985870.60992',
            x_coor: '1020785.81738',
            name: '효자2동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1986322.78369',
            x_coor: '1021227.73779',
            name: '효자3동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1987371.92572',
            x_coor: '1021587.76819',
            name: '후평1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1986437.3963',
            x_coor: '1022027.8891',
            name: '후평2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1986340.47888',
            x_coor: '1022324.7428',
            name: '후평3동',
            code: '62'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1908295.17169',
        x_coor: '1131914.5434',
        name: '태백시',
        code: '050',
        subClassList: [
          {
            class: 'C',
            y_coor: '1901244.7843',
            x_coor: '1135267.2265',
            name: '구문소동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1904639.65948',
            x_coor: '1129716.3996',
            name: '문곡소도동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1910103.67328',
            x_coor: '1131188.67383',
            name: '삼수동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1908295.17169',
            x_coor: '1131914.5434',
            name: '상장동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1901271.03589',
            x_coor: '1134021.31122',
            name: '장성동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1903177.82813',
            x_coor: '1136798.80988',
            name: '철암동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1909922.37653',
            x_coor: '1131971.45349',
            name: '황연동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1909046.94769',
            x_coor: '1132425.46033',
            name: '황지동',
            code: '51'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1930560.58893',
        x_coor: '1078824.3349',
        name: '평창군',
        code: '340',
        subClassList: [
          {
            class: 'C',
            y_coor: '1964474.63391',
            x_coor: '1106362.77258',
            name: '대관령면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1945065.0929',
            x_coor: '1084684.6427',
            name: '대화면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1927470.19989',
            x_coor: '1088200.57098',
            name: '미탄면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1939539.43512',
            x_coor: '1071297.88379',
            name: '방림면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1957780.18591',
            x_coor: '1077618.04218',
            name: '봉평면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1956777.8501',
            x_coor: '1082984.45319',
            name: '용평면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1960285.46729',
            x_coor: '1092913.57977',
            name: '진부면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1930560.58893',
            x_coor: '1078824.3349',
            name: '평창읍',
            code: '11'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1966476.12952',
        x_coor: '1034262.0415',
        name: '홍천군',
        code: '310',
        subClassList: [
          {
            class: 'C',
            y_coor: '1957662.01392',
            x_coor: '1023622.49438',
            name: '남면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1975278.04492',
            x_coor: '1078359.48999',
            name: '내면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1979682.97827',
            x_coor: '1051934.35199',
            name: '내촌면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1964371.77551',
            x_coor: '1038365.90161',
            name: '동면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1985560.07489',
            x_coor: '1045648.30847',
            name: '두촌면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1967394.03491',
            x_coor: '1031134.03113',
            name: '북방면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1965464.60931',
            x_coor: '1014469.24579',
            name: '서면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1968447.09253',
            x_coor: '1060482.95691',
            name: '서석면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1965612.71729',
            x_coor: '1033883.44421',
            name: '홍천읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1974691.25391',
            x_coor: '1041119.25537',
            name: '화촌면',
            code: '31'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '2011800.60413',
        x_coor: '1018253.33289',
        name: '화천군',
        code: '370',
        subClassList: [
          {
            class: 'C',
            y_coor: '2006171.18213',
            x_coor: '1025443.10089',
            name: '간동면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '2007782.48547',
            x_coor: '1002054.85248',
            name: '사내면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '2017528.35608',
            x_coor: '1013516.53693',
            name: '상서면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '2006545.23871',
            x_coor: '1014723.42499',
            name: '하남면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '2011593.31512',
            x_coor: '1018162.77521',
            name: '화천읍',
            code: '11'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1943719.1665',
        x_coor: '1042880.65851',
        name: '횡성군',
        code: '320',
        subClassList: [
          {
            class: 'C',
            y_coor: '1951466.47467',
            x_coor: '1053893.13812',
            name: '갑천면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1929200.31232',
            x_coor: '1055386.58612',
            name: '강림면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1948670.29211',
            x_coor: '1040795.68347',
            name: '공근면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1946127.22412',
            x_coor: '1063525.55591',
            name: '둔내면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1943154.5011',
            x_coor: '1030989.6283',
            name: '서원면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1935022.63593',
            x_coor: '1058056.7666',
            name: '안흥면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1940171.79352',
            x_coor: '1049739.88867',
            name: '우천면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1954035.76752',
            x_coor: '1057415.48743',
            name: '청일면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1943795.05292',
            x_coor: '1043547.30762',
            name: '횡성읍',
            code: '11'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1848668.97913',
    x_coor: '999287.536072',
    name: '충청북도',
    code: '33',
    subClassList: [
      {
        class: 'B',
        y_coor: '1868655.23071',
        x_coor: '1025533.76349',
        name: '괴산군',
        code: '360',
        subClassList: [
          {
            class: 'C',
            y_coor: '1871008.44452',
            x_coor: '1033435.33148',
            name: '감물면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1868655.23071',
            x_coor: '1025533.76349',
            name: '괴산읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1865788.62628',
            x_coor: '1025434.70947',
            name: '문광면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1874951.67828',
            x_coor: '1031562.7973',
            name: '불정면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1868758.10687',
            x_coor: '1013264.43018',
            name: '사리면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1873113.43292',
            x_coor: '1021852.0097',
            name: '소수면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1863266.5033',
            x_coor: '1044686.59119',
            name: '연풍면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1869646.99933',
            x_coor: '1040598.47668',
            name: '장연면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1863773.82813',
            x_coor: '1012463.78839',
            name: '청안면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1852925.86627',
            x_coor: '1032332.2027',
            name: '청천면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1865599.72491',
            x_coor: '1032479.2522',
            name: '칠성면',
            code: '34'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1887703.07849',
        x_coor: '1077032.83191',
        name: '단양군',
        code: '380',
        subClassList: [
          {
            class: 'C',
            y_coor: '1892575.72028',
            x_coor: '1078755.62122',
            name: '가곡면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1882397.34149',
            x_coor: '1073326.31842',
            name: '단성면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1887703.07849',
            x_coor: '1077032.83191',
            name: '단양읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1880774.50531',
            x_coor: '1075892.12238',
            name: '대강면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1892944.11249',
            x_coor: '1071454.09473',
            name: '매포읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1900750.9303',
            x_coor: '1076310.21173',
            name: '어상천면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1898243.29968',
            x_coor: '1087767.8783',
            name: '영춘면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1891720.12292',
            x_coor: '1069952.60602',
            name: '적성면',
            code: '36'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1832448.2699',
        x_coor: '1020556.20752',
        name: '보은군',
        code: '320',
        subClassList: [
          {
            class: 'C',
            y_coor: '1842245.66248',
            x_coor: '1014679.15942',
            name: '내북면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1826511.23749',
            x_coor: '1028723.81512',
            name: '마로면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1832448.2699',
            x_coor: '1020556.20752',
            name: '보은읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1839386.43311',
            x_coor: '1020825.17108',
            name: '산외면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1822058.18433',
            x_coor: '1020414.30841',
            name: '삼승면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1834981.0235',
            x_coor: '1027792.75562',
            name: '속리산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1831324.45032',
            x_coor: '1017806.48523',
            name: '수한면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1830275.62189',
            x_coor: '1025870.49847',
            name: '장안면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1825935.8429',
            x_coor: '1026531.12122',
            name: '탄부면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1827541.38287',
            x_coor: '1007088.13013',
            name: '회남면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1833027.35052',
            x_coor: '1008646.80731',
            name: '회인면',
            code: '38'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1797579.58551',
        x_coor: '1025476.28162',
        name: '영동군',
        code: '340',
        subClassList: [
          {
            class: 'C',
            y_coor: '1799391.97449',
            x_coor: '1038853.73132',
            name: '매곡면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1794719.16687',
            x_coor: '1037257.10681',
            name: '상촌면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1804576.41449',
            x_coor: '1019892.03021',
            name: '심천면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1795072.25989',
            x_coor: '1022574.35278',
            name: '양강면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1791709.4483',
            x_coor: '1015213.22131',
            name: '양산면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1797579.58551',
            x_coor: '1025476.28162',
            name: '영동읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1806988.96631',
            x_coor: '1029599.29932',
            name: '용산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1780479.01172',
            x_coor: '1024075.84998',
            name: '용화면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1802046.5531',
            x_coor: '1044820.3891',
            name: '추풍령면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1789175.60229',
            x_coor: '1016641.49188',
            name: '학산면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1803548.5105',
            x_coor: '1036885.20581',
            name: '황간면',
            code: '32'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1812131.64532',
        x_coor: '1006413.46552',
        name: '옥천군',
        code: '330',
        subClassList: [
          {
            class: 'C',
            y_coor: '1814756.60571',
            x_coor: '1003091.89398',
            name: '군북면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1809156.73413',
            x_coor: '1002459.85089',
            name: '군서면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1809626.27332',
            x_coor: '1010804.05188',
            name: '동이면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1817666.10931',
            x_coor: '1015508.56799',
            name: '안남면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1821900.8299',
            x_coor: '1014524.09961',
            name: '안내면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1812234.6507',
            x_coor: '1006724.51172',
            name: '옥천읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1805452.66772',
            x_coor: '1010736.80438',
            name: '이원면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1816586.56171',
            x_coor: '1026195.34167',
            name: '청산면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1814509.34851',
            x_coor: '1023324.35773',
            name: '청성면',
            code: '34'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1882448.16968',
        x_coor: '1016963.9632',
        name: '음성군',
        code: '370',
        subClassList: [
          {
            class: 'C',
            y_coor: '1901529.75568',
            x_coor: '1012755.96198',
            name: '감곡면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1888179.17389',
            x_coor: '1007682.17511',
            name: '금왕읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1885947.52649',
            x_coor: '998515.877625',
            name: '대소면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1881315.46149',
            x_coor: '1005590.33868',
            name: '맹동면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1891097.47369',
            x_coor: '999560.530823',
            name: '삼성면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1892897.9541',
            x_coor: '1009503.5318',
            name: '생극면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1880619.57788',
            x_coor: '1022947.86969',
            name: '소이면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1875208.90393',
            x_coor: '1013279.60553',
            name: '원남면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1882448.16968',
            x_coor: '1016963.9632',
            name: '음성읍',
            code: '11'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1903994.37073',
        x_coor: '1061400.05902',
        name: '제천시',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1905528.32068',
            x_coor: '1064109.44708',
            name: '교동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1896101.46448',
            x_coor: '1059446.46649',
            name: '금성면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1904251.62769',
            x_coor: '1063686.42517',
            name: '남현동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1879502.64111',
            x_coor: '1059183.9787',
            name: '덕산면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1904468.21228',
            x_coor: '1046701.55939',
            name: '백운면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1903952.12769',
            x_coor: '1055218.93878',
            name: '봉양읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1909842.82629',
            x_coor: '1067538.57489',
            name: '송학면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1881933.13452',
            x_coor: '1060648.3653',
            name: '수산면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1903544.21991',
            x_coor: '1064244.39868',
            name: '신백동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1903994.37073',
            x_coor: '1061400.05902',
            name: '영서동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1905030.12531',
            x_coor: '1062216.06512',
            name: '용두동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1907279.4361',
            x_coor: '1063493.36902',
            name: '의암동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1904752.00568',
            x_coor: '1063077.97028',
            name: '인성동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1905820.01129',
            x_coor: '1063444.1499',
            name: '청전동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1889328.53772',
            x_coor: '1059453.9762',
            name: '청풍면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1876469.9837',
            x_coor: '1051853.91528',
            name: '한수면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1903798.11951',
            x_coor: '1063168.12042',
            name: '화산동',
            code: '60'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1865167.82288',
        x_coor: '1007233.35449',
        name: '증평군',
        code: '390',
        subClassList: [
          {
            class: 'C',
            y_coor: '1868360.56891',
            x_coor: '1010075.4082',
            name: '도안면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1865167.82288',
            x_coor: '1007233.35449',
            name: '증평읍',
            code: '14'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1873021.86627',
        x_coor: '994255.007385',
        name: '진천군',
        code: '350',
        subClassList: [
          {
            class: 'C',
            y_coor: '1888327.0907',
            x_coor: '994273.861389',
            name: '광혜원면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1879489.5589',
            x_coor: '1000811.7688',
            name: '덕산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1865149.48309',
            x_coor: '994399.768372',
            name: '문백면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1876189.3205',
            x_coor: '989029.965576',
            name: '백곡면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1880817.15631',
            x_coor: '993638.522705',
            name: '이월면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1873021.86627',
            x_coor: '994255.007385',
            name: '진천읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1871968.6001',
            x_coor: '1002356.45081',
            name: '초평면',
            code: '32'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1848529.6225',
        x_coor: '998960.156616',
        name: '청주시 상당구',
        code: '041',
        subClassList: [
          {
            class: 'C',
            y_coor: '1839538.65991',
            x_coor: '1004370.93152',
            name: '가덕면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1847394.48669',
            x_coor: '999948.282288',
            name: '금천동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1843240.41309',
            x_coor: '1000864.3031',
            name: '남일면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1847213.12671',
            x_coor: '1009298.77399',
            name: '낭성면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1835567.14972',
            x_coor: '999662.388306',
            name: '문의면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1848708.2179',
            x_coor: '1014168.44641',
            name: '미원면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1848202.02228',
            x_coor: '999397.441772',
            name: '성안동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1846682.70691',
            x_coor: '999899.554688',
            name: '영운동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1848595.10168',
            x_coor: '1000323.93298',
            name: '용담·명암·산성동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1845666.19788',
            x_coor: '1000114.67633',
            name: '용암1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1845480.7041',
            x_coor: '1000717.10602',
            name: '용암2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1849398.5719',
            x_coor: '999014.593018',
            name: '중앙동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1848365.75671',
            x_coor: '999706.273804',
            name: '탑·대성동',
            code: '53'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1848862.8819',
        x_coor: '997300.612671',
        name: '청주시 서원구',
        code: '042',
        subClassList: [
          {
            class: 'C',
            y_coor: '1840325.37451',
            x_coor: '994058.721313',
            name: '남이면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1847753.8233',
            x_coor: '997923.704529',
            name: '모충동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1845650.26831',
            x_coor: '999027.835571',
            name: '분평동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1849144.21832',
            x_coor: '998313.753784',
            name: '사직1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1848194.59949',
            x_coor: '997653.370728',
            name: '사직2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1848411.86987',
            x_coor: '996326.290527',
            name: '사창동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1845832.24792',
            x_coor: '998085.35022',
            name: '산남동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1846576.44733',
            x_coor: '995810.52179',
            name: '성화·개신·죽림동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1846713.53369',
            x_coor: '998207.493408',
            name: '수곡1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1846610.6073',
            x_coor: '997497.480896',
            name: '수곡2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1832104.76971',
            x_coor: '993211.551086',
            name: '현도면',
            code: '32'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1850412.55792',
        x_coor: '998805.728088',
        name: '청주시 청원구',
        code: '044',
        subClassList: [
          {
            class: 'C',
            y_coor: '1851158.47113',
            x_coor: '998450.189697',
            name: '내덕1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1851290.64569',
            x_coor: '999184.593628',
            name: '내덕2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1858436.91248',
            x_coor: '1003167.70587',
            name: '내수읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1860159.5965',
            x_coor: '1003774.17371',
            name: '북이면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1855126.94928',
            x_coor: '998316.607422',
            name: '오근장동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1860478.44849',
            x_coor: '995938.393372',
            name: '오창읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1850128.79028',
            x_coor: '998831.194519',
            name: '우암동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1852067.35089',
            x_coor: '999143.713928',
            name: '율량·사천동',
            code: '55'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1849284.86493',
        x_coor: '993875.499084',
        name: '청주시 흥덕구',
        code: '043',
        subClassList: [
          {
            class: 'C',
            y_coor: '1847887.36969',
            x_coor: '994013.184021',
            name: '가경동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1847040.04547',
            x_coor: '987245.384827',
            name: '강내면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1847367.09131',
            x_coor: '991485.211609',
            name: '강서1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1851502.52728',
            x_coor: '993594.860107',
            name: '강서2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1848628.88629',
            x_coor: '993963.888306',
            name: '복대1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1847589.77332',
            x_coor: '994972.498596',
            name: '복대2동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1849167.95813',
            x_coor: '996391.172424',
            name: '봉명1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1849646.44513',
            x_coor: '996233.087402',
            name: '봉명2·송정동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1845721.46973',
            x_coor: '984310.694397',
            name: '오송읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1851862.8927',
            x_coor: '988885.228882',
            name: '옥산면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1850001.77069',
            x_coor: '997910.175476',
            name: '운천·신봉동',
            code: '51'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1888149.31689',
        x_coor: '1037905.57758',
        name: '충주시',
        code: '020',
        subClassList: [
          {
            class: 'C',
            y_coor: '1887089.94427',
            x_coor: '1038188.42529',
            name: '교현2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1886350.57428',
            x_coor: '1038743.02423',
            name: '교현·안림동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1893914.26392',
            x_coor: '1037744.01672',
            name: '금가면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1894425.91272',
            x_coor: '1022599.50098',
            name: '노은면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1883321.46729',
            x_coor: '1035715.4176',
            name: '달천동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1886643.76331',
            x_coor: '1028297.53192',
            name: '대소원면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1892071.90613',
            x_coor: '1041196.10272',
            name: '동량면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1890425.57928',
            x_coor: '1037097.38062',
            name: '목행·용탄동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1886003.66791',
            x_coor: '1037877.1543',
            name: '문화동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1886217.1557',
            x_coor: '1037322.2962',
            name: '봉방동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1898218.03632',
            x_coor: '1040515.39618',
            name: '산척면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1878661.9201',
            x_coor: '1041389.67163',
            name: '살미면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1886195.21613',
            x_coor: '1038616.578',
            name: '성내·충인동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1901293.89368',
            x_coor: '1030895.37012',
            name: '소태면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1872227.90289',
            x_coor: '1044109.68329',
            name: '수안보면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1888622.7923',
            x_coor: '1021046.87262',
            name: '신니면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1901199.08789',
            x_coor: '1022280.89313',
            name: '앙성면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1898735.31531',
            x_coor: '1036889.45569',
            name: '엄정면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1887668.53992',
            x_coor: '1038636.48718',
            name: '연수동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1885179.7699',
            x_coor: '1039054.0647',
            name: '용산동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1886397.89349',
            x_coor: '1026309.10217',
            name: '주덕읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1892309.96393',
            x_coor: '1031753.73999',
            name: '중앙탑면',
            code: '44'
          },
          {
            class: 'C',
            y_coor: '1885614.27728',
            x_coor: '1038472.68127',
            name: '지현동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1887154.81049',
            x_coor: '1037295.86389',
            name: '칠금·금릉동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1884267.1781',
            x_coor: '1039053.8963',
            name: '호암·직동',
            code: '58'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1851554.69989',
    x_coor: '926073.572998',
    name: '충청남도',
    code: '34',
    subClassList: [
      {
        class: 'B',
        y_coor: '1808626.94012',
        x_coor: '977430.429321',
        name: '계룡시',
        code: '070',
        subClassList: [
          {
            class: 'C',
            y_coor: '1808626.94012',
            x_coor: '977430.429321',
            name: '금암동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1807759.94611',
            x_coor: '979587.9021',
            name: '두마면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1811489.8299',
            x_coor: '976855.676392',
            name: '신도안면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1810170.12927',
            x_coor: '976640.050781',
            name: '엄사면',
            code: '33'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1827738.99451',
        x_coor: '965860.346497',
        name: '공주시',
        code: '020',
        subClassList: [
          {
            class: 'C',
            y_coor: '1818159.66992',
            x_coor: '967855.325012',
            name: '계룡면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1826875.76727',
            x_coor: '965887.765015',
            name: '금학동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1822190.70813',
            x_coor: '977606.848206',
            name: '반포면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1833940.03009',
            x_coor: '957491.882385',
            name: '사곡면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1830576.90332',
            x_coor: '967089.463806',
            name: '신관동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1835360.72412',
            x_coor: '951246.301025',
            name: '신풍면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1828935.3913',
            x_coor: '967500.223511',
            name: '옥룡동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1830464.6861',
            x_coor: '959661.230591',
            name: '우성면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1828945.07013',
            x_coor: '966037.969116',
            name: '웅진동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1830468.06708',
            x_coor: '969088.668274',
            name: '월송동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1839595.20209',
            x_coor: '950818.262329',
            name: '유구읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1833599.06189',
            x_coor: '967873.600708',
            name: '의당면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1818375.26971',
            x_coor: '960816.461609',
            name: '이인면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1845708.03491',
            x_coor: '966041.213318',
            name: '정안면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1828397.01288',
            x_coor: '966118.454773',
            name: '중학동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1814844.89587',
            x_coor: '957831.92749',
            name: '탄천면',
            code: '32'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1790211.37372',
        x_coor: '998922.683777',
        name: '금산군',
        code: '310',
        subClassList: [
          {
            class: 'C',
            y_coor: '1796866.0047',
            x_coor: '1002511.88281',
            name: '군북면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1790211.37372',
            x_coor: '998922.683777',
            name: '금산읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1792643.1051',
            x_coor: '995839.361877',
            name: '금성면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1783170.72113',
            x_coor: '994299.158997',
            name: '남이면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1782885.82593',
            x_coor: '1000398.39471',
            name: '남일면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1796599.3147',
            x_coor: '990856.27948',
            name: '복수면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1784871.1059',
            x_coor: '1004956.72113',
            name: '부리면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1790615.86627',
            x_coor: '1004148.19879',
            name: '제원면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1794147.5921',
            x_coor: '988324.479797',
            name: '진산면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1799752.51892',
            x_coor: '997843.372986',
            name: '추부면',
            code: '39'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1798968.48969',
        x_coor: '963914.913818',
        name: '논산시',
        code: '060',
        subClassList: [
          {
            class: 'C',
            y_coor: '1793363.16467',
            x_coor: '969300.031128',
            name: '가야곡면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1795774.47772',
            x_coor: '956642.007507',
            name: '강경읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1805152.28027',
            x_coor: '962239.536316',
            name: '광석면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1809052.27808',
            x_coor: '966791.707092',
            name: '노성면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1800988.34711',
            x_coor: '978862.809814',
            name: '벌곡면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1802165.27191',
            x_coor: '966579.421204',
            name: '부적면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1800270.08649',
            x_coor: '962864.641113',
            name: '부창동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1810982.44751',
            x_coor: '967789.650879',
            name: '상월면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1800814.23492',
            x_coor: '958071.062805',
            name: '성동면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1793533.73767',
            x_coor: '975946.946777',
            name: '양촌면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1792085.84412',
            x_coor: '963917.788818',
            name: '연무읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1801833.10431',
            x_coor: '973097.039795',
            name: '연산면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1796774.35272',
            x_coor: '964642.526184',
            name: '은진면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1797470.30847',
            x_coor: '960680.043884',
            name: '채운면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1798968.48969',
            x_coor: '963914.913818',
            name: '취암동',
            code: '51'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1877160.86951',
        x_coor: '923917.644409',
        name: '당진시',
        code: '080',
        subClassList: [
          {
            class: 'C',
            y_coor: '1881220.7973',
            x_coor: '919548.120605',
            name: '고대면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1877160.86951',
            x_coor: '923917.644409',
            name: '당진1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1877202.46332',
            x_coor: '922131.707397',
            name: '당진2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1879193.26288',
            x_coor: '923814.8255',
            name: '당진3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1878431.12628',
            x_coor: '911277.719421',
            name: '대호지면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1869149.11407',
            x_coor: '925701.487671',
            name: '면천면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1887441.88153',
            x_coor: '919088.960022',
            name: '석문면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1881843.36249',
            x_coor: '926870.215515',
            name: '송산면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1882866.5661',
            x_coor: '935895.485779',
            name: '송악읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1872007.15509',
            x_coor: '929841.426208',
            name: '순성면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1876610.38568',
            x_coor: '935264.028076',
            name: '신평면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1868819.72449',
            x_coor: '935504.521118',
            name: '우강면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1876403.90509',
            x_coor: '916965.741394',
            name: '정미면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1868244.54871',
            x_coor: '934308.489685',
            name: '합덕읍',
            code: '11'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1815486.29132',
        x_coor: '920372.555176',
        name: '보령시',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1812293.50671',
            x_coor: '919650.436523',
            name: '남포면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1817545.35388',
            x_coor: '918980.740417',
            name: '대천1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1817717.36169',
            x_coor: '918331.043518',
            name: '대천2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1818000.18811',
            x_coor: '920264.6521',
            name: '대천3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1815486.29132',
            x_coor: '920372.555176',
            name: '대천4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1813751.22888',
            x_coor: '911597.29541',
            name: '대천5동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1801806.9693',
            x_coor: '925972.4646',
            name: '미산면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1815744.54608',
            x_coor: '923840.648193',
            name: '성주면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1820838.06372',
            x_coor: '904216.868591',
            name: '오천면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1804216.94672',
            x_coor: '919226.184509',
            name: '웅천읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1821888.23969',
            x_coor: '916531.057312',
            name: '주교면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1800484.67853',
            x_coor: '921937.291077',
            name: '주산면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1824562.54529',
            x_coor: '918231.56189',
            name: '주포면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1831675.37793',
            x_coor: '912863.023499',
            name: '천북면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1821757.55048',
            x_coor: '925886.580688',
            name: '청라면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1827927.57593',
            x_coor: '918405.275391',
            name: '청소면',
            code: '35'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1808878.73651',
        x_coor: '946989.583008',
        name: '부여군',
        code: '330',
        subClassList: [
          {
            class: 'C',
            y_coor: '1806378.95007',
            x_coor: '938264.307373',
            name: '구룡면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1808839.71191',
            x_coor: '944690.830688',
            name: '규암면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1801883.72968',
            x_coor: '937645.941895',
            name: '남면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1808863.64069',
            x_coor: '935380.657715',
            name: '내산면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1808858.73749',
            x_coor: '947114.12439',
            name: '부여읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1806341.98328',
            x_coor: '955290.123413',
            name: '석성면',
            code: '44'
          },
          {
            class: 'C',
            y_coor: '1797128.14771',
            x_coor: '950390.843384',
            name: '세도면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1793322.64429',
            x_coor: '944325.455688',
            name: '양화면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1799644.72607',
            x_coor: '931096.903015',
            name: '옥산면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1812183.34149',
            x_coor: '928553.84082',
            name: '외산면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1812758.27808',
            x_coor: '942026.192871',
            name: '은산면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1799512.00513',
            x_coor: '945587.440796',
            name: '임천면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1805366.86627',
            x_coor: '944872.703796',
            name: '장암면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1807517.9411',
            x_coor: '956890.632629',
            name: '초촌면',
            code: '45'
          },
          {
            class: 'C',
            y_coor: '1798506.73352',
            x_coor: '938999.445007',
            name: '충화면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1802429.47552',
            x_coor: '933521.142822',
            name: '홍산면',
            code: '36'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1865711.07251',
        x_coor: '906339.116699',
        name: '서산시',
        code: '050',
        subClassList: [
          {
            class: 'C',
            y_coor: '1852575.22528',
            x_coor: '913673.418091',
            name: '고북면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1882892.6001',
            x_coor: '905104.1203',
            name: '대산읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1866254.31012',
            x_coor: '907129.618286',
            name: '동문1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1865236.69629',
            x_coor: '907196.270386',
            name: '동문2동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1858000.4751',
            x_coor: '901181.966492',
            name: '부석면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1865849.71252',
            x_coor: '906144.17688',
            name: '부춘동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1863590.74249',
            x_coor: '906643.008606',
            name: '석남동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1871712.2691',
            x_coor: '907360.411316',
            name: '성연면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1864191.04907',
            x_coor: '907834.264282',
            name: '수석동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1868457.10211',
            x_coor: '917995.902405',
            name: '운산면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1867326.28949',
            x_coor: '912396.881409',
            name: '음암면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1862212.60553',
            x_coor: '904075.16217',
            name: '인지면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1874445.7569',
            x_coor: '905238.778015',
            name: '지곡면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1868824.3363',
            x_coor: '897442.612427',
            name: '팔봉면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1857729.52667',
            x_coor: '914702.278931',
            name: '해미면',
            code: '38'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1787349.45209',
        x_coor: '927212.872681',
        name: '서천군',
        code: '340',
        subClassList: [
          {
            class: 'C',
            y_coor: '1786665.13452',
            x_coor: '933569.107422',
            name: '기산면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1791382.82233',
            x_coor: '936165.593323',
            name: '마산면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1785293.73291',
            x_coor: '928556.908081',
            name: '마서면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1794176.7655',
            x_coor: '932719.439514',
            name: '문산면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1794270.26129',
            x_coor: '919152.813293',
            name: '비인면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1795518.98572',
            x_coor: '914503.940674',
            name: '서면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1787349.45209',
            x_coor: '927212.872681',
            name: '서천읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1791872.6651',
            x_coor: '932815.82843',
            name: '시초면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1779583.21991',
            x_coor: '927936.548828',
            name: '장항읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1789265.73053',
            x_coor: '925291.628601',
            name: '종천면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1795940.46332',
            x_coor: '927059.065674',
            name: '판교면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1787926.20691',
            x_coor: '937163.071594',
            name: '한산면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1782554.60193',
            x_coor: '935305.007996',
            name: '화양면',
            code: '32'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1865884.59113',
        x_coor: '955617.034607',
        name: '아산시',
        code: '040',
        subClassList: [
          {
            class: 'C',
            y_coor: '1862332.07349',
            x_coor: '944429.059387',
            name: '도고면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1881362.7583',
            x_coor: '958821.705811',
            name: '둔포면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1864003.93573',
            x_coor: '960176.684204',
            name: '배방읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1866058.98633',
            x_coor: '942977.169495',
            name: '선장면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1859398.02869',
            x_coor: '956164.640991',
            name: '송악면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1867434.36627',
            x_coor: '949701.256897',
            name: '신창면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1868865.24292',
            x_coor: '953301.212097',
            name: '염치읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1873286.52112',
            x_coor: '951394.876221',
            name: '영인면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1865560.12567',
            x_coor: '955342.456482',
            name: '온양1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1864589.71271',
            x_coor: '955690.286926',
            name: '온양2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1865150.68213',
            x_coor: '956540.331604',
            name: '온양3동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1866930.69592',
            x_coor: '953446.032227',
            name: '온양4동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1864235.79889',
            x_coor: '955023.484497',
            name: '온양5동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1862653.1571',
            x_coor: '956771.502014',
            name: '온양6동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1872501.73712',
            x_coor: '956516.78833',
            name: '음봉면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1874703.18073',
            x_coor: '945150.755981',
            name: '인주면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1866781.80652',
            x_coor: '960844.833008',
            name: '탕정면',
            code: '33'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1854069.94873',
        x_coor: '941821.746887',
        name: '예산군',
        code: '370',
        subClassList: [
          {
            class: 'C',
            y_coor: '1861105.19733',
            x_coor: '928816.086975',
            name: '고덕면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1839259.67792',
            x_coor: '934955.324524',
            name: '광시면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1851251.97009',
            x_coor: '945675.561096',
            name: '대술면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1845672.25409',
            x_coor: '936354.712097',
            name: '대흥면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1856268.00452',
            x_coor: '925455.392517',
            name: '덕산면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1861489.19452',
            x_coor: '926947.341919',
            name: '봉산면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1854729.45471',
            x_coor: '932048.336792',
            name: '삽교읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1859817.84491',
            x_coor: '939840.966492',
            name: '신암면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1845042.45288',
            x_coor: '943515.910828',
            name: '신양면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1854069.94873',
            x_coor: '941821.746887',
            name: '예산읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1854583.97168',
            x_coor: '937250.128601',
            name: '오가면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1851444.79187',
            x_coor: '933967.635071',
            name: '응봉면',
            code: '35'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1867693.29572',
        x_coor: '968818.199829',
        name: '천안시 동남구',
        code: '011',
        subClassList: [
          {
            class: 'C',
            y_coor: '1855694.24249',
            x_coor: '965272.977783',
            name: '광덕면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1864242.13849',
            x_coor: '986106.567688',
            name: '동면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1865239.19373',
            x_coor: '976325.766296',
            name: '목천읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1868145.45911',
            x_coor: '968806.739319',
            name: '문성동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1863172.30109',
            x_coor: '982380.968628',
            name: '병천면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1867572.05811',
            x_coor: '967835.507202',
            name: '봉명동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1869944.04327',
            x_coor: '979777.573975',
            name: '북면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1860523.10773',
            x_coor: '976514.380127',
            name: '성남면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1859255.7381',
            x_coor: '980441.795776',
            name: '수신면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1865554.72449',
            x_coor: '966207.679871',
            name: '신방동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1868965.3913',
            x_coor: '969462.742676',
            name: '신안동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1868243.68671',
            x_coor: '969942.50592',
            name: '원성1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1867082.37653',
            x_coor: '969744.545288',
            name: '원성2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1867040.80548',
            x_coor: '968061.047913',
            name: '일봉동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1866933.47388',
            x_coor: '969008.495728',
            name: '중앙동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1865378.34631',
            x_coor: '969373.017395',
            name: '청룡동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1858309.59271',
            x_coor: '965952.273621',
            name: '풍세면',
            code: '31'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1875629.7099',
        x_coor: '969255.365112',
        name: '천안시 서북구',
        code: '012',
        subClassList: [
          {
            class: 'C',
            y_coor: '1868959.06891',
            x_coor: '965762.484009',
            name: '백석동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1871670.43591',
            x_coor: '968993.517517',
            name: '부성1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1871073.92169',
            x_coor: '967714.96991',
            name: '부성2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1868074.10352',
            x_coor: '965082.879883',
            name: '불당동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1875562.86969',
            x_coor: '973187.069092',
            name: '성거읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1868921.84589',
            x_coor: '968022.051392',
            name: '성정1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1869561.44849',
            x_coor: '967670.421997',
            name: '성정2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1880042.90448',
            x_coor: '967434.518494',
            name: '성환읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1867382.7337',
            x_coor: '967041.802979',
            name: '쌍용1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1866518.9303',
            x_coor: '966412.63208',
            name: '쌍용2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1867268.17767',
            x_coor: '966028.794617',
            name: '쌍용3동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1879413.94373',
            x_coor: '975160.043274',
            name: '입장면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1875666.22272',
            x_coor: '968853.52179',
            name: '직산읍',
            code: '13'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1829301.95813',
        x_coor: '937467.028076',
        name: '청양군',
        code: '350',
        subClassList: [
          {
            class: 'C',
            y_coor: '1822872.02551',
            x_coor: '935047.575195',
            name: '남양면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1827627.53693',
            x_coor: '940155.264404',
            name: '대치면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1824719.18549',
            x_coor: '955525.480591',
            name: '목면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1835973.87207',
            x_coor: '936133.238586',
            name: '비봉면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1836435.33069',
            x_coor: '941327.896423',
            name: '운곡면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1816224.26947',
            x_coor: '945534.136475',
            name: '장평면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1824299.69312',
            x_coor: '950253.950012',
            name: '정산면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1817355.2605',
            x_coor: '950849.053589',
            name: '청남면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1828369.21289',
            x_coor: '937472.817383',
            name: '청양읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1825817.04309',
            x_coor: '929844.049316',
            name: '화성면',
            code: '38'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1861506.46832',
        x_coor: '892687.508484',
        name: '태안군',
        code: '380',
        subClassList: [
          {
            class: 'C',
            y_coor: '1825317.42249',
            x_coor: '902201.239014',
            name: '고남면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1858046.25409',
            x_coor: '886399.833801',
            name: '근흥면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1853336.29852',
            x_coor: '892558.15271',
            name: '남면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1863496.03448',
            x_coor: '883725.293579',
            name: '소원면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1836507.29413',
            x_coor: '896543.963379',
            name: '안면읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1870198.70789',
            x_coor: '889155.931213',
            name: '원북면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1875281.0661',
            x_coor: '891340.39093',
            name: '이원면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1861816.59149',
            x_coor: '892920.845215',
            name: '태안읍',
            code: '11'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1845157.23291',
        x_coor: '924944.148804',
        name: '홍성군',
        code: '360',
        subClassList: [
          {
            class: 'C',
            y_coor: '1845681.9715',
            x_coor: '915040.306091',
            name: '갈산면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1836711.38031',
            x_coor: '914647.765991',
            name: '결성면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1834470.63489',
            x_coor: '921673.910889',
            name: '광천읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1843696.69568',
            x_coor: '920461.6604',
            name: '구항면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1846286.31311',
            x_coor: '931380.88501',
            name: '금마면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1842955.76709',
            x_coor: '912077.20459',
            name: '서부면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1837522.71472',
            x_coor: '918581.346375',
            name: '은하면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1834469.25549',
            x_coor: '927579.017822',
            name: '장곡면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1840456.61932',
            x_coor: '927345.245972',
            name: '홍동면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1850544.69849',
            x_coor: '927755.51532',
            name: '홍북면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1845157.23291',
            x_coor: '924944.148804',
            name: '홍성읍',
            code: '11'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1758282.78149',
    x_coor: '964650.794922',
    name: '전라북도',
    code: '35',
    subClassList: [
      {
        class: 'B',
        y_coor: '1715848.52588',
        x_coor: '927574.710571',
        name: '고창군',
        code: '370',
        subClassList: [
          {
            class: 'C',
            y_coor: '1712997.46692',
            x_coor: '925422.311096',
            name: '고수면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1715702.72809',
            x_coor: '927662.963196',
            name: '고창읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1709584.99127',
            x_coor: '910204.581177',
            name: '공음면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1705421.67389',
            x_coor: '918525.406006',
            name: '대산면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1714123.97949',
            x_coor: '914728.238708',
            name: '무장면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1724563.18268',
            x_coor: '925108.236572',
            name: '부안면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1716988.26788',
            x_coor: '908809.547607',
            name: '상하면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1727162.01288',
            x_coor: '931408.037781',
            name: '성내면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1707970.43091',
            x_coor: '922475.931091',
            name: '성송면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1721748.57312',
            x_coor: '928537.544678',
            name: '신림면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1725788.97632',
            x_coor: '913962.442017',
            name: '심원면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1716342.54492',
            x_coor: '921469.264893',
            name: '아산면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1718772.55048',
            x_coor: '912808.406311',
            name: '해리면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1724943.39771',
            x_coor: '927788.518005',
            name: '흥덕면',
            code: '40'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1774811.0697',
        x_coor: '931191.962585',
        name: '군산시',
        code: '020',
        subClassList: [
          {
            class: 'C',
            y_coor: '1774445.43433',
            x_coor: '932775.941223',
            name: '개정동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1773748.13971',
            x_coor: '936557.621582',
            name: '개정면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1776149.3667',
            x_coor: '930569.521484',
            name: '경암동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1776828.63849',
            x_coor: '931849.711975',
            name: '구암동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1774751.5293',
            x_coor: '927400.639587',
            name: '나운1동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1774531.9519',
            x_coor: '927829.996826',
            name: '나운2동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1773868.3905',
            x_coor: '926888.818787',
            name: '나운3동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1781716.00989',
            x_coor: '939822.513489',
            name: '나포면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1772436.2923',
            x_coor: '937939.856323',
            name: '대야면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1773944.76569',
            x_coor: '923961.469116',
            name: '미성동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1775868.6283',
            x_coor: '928564.043823',
            name: '삼학동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1776457.88507',
            x_coor: '943738.497375',
            name: '서수면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1777219.42273',
            x_coor: '935640.610596',
            name: '성산면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1774154.35168',
            x_coor: '914243.032776',
            name: '소룡동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1774520.32532',
            x_coor: '929458.583313',
            name: '수송동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1775418.6485',
            x_coor: '927944.460022',
            name: '신풍동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1769896.76111',
            x_coor: '926493.682617',
            name: '옥구읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1762745.48263',
            x_coor: '903215.53049',
            name: '옥도면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1771662.89789',
            x_coor: '932226.048096',
            name: '옥산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1770089.60291',
            x_coor: '922859.215271',
            name: '옥서면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1776916.81128',
            x_coor: '928694.305786',
            name: '월명동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1776384.93127',
            x_coor: '941459.824219',
            name: '임피면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1775413.81232',
            x_coor: '931301.785217',
            name: '조촌동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1776805.74249',
            x_coor: '929548.98822',
            name: '중앙동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1777284.89832',
            x_coor: '928521.305603',
            name: '해신동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1768747.32507',
            x_coor: '932954.545715',
            name: '회현면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1775956.03009',
            x_coor: '929247.560791',
            name: '흥남동',
            code: '64'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1756525.45612',
        x_coor: '944016.26593',
        name: '김제시',
        code: '060',
        subClassList: [
          {
            class: 'C',
            y_coor: '1756473.94647',
            x_coor: '946122.2146',
            name: '검산동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1766356.1167',
            x_coor: '947012.979187',
            name: '공덕면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1759969.92651',
            x_coor: '931535.231995',
            name: '광활면',
            code: '44'
          },
          {
            class: 'C',
            y_coor: '1756066.86267',
            x_coor: '943691.195007',
            name: '교월동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1753220.32349',
            x_coor: '955830.810974',
            name: '금구면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1746814.10413',
            x_coor: '954431.516113',
            name: '금산면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1762194.10553',
            x_coor: '938600.201782',
            name: '만경읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1766147.86713',
            x_coor: '951951.317505',
            name: '백구면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1759255.61548',
            x_coor: '945095.879578',
            name: '백산면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1750935.36011',
            x_coor: '951381.302185',
            name: '봉남면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1748825.0473',
            x_coor: '940671.48938',
            name: '부량면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1758451.90051',
            x_coor: '937295.664124',
            name: '성덕면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1755675.57611',
            x_coor: '945594.105225',
            name: '신풍동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1756695.37732',
            x_coor: '945017.657104',
            name: '요촌동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1762048.26672',
            x_coor: '950834.280212',
            name: '용지면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1753108.33472',
            x_coor: '937974.75769',
            name: '죽산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1762736.77448',
            x_coor: '933735.218872',
            name: '진봉면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1767621.85168',
            x_coor: '940501.81073',
            name: '청하면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1755489.80188',
            x_coor: '949607.162598',
            name: '황산면',
            code: '42'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1713407.90167',
        x_coor: '990046.976013',
        name: '남원시',
        code: '050',
        subClassList: [
          {
            class: 'C',
            y_coor: '1711865.73749',
            x_coor: '988688.970886',
            name: '금동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1706902.36047',
            x_coor: '982176.45929',
            name: '금지면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1711549.29633',
            x_coor: '989127.091309',
            name: '노암동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1705780.2063',
            x_coor: '975261.166504',
            name: '대강면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1715165.34711',
            x_coor: '984132.891907',
            name: '대산면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1724590.97528',
            x_coor: '986588.90448',
            name: '덕과면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1713791.80872',
            x_coor: '990928.185974',
            name: '도통동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1712815.80072',
            x_coor: '989374.884583',
            name: '동충동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1724141.55133',
            x_coor: '991147.925781',
            name: '보절면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1722525.1311',
            x_coor: '987352.236389',
            name: '사매면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1713726.80011',
            x_coor: '1011182.7962',
            name: '산내면',
            code: '45'
          },
          {
            class: 'C',
            y_coor: '1721867.64111',
            x_coor: '997842.983215',
            name: '산동면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1706581.88153',
            x_coor: '985204.834473',
            name: '송동면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1704866.74231',
            x_coor: '988325.385315',
            name: '수지면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1723642.85028',
            x_coor: '1010237.90961',
            name: '아영면',
            code: '44'
          },
          {
            class: 'C',
            y_coor: '1712509.54547',
            x_coor: '988175.32251',
            name: '왕정동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1716002.30591',
            x_coor: '1002623.0556',
            name: '운봉읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1714570.19568',
            x_coor: '996179.34491',
            name: '이백면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1718732.53967',
            x_coor: '1009089.37073',
            name: '인월면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1709254.15369',
            x_coor: '983792.280029',
            name: '주생면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1710578.32788',
            x_coor: '994725.431091',
            name: '주천면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1712434.60651',
            x_coor: '989517.774902',
            name: '죽항동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1713487.4917',
            x_coor: '989175.131775',
            name: '향교동',
            code: '57'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1778905.3905',
        x_coor: '1014485.80377',
        name: '무주군',
        code: '330',
        subClassList: [
          {
            class: 'C',
            y_coor: '1779123.75269',
            x_coor: '1014624.1756',
            name: '무주읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1774856.69208',
            x_coor: '1031058.3504',
            name: '무풍면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1775230.94067',
            x_coor: '1005298.78418',
            name: '부남면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1779076.4657',
            x_coor: '1026105.15802',
            name: '설천면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1763002.03229',
            x_coor: '1013818.08698',
            name: '안성면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1772100.6225',
            x_coor: '1014378.90588',
            name: '적상면',
            code: '33'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1748651.79431',
        x_coor: '930642.960876',
        name: '부안군',
        code: '380',
        subClassList: [
          {
            class: 'C',
            y_coor: '1752000.04633',
            x_coor: '927505.528198',
            name: '계화면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1750618.71692',
            x_coor: '931177.538513',
            name: '동진면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1745535.36609',
            x_coor: '935471.559692',
            name: '백산면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1741248.89093',
            x_coor: '912065.69043',
            name: '변산면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1735434.8681',
            x_coor: '924941.334473',
            name: '보안면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1748411.5675',
            x_coor: '930971.97467',
            name: '부안읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1743635.22211',
            x_coor: '925680.157776',
            name: '상서면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1734746.36768',
            x_coor: '890667.103271',
            name: '위도면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1741991.33289',
            x_coor: '928592.437988',
            name: '주산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1733018.60071',
            x_coor: '925459.711487',
            name: '줄포면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1732768.00909',
            x_coor: '918952.605408',
            name: '진서면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1746911.75189',
            x_coor: '924202.647278',
            name: '하서면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1748045.2771',
            x_coor: '929811.758606',
            name: '행안면',
            code: '33'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1708814.83331',
        x_coor: '967063.439819',
        name: '순창군',
        code: '360',
        subClassList: [
          {
            class: 'C',
            y_coor: '1717538.73651',
            x_coor: '963911.719421',
            name: '구림면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1704970.12988',
            x_coor: '962421.845276',
            name: '금과면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1716206.85291',
            x_coor: '976643.989075',
            name: '동계면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1715302.96832',
            x_coor: '948237.699402',
            name: '복흥면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1708814.83331',
            x_coor: '967063.439819',
            name: '순창읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1722856.8349',
            x_coor: '954775.956909',
            name: '쌍치면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1707345.33069',
            x_coor: '971607.988831',
            name: '유등면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1712965.46552',
            x_coor: '967432.447876',
            name: '인계면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1711346.50348',
            x_coor: '973549.301208',
            name: '적성면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1710730.5827',
            x_coor: '963411.946777',
            name: '팔덕면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1704614.28027',
            x_coor: '967140.533813',
            name: '풍산면',
            code: '35'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1767622.36609',
        x_coor: '969513.905212',
        name: '완주군',
        code: '310',
        subClassList: [
          {
            class: 'C',
            y_coor: '1780662.97913',
            x_coor: '977709.982788',
            name: '경천면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1775550.4787',
            x_coor: '973434.274109',
            name: '고산면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1748468.56049',
            x_coor: '965714.664307',
            name: '구이면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1771153.90228',
            x_coor: '981668.011108',
            name: '동상면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1771717.79633',
            x_coor: '969859.446289',
            name: '봉동읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1777741.13507',
            x_coor: '967560.37439',
            name: '비봉면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1768141.10468',
            x_coor: '961335.649292',
            name: '삼례읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1752853.70929',
            x_coor: '973502.247314',
            name: '상관면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1762207.30048',
            x_coor: '975925.158875',
            name: '소양면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1766794.25',
            x_coor: '971138.5',
            name: '용진읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1788414.14972',
            x_coor: '979965.447571',
            name: '운주면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1758335.41272',
            x_coor: '956840.775574',
            name: '이서면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1782128.00592',
            x_coor: '973288.562378',
            name: '화산면',
            code: '39'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1772533.84991',
        x_coor: '951092.857605',
        name: '익산시',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1777450.82672',
            x_coor: '959710.049927',
            name: '금마면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1772533.84991',
            x_coor: '951092.857605',
            name: '남중동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1786909.7533',
            x_coor: '955868.394287',
            name: '낭산면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1770465.30652',
            x_coor: '951373.99408',
            name: '동산동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1771380.38068',
            x_coor: '951143.748474',
            name: '마동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1792947.07568',
            x_coor: '956865.111084',
            name: '망성면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1772527.75372',
            x_coor: '949984.35022',
            name: '모현동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1780510.9527',
            x_coor: '953511.680725',
            name: '삼기면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1776750.42273',
            x_coor: '953553.436707',
            name: '삼성동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1788042.18793',
            x_coor: '949111.235229',
            name: '성당면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1771456.0083',
            x_coor: '949519.519775',
            name: '송학동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1773811.8963',
            x_coor: '951424.777283',
            name: '신동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1773302.75311',
            x_coor: '953494.601013',
            name: '어양동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1784730.53088',
            x_coor: '962713.457703',
            name: '여산면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1772971.14832',
            x_coor: '952439.244812',
            name: '영등1동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1773834.84491',
            x_coor: '952842.780823',
            name: '영등2동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1771487.09991',
            x_coor: '947347.516907',
            name: '오산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1774483.9295',
            x_coor: '962838.351379',
            name: '왕궁면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1790445.78247',
            x_coor: '954372.623108',
            name: '용동면',
            code: '44'
          },
          {
            class: 'C',
            y_coor: '1791589.97711',
            x_coor: '950711.121826',
            name: '용안면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1785460.30908',
            x_coor: '943889.021301',
            name: '웅포면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1770450.63928',
            x_coor: '950712.711731',
            name: '인화동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1771593.68988',
            x_coor: '950609.60437',
            name: '중앙동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1767237.12268',
            x_coor: '955355.304993',
            name: '춘포면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1774362.59332',
            x_coor: '955966.615417',
            name: '팔봉동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1770766.68488',
            x_coor: '949966.613525',
            name: '평화동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1784960.3927',
            x_coor: '946900.245972',
            name: '함라면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1786539.35931',
            x_coor: '951796.553101',
            name: '함열읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1778769.0943',
            x_coor: '949989.608093',
            name: '황등면',
            code: '32'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1735769.03052',
        x_coor: '980900.935425',
        name: '임실군',
        code: '350',
        subClassList: [
          {
            class: 'C',
            y_coor: '1726096.99109',
            x_coor: '969500.32959',
            name: '강진면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1741981.0437',
            x_coor: '979261.445923',
            name: '관촌면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1723856.58533',
            x_coor: '968915.258118',
            name: '덕치면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1723548.71887',
            x_coor: '979541.48761',
            name: '삼계면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1737090.52368',
            x_coor: '984888.858276',
            name: '성수면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1743127.21631',
            x_coor: '970889.503601',
            name: '신덕면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1740142.42792',
            x_coor: '975016.73468',
            name: '신평면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1727279.9519',
            x_coor: '984313.430298',
            name: '오수면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1740551.1073',
            x_coor: '969267.231079',
            name: '운암면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1735288.56769',
            x_coor: '980010.778076',
            name: '임실읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1729785.89771',
            x_coor: '987095.801514',
            name: '지사면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1730457.82568',
            x_coor: '972932.69989',
            name: '청웅면',
            code: '31'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1739016.9859',
        x_coor: '1001915.70172',
        name: '장수군',
        code: '340',
        subClassList: [
          {
            class: 'C',
            y_coor: '1745188.66809',
            x_coor: '1007031.20471',
            name: '계남면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1754349.17767',
            x_coor: '1010165.04498',
            name: '계북면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1726225.78131',
            x_coor: '1003971.323',
            name: '번암면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1732002.81171',
            x_coor: '990606.201416',
            name: '산서면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1748419.40491',
            x_coor: '1008052.54089',
            name: '장계면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1739016.9859',
            x_coor: '1001915.70172',
            name: '장수읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1748585.31171',
            x_coor: '1002941.20691',
            name: '천천면',
            code: '34'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1759273.59369',
        x_coor: '966972.864807',
        name: '전주시 덕진구',
        code: '012',
        subClassList: [
          {
            class: 'C',
            y_coor: '1760164.7373',
            x_coor: '966866.37793',
            name: '금암1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1760287.5127',
            x_coor: '967765.406006',
            name: '금암2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1761045.29572',
            x_coor: '965745.74823',
            name: '덕진동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1763915.46948',
            x_coor: '961588.536194',
            name: '동산동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1762352.64569',
            x_coor: '965780.686401',
            name: '송천1동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1763219.59631',
            x_coor: '965296.408386',
            name: '송천2동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1761532.59589',
            x_coor: '969259.594421',
            name: '우아1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1760256.1767',
            x_coor: '969881.600708',
            name: '우아2동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1760162.93793',
            x_coor: '968990.567322',
            name: '인후1동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1760430.07489',
            x_coor: '968059.968689',
            name: '인후2동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1759098.74908',
            x_coor: '969410.232727',
            name: '인후3동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1764305.01727',
            x_coor: '961109.18811',
            name: '조촌동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1759273.59369',
            x_coor: '966972.864807',
            name: '진북동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1761973.36151',
            x_coor: '964447.313477',
            name: '팔복동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1763070.08008',
            x_coor: '968365.648682',
            name: '호성동',
            code: '63'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1757368.45972',
        x_coor: '965650.969788',
        name: '전주시 완산구',
        code: '011',
        subClassList: [
          {
            class: 'C',
            y_coor: '1758712.64227',
            x_coor: '969141.65863',
            name: '노송동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1757061.24329',
            x_coor: '968582.092224',
            name: '동서학동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1756110.66571',
            x_coor: '965810.008484',
            name: '삼천1동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1755611.1413',
            x_coor: '965875.093628',
            name: '삼천2동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1755674.43671',
            x_coor: '965147.886475',
            name: '삼천3동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1756645.9621',
            x_coor: '968260.205505',
            name: '서서학동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1759459.07788',
            x_coor: '965254.902222',
            name: '서신동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1757037.82312',
            x_coor: '967010.865112',
            name: '완산동',
            code: '77'
          },
          {
            class: 'C',
            y_coor: '1758620.35248',
            x_coor: '967538.204224',
            name: '중앙동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1757635.7171',
            x_coor: '966107.699585',
            name: '중화산1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1758423.4375',
            x_coor: '965347.208679',
            name: '중화산2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1755799.05933',
            x_coor: '967498.90332',
            name: '평화1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1755518.0675',
            x_coor: '967042.845825',
            name: '평화2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1757900.54492',
            x_coor: '968210.461914',
            name: '풍남동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1756666.53711',
            x_coor: '966569.773682',
            name: '효자1동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1756788.25653',
            x_coor: '965628.551575',
            name: '효자2동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1756751.35687',
            x_coor: '964793.754883',
            name: '효자3동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1757987.1651',
            x_coor: '964003.172729',
            name: '효자4동',
            code: '73'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1730619.7041',
        x_coor: '941643.811707',
        name: '정읍시',
        code: '040',
        subClassList: [
          {
            class: 'C',
            y_coor: '1746665.7135',
            x_coor: '948304.956421',
            name: '감곡면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1736073.30487',
            x_coor: '934045.163208',
            name: '고부면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1729222.73932',
            x_coor: '942785.257874',
            name: '내장상동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1732121.73309',
            x_coor: '939156.604675',
            name: '농소동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1736034.14252',
            x_coor: '940464.359497',
            name: '덕천면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1734965.3399',
            x_coor: '944954.333313',
            name: '북면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1730353.94611',
            x_coor: '957427.766785',
            name: '산내면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1736246.54791',
            x_coor: '958529.227722',
            name: '산외면',
            code: '44'
          },
          {
            class: 'C',
            y_coor: '1728442.11011',
            x_coor: '939980.16449',
            name: '상교동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1729223.11932',
            x_coor: '935036.108887',
            name: '소성면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1731625.76147',
            x_coor: '941790.922729',
            name: '수성동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1730164.47693',
            x_coor: '941017.354126',
            name: '시기동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1743718.59149',
            x_coor: '944504.46698',
            name: '신태인읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1730459.00989',
            x_coor: '940677.753906',
            name: '연지동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1740122.1991',
            x_coor: '935306.383484',
            name: '영원면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1738720.25708',
            x_coor: '952426.718018',
            name: '옹동면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1741177.43268',
            x_coor: '940102.741211',
            name: '이평면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1723326.0531',
            x_coor: '935900.483521',
            name: '입암면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1730365.84692',
            x_coor: '941694.079224',
            name: '장명동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1738919.61249',
            x_coor: '943499.21283',
            name: '정우면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1729737.0271',
            x_coor: '941316.547913',
            name: '초산동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1734173.30731',
            x_coor: '954124.808472',
            name: '칠보면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1739539.51593',
            x_coor: '948628.768616',
            name: '태인면',
            code: '39'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1755039.66589',
        x_coor: '993210.971497',
        name: '진안군',
        code: '320',
        subClassList: [
          {
            class: 'C',
            y_coor: '1760185.27228',
            x_coor: '1006134.0993',
            name: '동향면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1748690.1709',
            x_coor: '988316.884216',
            name: '마령면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1744041.23871',
            x_coor: '990756.072021',
            name: '백운면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1760053.54968',
            x_coor: '987417.250183',
            name: '부귀면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1758520.04572',
            x_coor: '998805.725891',
            name: '상전면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1745860.16089',
            x_coor: '984023.402283',
            name: '성수면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1766726.56812',
            x_coor: '1004775.90021',
            name: '안천면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1774433.55908',
            x_coor: '1001811.73608',
            name: '용담면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1764070.13867',
            x_coor: '993552.903625',
            name: '정천면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1775406.18591',
            x_coor: '993317.18811',
            name: '주천면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1754763.9433',
            x_coor: '993057.890015',
            name: '진안읍',
            code: '11'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1647339.00909',
    x_coor: '905136.518982',
    name: '전라남도',
    code: '36',
    subClassList: [
      {
        class: 'B',
        y_coor: '1627777.30389',
        x_coor: '932834.314087',
        name: '강진군',
        code: '390',
        subClassList: [
          {
            class: 'C',
            y_coor: '1627777.30389',
            x_coor: '932834.314087',
            name: '강진읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1628060.96851',
            x_coor: '937226.124695',
            name: '군동면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1611493.33789',
            x_coor: '935804.795898',
            name: '대구면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1617184.97192',
            x_coor: '929137.669128',
            name: '도암면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1606506.28412',
            x_coor: '937452.602722',
            name: '마량면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1636049.89551',
            x_coor: '937069.835999',
            name: '병영면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1633434.09967',
            x_coor: '927555.372681',
            name: '성전면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1613563.60553',
            x_coor: '928404.976074',
            name: '신전면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1639183.26929',
            x_coor: '935413.286377',
            name: '옴천면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1634669.62012',
            x_coor: '933274.7323',
            name: '작천면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1620076.47729',
            x_coor: '935716.490723',
            name: '칠량면',
            code: '32'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1624107.32648',
        x_coor: '980295.739319',
        name: '고흥군',
        code: '350',
        subClassList: [
          {
            class: 'C',
            y_coor: '1623587.98413',
            x_coor: '979890.516907',
            name: '고흥읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1631894.94849',
            x_coor: '987162.742371',
            name: '과역면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1607311.35992',
            x_coor: '965564.006897',
            name: '금산면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1637187.11047',
            x_coor: '985332.302124',
            name: '남양면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1641895.12311',
            x_coor: '980244.161987',
            name: '대서면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1619233.21069',
            x_coor: '970442.489197',
            name: '도덕면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1615116.99109',
            x_coor: '966822.04541',
            name: '도양읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1612922.9621',
            x_coor: '983230.369385',
            name: '도화면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1642777.30731',
            x_coor: '984810.806396',
            name: '동강면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1612054.87012',
            x_coor: '996970.153809',
            name: '동일면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1628061.7865',
            x_coor: '979261.187378',
            name: '두원면',
            code: '44'
          },
          {
            class: 'C',
            y_coor: '1607761.84888',
            x_coor: '996239.902222',
            name: '봉래면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1623097.2041',
            x_coor: '995963.482727',
            name: '영남면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1628739.88153',
            x_coor: '988954.135925',
            name: '점암면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1619726.86267',
            x_coor: '985372.677124',
            name: '포두면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1620187.58313',
            x_coor: '976334.542297',
            name: '풍양면',
            code: '31'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1698524.86908',
        x_coor: '981083.441284',
        name: '곡성군',
        code: '320',
        subClassList: [
          {
            class: 'C',
            y_coor: '1695629.33209',
            x_coor: '970202.502319',
            name: '겸면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1700028.21667',
            x_coor: '985576.156921',
            name: '고달면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1698654.8161',
            x_coor: '980858.794983',
            name: '곡성읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1680639.60748',
            x_coor: '981767.569031',
            name: '목사동면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1693434.77008',
            x_coor: '973768.009399',
            name: '삼기면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1681999.35211',
            x_coor: '977597.054077',
            name: '석곡면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1697441.4671',
            x_coor: '983077.602173',
            name: '오곡면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1693682.92548',
            x_coor: '965565.610229',
            name: '오산면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1697647.57172',
            x_coor: '966859.415527',
            name: '옥과면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1700217.72351',
            x_coor: '973097.349426',
            name: '입면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1684012.66052',
            x_coor: '983535.17572',
            name: '죽곡면',
            code: '35'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1660660.44031',
        x_coor: '1017841.43292',
        name: '광양시',
        code: '060',
        subClassList: [
          {
            class: 'C',
            y_coor: '1660425.76611',
            x_coor: '1016287.4093',
            name: '골약동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1664276.4809',
            x_coor: '1007399.68921',
            name: '광양읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1663138.18811',
            x_coor: '1020267.90973',
            name: '광영동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1660342.00427',
            x_coor: '1020380.59991',
            name: '금호동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1680918.93311',
            x_coor: '1017413.93231',
            name: '다압면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1668503.99988',
            x_coor: '1007410.64471',
            name: '봉강면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1666086.0011',
            x_coor: '1018147.83191',
            name: '옥곡면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1669114.80029',
            x_coor: '1010882.27509',
            name: '옥룡면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1660697.89392',
            x_coor: '1018048.50403',
            name: '중마동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1669465.6825',
            x_coor: '1020040.12061',
            name: '진상면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1664860.82092',
            x_coor: '1023559.2395',
            name: '진월면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1660991.5437',
            x_coor: '1022786.4068',
            name: '태인동',
            code: '55'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1689690.29108',
        x_coor: '996609.337524',
        name: '구례군',
        code: '330',
        subClassList: [
          {
            class: 'C',
            y_coor: '1686991.25708',
            x_coor: '1003986.31262',
            name: '간전면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1696084.97467',
            x_coor: '994537.883972',
            name: '광의면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1689690.29108',
            x_coor: '996609.337524',
            name: '구례읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1691973.21252',
            x_coor: '998864.595276',
            name: '마산면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1688495.79291',
            x_coor: '999004.523315',
            name: '문척면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1702257.95929',
            x_coor: '994493.413818',
            name: '산동면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1695028.24091',
            x_coor: '993646.300293',
            name: '용방면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1689170.20868',
            x_coor: '1002386.97479',
            name: '토지면',
            code: '33'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1669265.54028',
        x_coor: '928002.513',
        name: '나주시',
        code: '040',
        subClassList: [
          {
            class: 'C',
            y_coor: '1661306.6095',
            x_coor: '918558.588684',
            name: '공산면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1671277.53',
            x_coor: '927517.117789',
            name: '금남동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1670903.27533',
            x_coor: '931904.64209',
            name: '금천면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1672570.58972',
            x_coor: '940096.681274',
            name: '남평읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1675917.4837',
            x_coor: '930002.866882',
            name: '노안면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1661586.94629',
            x_coor: '938598.967407',
            name: '다도면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1669716.12988',
            x_coor: '921296.153809',
            name: '다시면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1660915.01068',
            x_coor: '914525.807983',
            name: '동강면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1673719.46509',
            x_coor: '918279.156128',
            name: '문평면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1656888.8587',
            x_coor: '922504.949097',
            name: '반남면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1662833.61432',
            x_coor: '934647.72168',
            name: '봉황면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1669488.04578',
            x_coor: '935141.945359',
            name: '빛가람동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1671900.49188',
            x_coor: '936669.886719',
            name: '산포면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1671395.00751',
            x_coor: '928799.273071',
            name: '성북동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1658581.16852',
            x_coor: '931449.3526',
            name: '세지면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1669434.42108',
            x_coor: '929302.788086',
            name: '송월동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1667966.2605',
            x_coor: '927634.919617',
            name: '영강동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1667479.54272',
            x_coor: '928273.075073',
            name: '영산동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1664015.49432',
            x_coor: '924213.641113',
            name: '왕곡면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1665925.5474',
            x_coor: '925793.16486',
            name: '이창동',
            code: '60'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1702970.0105',
        x_coor: '953481.48468',
        name: '담양군',
        code: '310',
        subClassList: [
          {
            class: 'C',
            y_coor: '1692145.73468',
            x_coor: '952052.741211',
            name: '고서면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1705414.2807',
            x_coor: '956882.962708',
            name: '금성면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1687008.30487',
            x_coor: '957009.280273',
            name: '남면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1702886.23969',
            x_coor: '952901.427917',
            name: '담양읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1694990.4801',
            x_coor: '957886.287781',
            name: '대덕면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1697892.98969',
            x_coor: '944335.034485',
            name: '대전면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1699929.1557',
            x_coor: '957386.463928',
            name: '무정면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1697995.44971',
            x_coor: '950574.746216',
            name: '봉산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1700844.41492',
            x_coor: '948057.871887',
            name: '수북면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1707823.91229',
            x_coor: '953440.092896',
            name: '용면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1705096.50909',
            x_coor: '950447.67511',
            name: '월산면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1693830.11328',
            x_coor: '956250.429199',
            name: '창평면',
            code: '34'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1646924.79932',
        x_coor: '898692.845215',
        name: '목포시',
        code: '010',
        subClassList: [
          {
            class: 'C',
            y_coor: '1645530.45367',
            x_coor: '897879.35968',
            name: '대성동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1644605.83612',
            x_coor: '898635.478516',
            name: '동명동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1644203.45648',
            x_coor: '898195.161316',
            name: '만호동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1645033.44952',
            x_coor: '897637.598999',
            name: '목원동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1646709.96008',
            x_coor: '903743.303406',
            name: '부주동',
            code: '77'
          },
          {
            class: 'C',
            y_coor: '1646043.96289',
            x_coor: '902541.267212',
            name: '부흥동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1646409.10132',
            x_coor: '896595.431091',
            name: '북항동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1646624.74591',
            x_coor: '898167.296387',
            name: '산정동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1644529.0105',
            x_coor: '899515.9422',
            name: '삼학동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1648961.72949',
            x_coor: '901051.236084',
            name: '삼향동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1647117.0675',
            x_coor: '900690.831787',
            name: '상동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1645455.44849',
            x_coor: '901097.952271',
            name: '신흥동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1645003.68048',
            x_coor: '898594.585571',
            name: '연동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1647065.17133',
            x_coor: '897302.798706',
            name: '연산동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1646702.30811',
            x_coor: '902117.236023',
            name: '옥암동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1646269.47809',
            x_coor: '898627.871216',
            name: '용당1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1645552.8139',
            x_coor: '899354.27948',
            name: '용당2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1647437.31311',
            x_coor: '899339.461121',
            name: '용해동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1646932.9071',
            x_coor: '897656.028931',
            name: '원산동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1643786.63593',
            x_coor: '897548.38092',
            name: '유달동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1645501.00171',
            x_coor: '900276.396301',
            name: '이로동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1645603.97827',
            x_coor: '897098.741516',
            name: '죽교동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1646539.24152',
            x_coor: '901223.022217',
            name: '하당동',
            code: '72'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1666640.07507',
        x_coor: '907063.717529',
        name: '무안군',
        code: '420',
        subClassList: [
          {
            class: 'C',
            y_coor: '1669220.87488',
            x_coor: '899144.526184',
            name: '망운면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1660004.19427',
            x_coor: '908856.016296',
            name: '몽탄면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1666654.78192',
            x_coor: '906578.062683',
            name: '무안읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1648121.24408',
            x_coor: '903207.223206',
            name: '삼향읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1663653.02948',
            x_coor: '894393.070923',
            name: '운남면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1651216.25928',
            x_coor: '907692.878418',
            name: '일로읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1657884.20868',
            x_coor: '902147.854126',
            name: '청계면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1680147.85992',
            x_coor: '890140.439087',
            name: '해제면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1670111.82751',
            x_coor: '900765.287598',
            name: '현경면',
            code: '34'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1641943.87329',
        x_coor: '961526.455505',
        name: '보성군',
        code: '360',
        subClassList: [
          {
            class: 'C',
            y_coor: '1648374.20453',
            x_coor: '968161.495789',
            name: '겸백면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1644833.17828',
            x_coor: '960735.955994',
            name: '노동면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1640909.3479',
            x_coor: '969685.69043',
            name: '득량면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1659438.77191',
            x_coor: '970086.395996',
            name: '문덕면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1645237.25128',
            x_coor: '962271.757324',
            name: '미력면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1650281.70691',
            x_coor: '985523.406372',
            name: '벌교읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1641617.6797',
            x_coor: '961593.439037',
            name: '보성읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1655428.90411',
            x_coor: '966306.960999',
            name: '복내면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1635832.47992',
            x_coor: '956074.447876',
            name: '웅치면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1652923.8537',
            x_coor: '971389.843384',
            name: '율어면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1646018.95148',
            x_coor: '976917.989014',
            name: '조성면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1630601.26172',
            x_coor: '961985.624817',
            name: '회천면',
            code: '39'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1661759.00092',
        x_coor: '998839.483704',
        name: '순천시',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1657060.85529',
            x_coor: '985944.599121',
            name: '낙안면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1660730.49249',
            x_coor: '998901.655029',
            name: '남제동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1661497.31531',
            x_coor: '1000977.88458',
            name: '덕연동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1658945.76569',
            x_coor: '999420.552307',
            name: '도사동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1663231.48669',
            x_coor: '998429.904297',
            name: '매곡동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1653295.53571',
            x_coor: '995607.963379',
            name: '별량면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1664000.76648',
            x_coor: '998518.458923',
            name: '삼산동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1660477.60468',
            x_coor: '995908.020996',
            name: '상사면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1666643.57629',
            x_coor: '998944.79541',
            name: '서면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1664379.77008',
            x_coor: '978443.686523',
            name: '송광면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1668833.92133',
            x_coor: '989949.928284',
            name: '승주읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1663074.04413',
            x_coor: '1001900.0777',
            name: '왕조1동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1662270.10248',
            x_coor: '1002963.34021',
            name: '왕조2동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1657704.82471',
            x_coor: '979638.379028',
            name: '외서면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1677596.88092',
            x_coor: '989106.611694',
            name: '월등면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1661759.00092',
            x_coor: '998839.483704',
            name: '장천동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1661468.2395',
            x_coor: '998545.107971',
            name: '저전동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1661454.70813',
            x_coor: '999732.010193',
            name: '조곡동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1675779.18372',
            x_coor: '975846.794617',
            name: '주암면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1662350.16553',
            x_coor: '998761.771729',
            name: '중앙동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1660781.16772',
            x_coor: '999753.135193',
            name: '풍덕동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1657658.02051',
            x_coor: '1003444.41638',
            name: '해룡면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1661987.53668',
            x_coor: '998093.687622',
            name: '향동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1680119.79345',
            x_coor: '996271.87736',
            name: '황전면',
            code: '39'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1649377.72467',
        x_coor: '894973.978088',
        name: '신안군',
        code: '480',
        subClassList: [
          {
            class: 'C',
            y_coor: '1626085.57068',
            x_coor: '848984.476807',
            name: '도초면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1641237.14008',
            x_coor: '855997.383789',
            name: '비금면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1622094.6521',
            x_coor: '870535.502502',
            name: '신의면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1641041.3327',
            x_coor: '874118.702087',
            name: '안좌면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1648950.0351',
            x_coor: '873082.987305',
            name: '암태면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1652962.08447',
            x_coor: '891460.662598',
            name: '압해읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1677448.30627',
            x_coor: '873393.794678',
            name: '임자면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1655373.77808',
            x_coor: '867257.531616',
            name: '자은면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1628492.12628',
            x_coor: '876181.742981',
            name: '장산면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1668387.91589',
            x_coor: '875865.603394',
            name: '증도면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1674788.56812',
            x_coor: '882145.054321',
            name: '지도읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1644235.57971',
            x_coor: '875798.602295',
            name: '팔금면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1624599.67029',
            x_coor: '865820.481018',
            name: '하의면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1634032.20068',
            x_coor: '810128.344421',
            name: '흑산면',
            code: '36'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1640673.09967',
        x_coor: '1014853.25208',
        name: '여수시',
        code: '020',
        subClassList: [
          {
            class: 'C',
            y_coor: '1639257.70868',
            x_coor: '1020788.83801',
            name: '광림동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1637312.24933',
            x_coor: '1020076.0929',
            name: '국동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1612862.94489',
            x_coor: '1024468.13959',
            name: '남면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1637925.31549',
            x_coor: '1020259.20422',
            name: '대교동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1624817.39709',
            x_coor: '1020342.12347',
            name: '돌산읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1638637.93048',
            x_coor: '1022230.21039',
            name: '동문동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1641668.56769',
            x_coor: '1017805.33258',
            name: '둔덕동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1639938.17432',
            x_coor: '1022569.67902',
            name: '만덕동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1653349.29108',
            x_coor: '1019154.80762',
            name: '묘도동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1640029.05328',
            x_coor: '1018554.39368',
            name: '문수동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1641622.53949',
            x_coor: '1018703.9187',
            name: '미평동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1588005.95929',
            x_coor: '987181.330322',
            name: '삼산면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1647863.1781',
            x_coor: '1021146.09113',
            name: '삼일동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1638545.28448',
            x_coor: '1020678.40741',
            name: '서강동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1644248.25952',
            x_coor: '1012122.7793',
            name: '소라면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1640680.48029',
            x_coor: '1015902.1778',
            name: '시전동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1640673.09967',
            x_coor: '1014853.25208',
            name: '쌍봉동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1639582.81207',
            x_coor: '1019089.05463',
            name: '여서동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1642565.45929',
            x_coor: '1013949.80402',
            name: '여천동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1636881.55951',
            x_coor: '1019390.78839',
            name: '월호동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1654141.16748',
            x_coor: '1007186.66339',
            name: '율촌면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1643683.58832',
            x_coor: '1014915.77771',
            name: '주삼동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1638299.79871',
            x_coor: '1021800.2099',
            name: '중앙동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1639399.10773',
            x_coor: '1020948.89331',
            name: '충무동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1638971.88348',
            x_coor: '1022641.86102',
            name: '한려동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1634867.51031',
            x_coor: '1010392.17407',
            name: '화양면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1625205.71887',
            x_coor: '1012779.6991',
            name: '화정면',
            code: '35'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1698414.39148',
        x_coor: '910143.450195',
        name: '영광군',
        code: '440',
        subClassList: [
          {
            class: 'C',
            y_coor: '1694317.17969',
            x_coor: '904709.104675',
            name: '군남면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1696301.62592',
            x_coor: '906769.736694',
            name: '군서면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1690505.40051',
            x_coor: '876007.943909',
            name: '낙월면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1701049.95648',
            x_coor: '916129.937927',
            name: '대마면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1696158.5119',
            x_coor: '912959.569214',
            name: '묘량면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1699176.37329',
            x_coor: '901860.2948',
            name: '백수읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1707887.31927',
            x_coor: '904247.75708',
            name: '법성면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1690858.4209',
            x_coor: '909671.058228',
            name: '불갑면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1691978.54187',
            x_coor: '897328.140808',
            name: '염산면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1698499.13831',
            x_coor: '910132.263',
            name: '영광읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1711604.89191',
            x_coor: '904231.641479',
            name: '홍농읍',
            code: '13'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1645366.62708',
        x_coor: '926527.556702',
        name: '영암군',
        code: '410',
        subClassList: [
          {
            class: 'C',
            y_coor: '1643105.62988',
            x_coor: '922268.734924',
            name: '군서면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1652303.92212',
            x_coor: '931355.285095',
            name: '금정면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1647435.90851',
            x_coor: '926564.870911',
            name: '덕진면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1650395.2439',
            x_coor: '921710.58783',
            name: '도포면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1634271.36969',
            x_coor: '914991.058594',
            name: '미암면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1639542.28351',
            x_coor: '905648.596619',
            name: '삼호읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1640439.96649',
            x_coor: '916248.883423',
            name: '서호면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1653017.53992',
            x_coor: '918385.545715',
            name: '시종면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1655357.41608',
            x_coor: '926226.302673',
            name: '신북면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1645315.07269',
            x_coor: '926940.612305',
            name: '영암읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1637260.8299',
            x_coor: '914868.193115',
            name: '학산면',
            code: '38'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1591072.93988',
        x_coor: '931447.705688',
        name: '완도군',
        code: '460',
        subClassList: [
          {
            class: 'C',
            y_coor: '1600349.8067',
            x_coor: '936053.84613',
            name: '고금면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1599843.64032',
            x_coor: '921631.842285',
            name: '군외면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1604094.81348',
            x_coor: '960598.465576',
            name: '금당면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1595131.57727',
            x_coor: '956745.175598',
            name: '금일읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1577665.99432',
            x_coor: '907958.096191',
            name: '노화읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1575488.99707',
            x_coor: '914064.924011',
            name: '보길면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1593390.68951',
            x_coor: '953779.237183',
            name: '생일면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1576054.54449',
            x_coor: '921753.561096',
            name: '소안면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1593664.01367',
            x_coor: '938111.646973',
            name: '신지면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1600150.46393',
            x_coor: '944678.499023',
            name: '약산면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1591719.4187',
            x_coor: '930586.302002',
            name: '완도읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1576473.32129',
            x_coor: '940926.43103',
            name: '청산면',
            code: '35'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1700947.29773',
        x_coor: '934984.072388',
        name: '장성군',
        code: '450',
        subClassList: [
          {
            class: 'C',
            y_coor: '1694531.38849',
            x_coor: '937417.485291',
            name: '남면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1699022.53009',
            x_coor: '930784.72998',
            name: '동화면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1714997.92389',
            x_coor: '937245.040894',
            name: '북이면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1709008.3363',
            x_coor: '937081.965027',
            name: '북일면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1712581.4491',
            x_coor: '943670.244995',
            name: '북하면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1696140.81128',
            x_coor: '923756.38208',
            name: '삼계면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1693310.85651',
            x_coor: '922326.384583',
            name: '삼서면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1704533.97607',
            x_coor: '933400.392822',
            name: '서삼면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1701085.1217',
            x_coor: '935018.891479',
            name: '장성읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1697723.22089',
            x_coor: '939376.626221',
            name: '진원면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1699508.32111',
            x_coor: '933894.051086',
            name: '황룡면',
            code: '36'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1632094.26508',
        x_coor: '945680.61322',
        name: '장흥군',
        code: '380',
        subClassList: [
          {
            class: 'C',
            y_coor: '1618752.44952',
            x_coor: '948529.152405',
            name: '관산읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1611884.84052',
            x_coor: '943838.849976',
            name: '대덕읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1636718.2547',
            x_coor: '945375.552795',
            name: '부산면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1628542.86169',
            x_coor: '951796.942627',
            name: '안양면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1624678.71649',
            x_coor: '946284.913574',
            name: '용산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1645502.40112',
            x_coor: '939540.890503',
            name: '유치면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1639616.85309',
            x_coor: '953805.377319',
            name: '장동면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1642254.47449',
            x_coor: '951943.945801',
            name: '장평면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1632094.26508',
            x_coor: '945680.61322',
            name: '장흥읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1609874.97913',
            x_coor: '948539.391296',
            name: '회진면',
            code: '37'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1611017.09271',
        x_coor: '886468.168823',
        name: '진도군',
        code: '470',
        subClassList: [
          {
            class: 'C',
            y_coor: '1611340.50769',
            x_coor: '893768.898621',
            name: '고군면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1613832.32709',
            x_coor: '889113.399231',
            name: '군내면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1605718.81293',
            x_coor: '888235.927429',
            name: '의신면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1602149.70288',
            x_coor: '879595.509888',
            name: '임회면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1590181.27448',
            x_coor: '866323.034424',
            name: '조도면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1604343.51392',
            x_coor: '877539.795227',
            name: '지산면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1611017.09271',
            x_coor: '886468.168823',
            name: '진도읍',
            code: '11'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1674980.00848',
        x_coor: '910337.75293',
        name: '함평군',
        code: '430',
        subClassList: [
          {
            class: 'C',
            y_coor: '1680221.4375',
            x_coor: '918814.661316',
            name: '나산면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1675261.66608',
            x_coor: '911695.871399',
            name: '대동면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1683632.37952',
            x_coor: '902686.464111',
            name: '손불면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1684949.4989',
            x_coor: '908720.978516',
            name: '신광면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1668816.13428',
            x_coor: '910210.629028',
            name: '엄다면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1687540.73889',
            x_coor: '920988.728882',
            name: '월야면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1669512.25848',
            x_coor: '912176.110596',
            name: '학교면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1674980.00848',
            x_coor: '910337.75293',
            name: '함평읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1687817.4953',
            x_coor: '918185.968079',
            name: '해보면',
            code: '37'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1620307.51611',
        x_coor: '917371.046997',
        name: '해남군',
        code: '400',
        subClassList: [
          {
            class: 'C',
            y_coor: '1628194.24591',
            x_coor: '922974.865601',
            name: '계곡면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1625665.8819',
            x_coor: '914576.078186',
            name: '마산면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1623193.0965',
            x_coor: '891249.280701',
            name: '문내면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1608120.21307',
            x_coor: '924330.065002',
            name: '북일면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1601939.55371',
            x_coor: '919622.369507',
            name: '북평면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1628335.40051',
            x_coor: '903575.1427',
            name: '산이면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1614462.19531',
            x_coor: '918271.335327',
            name: '삼산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1597761.4715',
            x_coor: '909846.279114',
            name: '송지면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1619593.14709',
            x_coor: '921833.9375',
            name: '옥천면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1619378.33209',
            x_coor: '917365.741516',
            name: '해남읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1607741.87769',
            x_coor: '913067.042786',
            name: '현산면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1611265.01709',
            x_coor: '909579.883972',
            name: '화산면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1631356.72131',
            x_coor: '892595.118408',
            name: '화원면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1620828.50012',
            x_coor: '902452.719421',
            name: '황산면',
            code: '40'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1674507.39227',
        x_coor: '953178.465027',
        name: '화순군',
        code: '370',
        subClassList: [
          {
            class: 'C',
            y_coor: '1668113.00067',
            x_coor: '963125.048218',
            name: '남면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1666215.99731',
            x_coor: '950502.201599',
            name: '능주면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1666957.72632',
            x_coor: '946843.693481',
            name: '도곡면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1660499.05511',
            x_coor: '944914.576782',
            name: '도암면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1670647.19611',
            x_coor: '957904.118225',
            name: '동면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1675182.23511',
            x_coor: '966180.747803',
            name: '동복면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1685931.92511',
            x_coor: '966513.970093',
            name: '북면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1679564.73413',
            x_coor: '960909.145996',
            name: '이서면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1654918.66888',
            x_coor: '953269.338928',
            name: '이양면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1653641.77789',
            x_coor: '951588.301392',
            name: '청풍면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1661888.71252',
            x_coor: '950698.006531',
            name: '춘양면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1664892.4361',
            x_coor: '954246.295593',
            name: '한천면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1673995.4071',
            x_coor: '953000.878418',
            name: '화순읍',
            code: '11'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1817430',
    x_coor: '1112094.75',
    name: '경상북도',
    code: '37',
    subClassList: [
      {
        class: 'B',
        y_coor: '1759442.1557',
        x_coor: '1112134.04303',
        name: '경산시',
        code: '100',
        subClassList: [
          {
            class: 'C',
            y_coor: '1758181.21667',
            x_coor: '1111943.39349',
            name: '남부동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1756038.47607',
            x_coor: '1120848.51129',
            name: '남산면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1752947.04053',
            x_coor: '1110901.3714',
            name: '남천면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1758829.12372',
            x_coor: '1113300.92938',
            name: '동부동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1760357.4035',
            x_coor: '1112586.26831',
            name: '북부동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1758923.02893',
            x_coor: '1110925.03241',
            name: '서부1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1760309.81945',
            x_coor: '1110514.59001',
            name: '서부2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1761487.55048',
            x_coor: '1113771.87793',
            name: '압량면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1773006.28851',
            x_coor: '1120542.22571',
            name: '와촌면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1756080.89093',
            x_coor: '1124335.3584',
            name: '용성면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1759074.1947',
            x_coor: '1119476.83459',
            name: '자인면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1759655.49689',
            x_coor: '1111457.65491',
            name: '중방동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1759442.1557',
            x_coor: '1112134.04303',
            name: '중앙동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1764948.05487',
            x_coor: '1118821.41602',
            name: '진량읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1769215.05389',
            x_coor: '1118419.63232',
            name: '하양읍',
            code: '11'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1763558.82831',
        x_coor: '1155737.98901',
        name: '경주시',
        code: '020',
        subClassList: [
          {
            class: 'C',
            y_coor: '1758621.09369',
            x_coor: '1180850.42731',
            name: '감포읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1778231.21832',
            x_coor: '1159854.71979',
            name: '강동면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1762676.9787',
            x_coor: '1144687.87158',
            name: '건천읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1752005.2821',
            x_coor: '1153708.46179',
            name: '내남면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1763558.82831',
            x_coor: '1155737.98901',
            name: '동천동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1761273.93732',
            x_coor: '1161442.02979',
            name: '보덕동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1754701.37872',
            x_coor: '1162748.98822',
            name: '불국동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1752358.41748',
            x_coor: '1139882.68738',
            name: '산내면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1767204.95251',
            x_coor: '1140127.67078',
            name: '서면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1762084.11829',
            x_coor: '1151253.53223',
            name: '선도동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1762931.14807',
            x_coor: '1154175.21252',
            name: '성건동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1778420.28088',
            x_coor: '1155679.11102',
            name: '안강읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1744166.14911',
            x_coor: '1177414.67029',
            name: '양남면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1756710.29388',
            x_coor: '1175598.44623',
            name: '양북면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1748341.4151',
            x_coor: '1165311.0199',
            name: '외동읍',
            code: '14'
          },
          {
            class: 'C',
            y_coor: '1764443.51691',
            x_coor: '1155582.61603',
            name: '용강동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1761368.21991',
            x_coor: '1155317.07532',
            name: '월성동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1761955.61212',
            x_coor: '1154094.71661',
            name: '중부동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1767971.82611',
            x_coor: '1159849.95239',
            name: '천북면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1764657.5127',
            x_coor: '1153700.37018',
            name: '현곡면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1761019.28912',
            x_coor: '1154223.22711',
            name: '황남동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1765326.0871',
            x_coor: '1155198.18622',
            name: '황성동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1762514.89032',
            x_coor: '1154966.59161',
            name: '황오동',
            code: '68'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1748021.97772',
        x_coor: '1068993.80341',
        name: '고령군',
        code: '370',
        subClassList: [
          {
            class: 'C',
            y_coor: '1746089.36292',
            x_coor: '1076904.77698',
            name: '개진면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1759227.56091',
            x_coor: '1086201.12622',
            name: '다산면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1748415.125',
            x_coor: '1068410',
            name: '대가야읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1753908.15668',
            x_coor: '1066247.98108',
            name: '덕곡면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1750735.42633',
            x_coor: '1077748.11609',
            name: '성산면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1742874.24512',
            x_coor: '1067135.90747',
            name: '쌍림면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1742741.02649',
            x_coor: '1076204.73401',
            name: '우곡면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1752806.41791',
            x_coor: '1071450.8454',
            name: '운수면',
            code: '32'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1791722.92767',
        x_coor: '1075980.67548',
        name: '구미시',
        code: '050',
        subClassList: [
          {
            class: 'C',
            y_coor: '1801852.47711',
            x_coor: '1074464.71942',
            name: '고아읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1791720.22992',
            x_coor: '1078490.89758',
            name: '공단1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1789741.60272',
            x_coor: '1079614.25537',
            name: '공단2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1790092.86469',
            x_coor: '1077953.73859',
            name: '광평동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1811679.1601',
            x_coor: '1074593.32831',
            name: '도개면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1794041.37952',
            x_coor: '1074904.58618',
            name: '도량동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1807282.8847',
            x_coor: '1062652.08508',
            name: '무을면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1792212.81268',
            x_coor: '1079264.6283',
            name: '비산동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1797357.04053',
            x_coor: '1084012.94232',
            name: '산동면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1789537.21033',
            x_coor: '1077220.76782',
            name: '상모사곡동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1805378.94891',
            x_coor: '1071794.94897',
            name: '선산읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1792249.31152',
            x_coor: '1075339.02728',
            name: '선주원남동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1791599.6825',
            x_coor: '1076262.88312',
            name: '송정동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1791883.06549',
            x_coor: '1077325.66443',
            name: '신평1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1792139.33191',
            x_coor: '1077902.48401',
            name: '신평2동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1793726.41168',
            x_coor: '1083291.1546',
            name: '양포동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1811223.29053',
            x_coor: '1069926.75421',
            name: '옥성면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1792550.76709',
            x_coor: '1075585.37268',
            name: '원평1동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1792956.59747',
            x_coor: '1074305.37701',
            name: '원평2동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1789500.03949',
            x_coor: '1085142.68493',
            name: '인동동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1788385.80688',
            x_coor: '1078257.83752',
            name: '임오동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1792578.08612',
            x_coor: '1089580.11749',
            name: '장천면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1793929.0473',
            x_coor: '1076099.42767',
            name: '지산동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1790285.93231',
            x_coor: '1082698.99622',
            name: '진미동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1800666.0863',
            x_coor: '1080131.10101',
            name: '해평면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1791101.48511',
            x_coor: '1075098.14612',
            name: '형곡1동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1790241.34448',
            x_coor: '1075201.93103',
            name: '형곡2동',
            code: '60'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1805614.69751',
        x_coor: '1096400.46698',
        name: '군위군',
        code: '310',
        subClassList: [
          {
            class: 'C',
            y_coor: '1792580.61652',
            x_coor: '1116506.3244',
            name: '고로면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1805267.57349',
            x_coor: '1096036.14301',
            name: '군위읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1789948.69232',
            x_coor: '1104795.01758',
            name: '부계면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1792443.05652',
            x_coor: '1107527.94189',
            name: '산성면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1806841.26068',
            x_coor: '1087624.51202',
            name: '소보면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1800389.2417',
            x_coor: '1104454.3584',
            name: '우보면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1798318.77332',
            x_coor: '1109284.7005',
            name: '의흥면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1796080.75531',
            x_coor: '1097635.42877',
            name: '효령면',
            code: '32'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1793826.68988',
        x_coor: '1055209.79327',
        name: '김천시',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1802111.13708',
            x_coor: '1061221.41718',
            name: '감문면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1785631.24451',
            x_coor: '1056330.91443',
            name: '감천면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1796956.88611',
            x_coor: '1061708.4696',
            name: '개령면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1781885.31207',
            x_coor: '1049345.20551',
            name: '구성면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1790323.56012',
            x_coor: '1062061.33221',
            name: '남면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1790105.79907',
            x_coor: '1060521.1723',
            name: '농소면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1792092.22412',
            x_coor: '1053031.75049',
            name: '대곡동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1769126.1925',
            x_coor: '1042299.70258',
            name: '대덕면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1793826.68988',
            x_coor: '1055209.79327',
            name: '대신동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1792069.00592',
            x_coor: '1046986.77728',
            name: '대항면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1793973.94391',
            x_coor: '1050403.83209',
            name: '봉산면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1777147.88489',
            x_coor: '1041022.33368',
            name: '부항면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1796129.48108',
            x_coor: '1067765.79132',
            name: '아포읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1790565.67871',
            x_coor: '1056106.95178',
            name: '양금동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1798336.77667',
            x_coor: '1055638.03662',
            name: '어모면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1792202.55353',
            x_coor: '1061373.85663',
            name: '율곡동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1791883.16351',
            x_coor: '1056496.59131',
            name: '자산동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1782166.68451',
            x_coor: '1053964.66748',
            name: '조마면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1767398.62732',
            x_coor: '1048301.06122',
            name: '증산면',
            code: '44'
          },
          {
            class: 'C',
            y_coor: '1776575.80591',
            x_coor: '1047474.85992',
            name: '지례면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1791605.93768',
            x_coor: '1058002.14612',
            name: '지좌동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1792201.56952',
            x_coor: '1054847.3056',
            name: '평화남산동',
            code: '61'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1843406.71851',
        x_coor: '1061436.40558',
        name: '문경시',
        code: '090',
        subClassList: [
          {
            class: 'C',
            y_coor: '1849568.09491',
            x_coor: '1050240.64288',
            name: '가은읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1844899.03491',
            x_coor: '1045051.52191',
            name: '농암면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1864227.49152',
            x_coor: '1072730.50671',
            name: '동로면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1855137.9353',
            x_coor: '1055089.64948',
            name: '마성면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1865646.62207',
            x_coor: '1058714.75238',
            name: '문경읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1851170.71527',
            x_coor: '1067875.73669',
            name: '산북면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1846255.82928',
            x_coor: '1067850.66748',
            name: '산양면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1842949.3327',
            x_coor: '1065841.00317',
            name: '영순면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1844758.2265',
            x_coor: '1062407.76868',
            name: '점촌1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1843804.31348',
            x_coor: '1062283.96057',
            name: '점촌2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1845249.9693',
            x_coor: '1063186.88123',
            name: '점촌3동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1845515.14447',
            x_coor: '1061021.3288',
            name: '점촌4동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1843406.71851',
            x_coor: '1061436.40558',
            name: '점촌5동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1848382.10413',
            x_coor: '1063106.86578',
            name: '호계면',
            code: '33'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1877910.21588',
        x_coor: '1109819.93048',
        name: '봉화군',
        code: '410',
        subClassList: [
          {
            class: 'C',
            y_coor: '1874309.8963',
            x_coor: '1124805.76349',
            name: '명호면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1887016.84253',
            x_coor: '1109997.84253',
            name: '물야면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1880039.52087',
            x_coor: '1122664.92609',
            name: '법전면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1877211.48529',
            x_coor: '1117453.37122',
            name: '봉성면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1877910.21588',
            x_coor: '1109819.93048',
            name: '봉화읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1871352.29468',
            x_coor: '1111927.86719',
            name: '상운면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1895601.16608',
            x_coor: '1139181.10651',
            name: '석포면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1883198.18927',
            x_coor: '1133852.6507',
            name: '소천면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1869644.71149',
            x_coor: '1130388.4126',
            name: '재산면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1882795.6405',
            x_coor: '1125998.98199',
            name: '춘양면',
            code: '34'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1823914.86133',
        x_coor: '1059086.07581',
        name: '상주시',
        code: '080',
        subClassList: [
          {
            class: 'C',
            y_coor: '1825156.93469',
            x_coor: '1059553.22278',
            name: '계림동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1835143.61591',
            x_coor: '1058974.71692',
            name: '공검면',
            code: '45'
          },
          {
            class: 'C',
            y_coor: '1809734.81531',
            x_coor: '1053204.84991',
            name: '공성면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1819983.20831',
            x_coor: '1067109.75018',
            name: '낙동면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1824415.98309',
            x_coor: '1058507.23822',
            name: '남원동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1824006.19232',
            x_coor: '1050835.27698',
            name: '내서면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1824639.49353',
            x_coor: '1059991.83502',
            name: '동문동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1824407.03607',
            x_coor: '1060046.98907',
            name: '동성동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1813738.48853',
            x_coor: '1041237.78003',
            name: '모동면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1816220.37329',
            x_coor: '1041284.58917',
            name: '모서면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1825919.53491',
            x_coor: '1058962.75739',
            name: '북문동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1830092.3725',
            x_coor: '1063484.78351',
            name: '사벌면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1823104.35553',
            x_coor: '1059176.71808',
            name: '신흥동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1817942.11267',
            x_coor: '1052884.18597',
            name: '외남면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1831471.41632',
            x_coor: '1054481.69751',
            name: '외서면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1837263.47491',
            x_coor: '1051164.40509',
            name: '은척면',
            code: '44'
          },
          {
            class: 'C',
            y_coor: '1842599.55072',
            x_coor: '1057754.42609',
            name: '이안면',
            code: '46'
          },
          {
            class: 'C',
            y_coor: '1825695.10852',
            x_coor: '1069156.96777',
            name: '중동면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1815876.20892',
            x_coor: '1056590.7832',
            name: '청리면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1841535.76971',
            x_coor: '1060766.28589',
            name: '함창읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1827927.09991',
            x_coor: '1036341.89368',
            name: '화남면',
            code: '47'
          },
          {
            class: 'C',
            y_coor: '1821439.11493',
            x_coor: '1040730.55518',
            name: '화동면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1840692.94611',
            x_coor: '1037334.2002',
            name: '화북면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1827664.48572',
            x_coor: '1040450.46722',
            name: '화서면',
            code: '41'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1769454.91827',
        x_coor: '1070644.3949',
        name: '성주군',
        code: '380',
        subClassList: [
          {
            class: 'C',
            y_coor: '1765518.45392',
            x_coor: '1060132.01947',
            name: '가천면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1769427.12927',
            x_coor: '1060965.58331',
            name: '금수면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1768433.50568',
            x_coor: '1065755.27173',
            name: '대가면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1772661.08032',
            x_coor: '1064610.2641',
            name: '벽진면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1767474.07373',
            x_coor: '1076864.8988',
            name: '선남면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1769454.91827',
            x_coor: '1070644.3949',
            name: '성주읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1759827.70093',
            x_coor: '1062533.56091',
            name: '수륜면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1760302.3739',
            x_coor: '1075580.97919',
            name: '용암면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1772408.53833',
            x_coor: '1073575.80267',
            name: '월항면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1775597.6087',
            x_coor: '1068796.22601',
            name: '초전면',
            code: '38'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1841893.66748',
        x_coor: '1110021.47498',
        name: '안동시',
        code: '040',
        subClassList: [
          {
            class: 'C',
            y_coor: '1839693.97772',
            x_coor: '1109828.53632',
            name: '강남동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1829615.29468',
            x_coor: '1124955.17169',
            name: '길안면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1837246.2807',
            x_coor: '1113688.57208',
            name: '남선면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1836874.01868',
            x_coor: '1106542.02771',
            name: '남후면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1861288.51068',
            x_coor: '1113711.83191',
            name: '녹전면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1861261.41071',
            x_coor: '1119036.86243',
            name: '도산면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1843433.26331',
            x_coor: '1110475.60138',
            name: '명륜동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1854792.66669',
            x_coor: '1107416.33429',
            name: '북후면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1841417.50592',
            x_coor: '1108943.91809',
            name: '서구동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1847196.99353',
            x_coor: '1104075.59589',
            name: '서후면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1842061.20007',
            x_coor: '1106858.2926',
            name: '송하동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1843478.63251',
            x_coor: '1108638.11279',
            name: '안기동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1852379.35431',
            x_coor: '1123794.40057',
            name: '예안면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1841089.57971',
            x_coor: '1107543.23761',
            name: '옥동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1847254.69269',
            x_coor: '1113251.0188',
            name: '와룡면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1840887.31708',
            x_coor: '1111826.73853',
            name: '용상동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1831478.66949',
            x_coor: '1103880.04633',
            name: '일직면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1842162.60052',
            x_coor: '1126840.52258',
            name: '임동면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1837160.84888',
            x_coor: '1119163.97198',
            name: '임하면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1841477.88489',
            x_coor: '1110758.01538',
            name: '중구동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1841064.08929',
            x_coor: '1108634.01031',
            name: '태화동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1841945.88409',
            x_coor: '1108546.33771',
            name: '평화동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1843016.33832',
            x_coor: '1095911.8606',
            name: '풍산읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1840298.21173',
            x_coor: '1090075.57562',
            name: '풍천면',
            code: '34'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1825784.42889',
        x_coor: '1167245.99878',
        name: '영덕군',
        code: '350',
        subClassList: [
          {
            class: 'C',
            y_coor: '1819903.2323',
            x_coor: '1168549.49078',
            name: '강구면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1811469.3089',
            x_coor: '1168159.46552',
            name: '남정면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1823907.9693',
            x_coor: '1161708.80072',
            name: '달산면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1846641.4447',
            x_coor: '1170895.3913',
            name: '병곡면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1825784.42889',
            x_coor: '1167245.99878',
            name: '영덕읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1839448.61792',
            x_coor: '1170726.15332',
            name: '영해면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1829348.45471',
            x_coor: '1159685.89941',
            name: '지품면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1840313.63129',
            x_coor: '1165435.09631',
            name: '창수면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1836288.67212',
            x_coor: '1171424.3783',
            name: '축산면',
            code: '35'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1853297.23187',
        x_coor: '1144096.92212',
        name: '영양군',
        code: '340',
        subClassList: [
          {
            class: 'C',
            y_coor: '1841261.30029',
            x_coor: '1145400.99561',
            name: '석보면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1864364.63989',
            x_coor: '1151958.64569',
            name: '수비면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1853339.38953',
            x_coor: '1144257.6319',
            name: '영양읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1857276.80713',
            x_coor: '1145490.38037',
            name: '일월면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1845118.03992',
            x_coor: '1142262.00018',
            name: '입암면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1852612.16449',
            x_coor: '1139631.32037',
            name: '청기면',
            code: '32'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1868087.9281',
        x_coor: '1100265.08533',
        name: '영주시',
        code: '060',
        subClassList: [
          {
            class: 'C',
            y_coor: '1869533.42511',
            x_coor: '1099703.21503',
            name: '가흥1동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1870710.37708',
            x_coor: '1099137.46771',
            name: '가흥2동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1884242.06891',
            x_coor: '1099671.76123',
            name: '단산면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1864375.39111',
            x_coor: '1100883.23297',
            name: '문수면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1874174.0575',
            x_coor: '1091369.5451',
            name: '봉현면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1887338.31787',
            x_coor: '1102723.02161',
            name: '부석면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1870582.06927',
            x_coor: '1100621.89661',
            name: '상망동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1880274.11072',
            x_coor: '1095775.83142',
            name: '순흥면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1872468.72552',
            x_coor: '1094209.24799',
            name: '안정면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1870406.07629',
            x_coor: '1099868.35663',
            name: '영주1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1870019.99734',
            x_coor: '1099768.34277',
            name: '영주2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1869916.28851',
            x_coor: '1103118.8512',
            name: '이산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1864622.62451',
            x_coor: '1096263.61572',
            name: '장수면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1861198.0293',
            x_coor: '1104978.43451',
            name: '평은면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1874826.20929',
            x_coor: '1091473.34662',
            name: '풍기읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1870120.01453',
            x_coor: '1100804.75909',
            name: '하망동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1869519.2561',
            x_coor: '1100775.78009',
            name: '휴천1동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1868576.97827',
            x_coor: '1100058.5174',
            name: '휴천2동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1869435.5025',
            x_coor: '1100414.26831',
            name: '휴천3동',
            code: '61'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1776121.60413',
        x_coor: '1129701.98212',
        name: '영천시',
        code: '070',
        subClassList: [
          {
            class: 'C',
            y_coor: '1779421.26489',
            x_coor: '1139333.44781',
            name: '고경면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1771616.58252',
            x_coor: '1124270.91418',
            name: '금호읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1772595.48651',
            x_coor: '1129448.65698',
            name: '남부동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1765276.38031',
            x_coor: '1125897.57568',
            name: '대창면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1776267.0625',
            x_coor: '1130059.63489',
            name: '동부동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1769798.83472',
            x_coor: '1136164.81549',
            name: '북안면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1775036.48889',
            x_coor: '1128145.77789',
            name: '서부동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1783931.11749',
            x_coor: '1116179.53601',
            name: '신녕면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1775192.81329',
            x_coor: '1129809.16101',
            name: '완산동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1781476.2323',
            x_coor: '1132810.47168',
            name: '임고면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1787900.80408',
            x_coor: '1136711.77521',
            name: '자양면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1776127.79132',
            x_coor: '1128910.63928',
            name: '중앙동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1778067.28931',
            x_coor: '1119255.21448',
            name: '청통면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1785534.3797',
            x_coor: '1125087.37122',
            name: '화남면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1791076.20709',
            x_coor: '1127755.30328',
            name: '화북면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1781239.18488',
            x_coor: '1121850.4024',
            name: '화산면',
            code: '33'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1851507.29071',
        x_coor: '1085171.82819',
        name: '예천군',
        code: '400',
        subClassList: [
          {
            class: 'C',
            y_coor: '1858616.10413',
            x_coor: '1091661.60931',
            name: '감천면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1845967.34668',
            x_coor: '1077490.83051',
            name: '개포면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1852403.92389',
            x_coor: '1090341.28101',
            name: '보문면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1851417.6723',
            x_coor: '1085158.50238',
            name: '예천읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1845928.99628',
            x_coor: '1069525.81622',
            name: '용궁면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1855080.56012',
            x_coor: '1081386.23163',
            name: '용문면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1848983.60968',
            x_coor: '1079576.07037',
            name: '유천면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1861207.788',
            x_coor: '1084122.845',
            name: '은풍면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1839320.36151',
            x_coor: '1079688.9577',
            name: '지보면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1835069.1037',
            x_coor: '1071549.51868',
            name: '풍양면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1844510.46692',
            x_coor: '1086631.72302',
            name: '호명면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1864091.7599',
            x_coor: '1082001.0741',
            name: '효자면',
            code: '42'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1948634.15509',
        x_coor: '1300974.23718',
        name: '울릉군',
        code: '430',
        subClassList: [
          {
            class: 'C',
            y_coor: '1954843.2403',
            x_coor: '1298134.25262',
            name: '북면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1946690.4599',
            x_coor: '1295013.07782',
            name: '서면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1948634.15509',
            x_coor: '1300974.23718',
            name: '울릉읍',
            code: '11'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1889974.68689',
        x_coor: '1169125.33051',
        name: '울진군',
        code: '420',
        subClassList: [
          {
            class: 'C',
            y_coor: '1886607.1319',
            x_coor: '1168657.03809',
            name: '근남면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1884547',
            x_coor: '1152061.875',
            name: '금강송면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1868449.60913',
            x_coor: '1174051.6098',
            name: '기성면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1875496',
            x_coor: '1165152.875',
            name: '매화면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1902304.24988',
            x_coor: '1166457.72858',
            name: '북면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1860040.00592',
            x_coor: '1164795.32727',
            name: '온정면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1889974.68689',
            x_coor: '1169125.33051',
            name: '울진읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1897421.7019',
            x_coor: '1170913.36133',
            name: '죽변면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1860648.6485',
            x_coor: '1173355.27423',
            name: '평해읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1855150.23169',
            x_coor: '1173291.21979',
            name: '후포면',
            code: '38'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1817942.12671',
        x_coor: '1107424.40979',
        name: '의성군',
        code: '320',
        subClassList: [
          {
            class: 'C',
            y_coor: '1804797.88568',
            x_coor: '1110056.67297',
            name: '가음면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1817065.59167',
            x_coor: '1083693.46948',
            name: '구천면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1807772.40887',
            x_coor: '1106099.8075',
            name: '금성면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1828419.9469',
            x_coor: '1076491.22949',
            name: '다인면',
            code: '44'
          },
          {
            class: 'C',
            y_coor: '1820196.68372',
            x_coor: '1079083.5061',
            name: '단밀면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1821494.46411',
            x_coor: '1081149.36328',
            name: '단북면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1825588.2019',
            x_coor: '1105273.62451',
            name: '단촌면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1812027.25311',
            x_coor: '1096642.90741',
            name: '봉양면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1816009.84351',
            x_coor: '1088868.73547',
            name: '비안면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1812879.88788',
            x_coor: '1115626.54462',
            name: '사곡면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1831138.10809',
            x_coor: '1089813.13263',
            name: '신평면',
            code: '45'
          },
          {
            class: 'C',
            y_coor: '1821122.25531',
            x_coor: '1084328.9751',
            name: '안계면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1826370.77032',
            x_coor: '1086201.22803',
            name: '안사면',
            code: '47'
          },
          {
            class: 'C',
            y_coor: '1820468.63812',
            x_coor: '1097249.71771',
            name: '안평면',
            code: '46'
          },
          {
            class: 'C',
            y_coor: '1822498.29688',
            x_coor: '1117484.70941',
            name: '옥산면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1817942.12671',
            x_coor: '1107424.40979',
            name: '의성읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1825918.72211',
            x_coor: '1113667.03101',
            name: '점곡면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1805281.04089',
            x_coor: '1117871.66803',
            name: '춘산면',
            code: '35'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1739689.95428',
        x_coor: '1111713.47571',
        name: '청도군',
        code: '360',
        subClassList: [
          {
            class: 'C',
            y_coor: '1739040.78351',
            x_coor: '1104941.47968',
            name: '각남면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1743998.0791',
            x_coor: '1098562.02081',
            name: '각북면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1744331.4043',
            x_coor: '1125992.89789',
            name: '금천면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1742053.50031',
            x_coor: '1122691.2168',
            name: '매전면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1747510.27753',
            x_coor: '1127823.84839',
            name: '운문면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1741413.82013',
            x_coor: '1105950.44489',
            name: '이서면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1739516.59448',
            x_coor: '1112376.81628',
            name: '청도읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1738656.68073',
            x_coor: '1101255.59839',
            name: '풍각면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1739969.96411',
            x_coor: '1109190.53308',
            name: '화양읍',
            code: '11'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1827650.31628',
        x_coor: '1139564.9801',
        name: '청송군',
        code: '330',
        subClassList: [
          {
            class: 'C',
            y_coor: '1817488.12512',
            x_coor: '1140292.67023',
            name: '부남면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1818997.13989',
            x_coor: '1148887.0672',
            name: '부동면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1811171.38507',
            x_coor: '1131107.21948',
            name: '안덕면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1837973.13849',
            x_coor: '1138475.05621',
            name: '진보면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1827414.27893',
            x_coor: '1139538.50348',
            name: '청송읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1830590.02429',
            x_coor: '1137793.4491',
            name: '파천면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1811437.64471',
            x_coor: '1136215.68182',
            name: '현동면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1809641.69489',
            x_coor: '1125379.97638',
            name: '현서면',
            code: '34'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1778018.61969',
        x_coor: '1081271.9411',
        name: '칠곡군',
        code: '390',
        subClassList: [
          {
            class: 'C',
            y_coor: '1788168.05988',
            x_coor: '1093534.64752',
            name: '가산면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1776988.39807',
            x_coor: '1079572.31909',
            name: '기산면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1776876.5293',
            x_coor: '1094968.54761',
            name: '동명면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1785440.76971',
            x_coor: '1075914.60553',
            name: '북삼읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1784223.41992',
            x_coor: '1081905.37018',
            name: '석적읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1782110.20551',
            x_coor: '1077810.88202',
            name: '약목면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1777263.51929',
            x_coor: '1080920.0271',
            name: '왜관읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1773719.0531',
            x_coor: '1089376.38757',
            name: '지천면',
            code: '31'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1780593.85828',
        x_coor: '1167569.2746',
        name: '포항시 남구',
        code: '011',
        subClassList: [
          {
            class: 'C',
            y_coor: '1778416.01691',
            x_coor: '1184461.43451',
            name: '구룡포읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1776240.43213',
            x_coor: '1167708.44659',
            name: '대송면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1781872.66553',
            x_coor: '1166118.05847',
            name: '대이동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1778596.61932',
            x_coor: '1174900.00909',
            name: '동해면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1781276.54791',
            x_coor: '1167348.1189',
            name: '상대동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1783298.05292',
            x_coor: '1168979.66968',
            name: '송도동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1778774.67511',
            x_coor: '1166235.46368',
            name: '연일읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1775742.10992',
            x_coor: '1172662.10168',
            name: '오천읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1768402.4259',
            x_coor: '1179803.59857',
            name: '장기면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1778945.5293',
            x_coor: '1171011.2666',
            name: '제철동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1779520.45691',
            x_coor: '1171772.27893',
            name: '청림동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1782334.53552',
            x_coor: '1168627.43573',
            name: '해도동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1789055.97668',
            x_coor: '1185085.83282',
            name: '호미곶면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1780571.76367',
            x_coor: '1164999.9668',
            name: '효곡동',
            code: '58'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1784388.44769',
        x_coor: '1168059.26038',
        name: '포항시 북구',
        code: '012',
        subClassList: [
          {
            class: 'C',
            y_coor: '1787515.24792',
            x_coor: '1154010.68512',
            name: '기계면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1793677.30811',
            x_coor: '1149947.48218',
            name: '기북면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1786522.14569',
            x_coor: '1169329.1933',
            name: '두호동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1805115.47931',
            x_coor: '1166887.9632',
            name: '송라면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1793978.4223',
            x_coor: '1158619.77448',
            name: '신광면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1782523.03448',
            x_coor: '1166723.50201',
            name: '양학동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1783984.28088',
            x_coor: '1167352.82373',
            name: '용흥동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1785805.4765',
            x_coor: '1167688.0401',
            name: '우창동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1788915.39929',
            x_coor: '1170934.1275',
            name: '장량동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1783273.57751',
            x_coor: '1167947.2644',
            name: '죽도동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1806615.73608',
            x_coor: '1154097.03278',
            name: '죽장면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1785228.03748',
            x_coor: '1168311.1084',
            name: '중앙동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1801833.6629',
            x_coor: '1165240.00391',
            name: '청하면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1787557.42328',
            x_coor: '1170916.28931',
            name: '환여동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1791586.55768',
            x_coor: '1165775.7016',
            name: '흥해읍',
            code: '11'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1694248.8335',
    x_coor: '1108454.7074',
    name: '경상남도',
    code: '38',
    subClassList: [
      {
        class: 'B',
        y_coor: '1654536.1059',
        x_coor: '1102461.06567',
        name: '거제시',
        code: '090',
        subClassList: [
          {
            class: 'C',
            y_coor: '1651249.98511',
            x_coor: '1099685.46429',
            name: '거제면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1654779.67609',
            x_coor: '1102653.58807',
            name: '고현동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1638088.77307',
            x_coor: '1101634.00159',
            name: '남부면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1654524.29272',
            x_coor: '1112823.86572',
            name: '능포동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1648005.00653',
            x_coor: '1101338.79309',
            name: '동부면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1649603.76788',
            x_coor: '1091900.64221',
            name: '둔덕면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1658712.78229',
            x_coor: '1093374.94299',
            name: '사등면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1653190.95789',
            x_coor: '1104006.61249',
            name: '상문동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1655418.3009',
            x_coor: '1104588.17468',
            name: '수양동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1653016.96667',
            x_coor: '1108963.58441',
            name: '아주동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1658364.18451',
            x_coor: '1105648.88379',
            name: '연초면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1655786.77271',
            x_coor: '1108983.15491',
            name: '옥포1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1656400.26288',
            x_coor: '1108569.28149',
            name: '옥포2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1649001.67572',
            x_coor: '1110019.74469',
            name: '일운면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1666372.30988',
            x_coor: '1107902.62811',
            name: '장목면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1653207.1855',
            x_coor: '1112165.1827',
            name: '장승포동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1655531.19971',
            x_coor: '1101378.2655',
            name: '장평동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1665703.72748',
            x_coor: '1103069.62469',
            name: '하청면',
            code: '38'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1743459.61047',
        x_coor: '1037056.2796',
        name: '거창군',
        code: '390',
        subClassList: [
          {
            class: 'C',
            y_coor: '1751933.40332',
            x_coor: '1044586.82959',
            name: '가북면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1746200.22449',
            x_coor: '1046558.7851',
            name: '가조면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1743599.44171',
            x_coor: '1036538.99451',
            name: '거창읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1757658.40552',
            x_coor: '1033552.42578',
            name: '고제면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1738638.8205',
            x_coor: '1037134.74792',
            name: '남상면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1741348.46008',
            x_coor: '1040153.32471',
            name: '남하면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1745051.17389',
            x_coor: '1032087.24622',
            name: '마리면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1753492.26453',
            x_coor: '1028854.67767',
            name: '북상면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1730279.7207',
            x_coor: '1038529.86542',
            name: '신원면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1756629.56769',
            x_coor: '1037743.60193',
            name: '웅양면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1750414.56128',
            x_coor: '1030119.6806',
            name: '위천면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1750392.88812',
            x_coor: '1037373.6474',
            name: '주상면',
            code: '31'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1664550.08252',
        x_coor: '1075066.4245',
        name: '고성군',
        code: '340',
        subClassList: [
          {
            class: 'C',
            y_coor: '1678441.89447',
            x_coor: '1069175.33508',
            name: '개천면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1666685.41492',
            x_coor: '1082524.45563',
            name: '거류면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1664550.08252',
            x_coor: '1075066.4245',
            name: '고성읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1677302.43347',
            x_coor: '1076117.84851',
            name: '구만면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1669457.05511',
            x_coor: '1072852.11908',
            name: '대가면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1672213.1225',
            x_coor: '1084007.7063',
            name: '동해면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1673665.4765',
            x_coor: '1076294.89331',
            name: '마암면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1660502.31628',
            x_coor: '1070667.72382',
            name: '삼산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1667418.8045',
            x_coor: '1062638.8316',
            name: '상리면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1679435.81348',
            x_coor: '1067224.54523',
            name: '영오면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1673452.2713',
            x_coor: '1064335.97699',
            name: '영현면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1659499.98132',
            x_coor: '1056887.11371',
            name: '하이면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1661175.69629',
            x_coor: '1063228.06342',
            name: '하일면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1674263.02173',
            x_coor: '1079614.79279',
            name: '회화면',
            code: '40'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1693463.28528',
        x_coor: '1126434.67249',
        name: '김해시',
        code: '070',
        subClassList: [
          {
            class: 'C',
            y_coor: '1694163.18732',
            x_coor: '1124170.362',
            name: '내외동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1695099.57489',
            x_coor: '1134681.27551',
            name: '대동면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1694402.42352',
            x_coor: '1125888.51093',
            name: '동상동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1693463.28528',
            x_coor: '1126434.67249',
            name: '부원동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1697171.35608',
            x_coor: '1124403.0451',
            name: '북부동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1692790.74707',
            x_coor: '1129845.25629',
            name: '불암동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1695181.25128',
            x_coor: '1128058.62622',
            name: '삼안동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1702291.04651',
            x_coor: '1130041.78131',
            name: '상동면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1704458.39612',
            x_coor: '1122627.63171',
            name: '생림면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1690301.5675',
            x_coor: '1119342.72382',
            name: '장유1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1689860.06207',
            x_coor: '1118138.66949',
            name: '장유2동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1687697.33569',
            x_coor: '1118921.85931',
            name: '장유3동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1694188.57373',
            x_coor: '1121080.3252',
            name: '주촌면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1695562.53772',
            x_coor: '1113513.94647',
            name: '진례면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1701673.61768',
            x_coor: '1112125.39301',
            name: '진영읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1692806.53131',
            x_coor: '1124769.31372',
            name: '칠산서부동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1703565.93372',
            x_coor: '1118373.58319',
            name: '한림면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1693511.98273',
            x_coor: '1127385.95862',
            name: '활천동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1693778.31073',
            x_coor: '1125420.427',
            name: '회현동',
            code: '52'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1649300.71753',
        x_coor: '1035901.01819',
        name: '남해군',
        code: '350',
        subClassList: [
          {
            class: 'C',
            y_coor: '1655721.2077',
            x_coor: '1034193.302',
            name: '고현면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1641951.05511',
            x_coor: '1035420.22827',
            name: '남면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1649300.71753',
            x_coor: '1035901.01819',
            name: '남해읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1635425.52869',
            x_coor: '1049992.01471',
            name: '미조면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1648599.49048',
            x_coor: '1045809.64069',
            name: '삼동면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1636709.92273',
            x_coor: '1044441.0683',
            name: '상주면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1646216.59833',
            x_coor: '1030943.99622',
            name: '서면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1658973.5285',
            x_coor: '1037813.18842',
            name: '설천면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1645082.44989',
            x_coor: '1041567.56183',
            name: '이동면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1651578.82928',
            x_coor: '1046814.85901',
            name: '창선면',
            code: '39'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1723781.7901',
        x_coor: '1113016.6192',
        name: '밀양시',
        code: '080',
        subClassList: [
          {
            class: 'C',
            y_coor: '1721058.1983',
            x_coor: '1114720.33069',
            name: '가곡동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1724622.78271',
            x_coor: '1114002.8858',
            name: '교동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1723071.11047',
            x_coor: '1113027.30798',
            name: '내이동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1722703.40833',
            x_coor: '1113763.26898',
            name: '내일동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1725240.7135',
            x_coor: '1124771.3913',
            name: '단장면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1720042.06689',
            x_coor: '1104459.55933',
            name: '무안면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1724617.24689',
            x_coor: '1111516.66882',
            name: '부북면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1732898.28448',
            x_coor: '1125106.91827',
            name: '산내면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1723767.54669',
            x_coor: '1119253.00671',
            name: '산외면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1711949.11432',
            x_coor: '1121480.69873',
            name: '삼랑진읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1721523.32813',
            x_coor: '1113671.16699',
            name: '삼문동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1717677.44012',
            x_coor: '1113762.03339',
            name: '상남면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1729270.43872',
            x_coor: '1114500.59991',
            name: '상동면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1728685.22729',
            x_coor: '1101920.52368',
            name: '청도면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1714608.19629',
            x_coor: '1106479.4599',
            name: '초동면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1709534.4483',
            x_coor: '1110008.92633',
            name: '하남읍',
            code: '12'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1667788.07953',
        x_coor: '1051489.70819',
        name: '사천시',
        code: '060',
        subClassList: [
          {
            class: 'C',
            y_coor: '1679734.14551',
            x_coor: '1040239.61218',
            name: '곤명면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1673703.88171',
            x_coor: '1041916.47821',
            name: '곤양면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1664080.48187',
            x_coor: '1051398.88361',
            name: '남양동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1659731.96149',
            x_coor: '1052845.51099',
            name: '동서금동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1659462.20313',
            x_coor: '1051939.6076',
            name: '동서동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1661132.28552',
            x_coor: '1052933.61108',
            name: '벌룡동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1673206.72827',
            x_coor: '1052456.888',
            name: '사남면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1676570.95508',
            x_coor: '1053893.92871',
            name: '사천읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1668012.54468',
            x_coor: '1043612.01727',
            name: '서포면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1659574.03192',
            x_coor: '1052253.52197',
            name: '선구동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1668862.39972',
            x_coor: '1051209.60181',
            name: '용현면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1673619.32672',
            x_coor: '1056892.68188',
            name: '정동면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1679266.95068',
            x_coor: '1053622.07568',
            name: '축동면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1660051.13989',
            x_coor: '1054196.47021',
            name: '향촌동',
            code: '57'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1713376.93591',
        x_coor: '1033901.091',
        name: '산청군',
        code: '370',
        subClassList: [
          {
            class: 'C',
            y_coor: '1713553.57709',
            x_coor: '1032968.73901',
            name: '금서면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1700468.91852',
            x_coor: '1041608.44629',
            name: '단성면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1713133.3717',
            x_coor: '1034302.7381',
            name: '산청읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1700352.55072',
            x_coor: '1030163.56219',
            name: '삼장면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1705612.26172',
            x_coor: '1049536.12207',
            name: '생비량면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1721970.01892',
            x_coor: '1030193.28668',
            name: '생초면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1698156.52087',
            x_coor: '1030971.61169',
            name: '시천면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1709803.37793',
            x_coor: '1046011.83533',
            name: '신등면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1701025.7663',
            x_coor: '1043039.69189',
            name: '신안면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1718160.94672',
            x_coor: '1032844.38348',
            name: '오부면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1718734.9425',
            x_coor: '1038816.97247',
            name: '차황면',
            code: '31'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1705465.98309',
        x_coor: '1139680.76349',
        name: '양산시',
        code: '100',
        subClassList: [
          {
            class: 'C',
            y_coor: '1706575.03149',
            x_coor: '1138686.3927',
            name: '강서동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1709928.48248',
            x_coor: '1149908.91742',
            name: '덕계동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1704223.51147',
            x_coor: '1141964.51837',
            name: '동면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1702636.95789',
            x_coor: '1135209.08948',
            name: '물금읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1707445.05487',
            x_coor: '1139982.28333',
            name: '삼성동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1714747.61292',
            x_coor: '1142022.4035',
            name: '상북면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1714675.74371',
            x_coor: '1151907.00787',
            name: '서창동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1713686.51868',
            x_coor: '1150532.31799',
            name: '소주동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1705614.81293',
            x_coor: '1139249.41357',
            name: '양주동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1708600.1593',
            x_coor: '1128894.57922',
            name: '원동면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1706668.21808',
            x_coor: '1140017.97028',
            name: '중앙동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1710799.42133',
            x_coor: '1149599.22388',
            name: '평산동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1722644.2403',
            x_coor: '1143954.255',
            name: '하북면',
            code: '34'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1703230.11731',
        x_coor: '1069233.60809',
        name: '의령군',
        code: '310',
        subClassList: [
          {
            class: 'C',
            y_coor: '1703716.88989',
            x_coor: '1067734.85052',
            name: '가례면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1717095.51031',
            x_coor: '1067972.7077',
            name: '궁류면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1721273.56787',
            x_coor: '1079575.87012',
            name: '낙서면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1708641.64771',
            x_coor: '1055257.6344',
            name: '대의면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1719876.49829',
            x_coor: '1069516.75311',
            name: '봉수면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1719265.02032',
            x_coor: '1074819.0556',
            name: '부림면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1706133.13867',
            x_coor: '1071888.4707',
            name: '용덕면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1715577.61627',
            x_coor: '1073854.38',
            name: '유곡면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1703114.1275',
            x_coor: '1069119.67987',
            name: '의령읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1709745.22009',
            x_coor: '1075054.2464',
            name: '정곡면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1710009.84253',
            x_coor: '1080469.50439',
            name: '지정면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1705313.67291',
            x_coor: '1062940.05609',
            name: '칠곡면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1698258.79791',
            x_coor: '1064645.44788',
            name: '화정면',
            code: '34'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1687394.71527',
        x_coor: '1055345.31073',
        name: '진주시',
        code: '030',
        subClassList: [
          {
            class: 'C',
            y_coor: '1685136.3645',
            x_coor: '1055251.67383',
            name: '가호동',
            code: '71'
          },
          {
            class: 'C',
            y_coor: '1677912.80328',
            x_coor: '1062698.32819',
            name: '금곡면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1691156.13611',
            x_coor: '1058973.78851',
            name: '금산면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1685143.22089',
            x_coor: '1051722.78943',
            name: '내동면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1696753.89093',
            x_coor: '1060903.75769',
            name: '대곡면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1693128.74213',
            x_coor: '1041935.52631',
            name: '대평면',
            code: '44'
          },
          {
            class: 'C',
            y_coor: '1691709.50171',
            x_coor: '1049176.78882',
            name: '명석면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1686187.7605',
            x_coor: '1060499.95508',
            name: '문산읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1700583.54388',
            x_coor: '1055949.776',
            name: '미천면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1688430.32611',
            x_coor: '1070136.91852',
            name: '사봉면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1687394.71527',
            x_coor: '1055345.31073',
            name: '상대1동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1687989.81732',
            x_coor: '1056358.76501',
            name: '상대2동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1689399.82092',
            x_coor: '1052353.03247',
            name: '상봉동',
            code: '75'
          },
          {
            class: 'C',
            y_coor: '1686925.5307',
            x_coor: '1055458.06079',
            name: '상평동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1688576.7135',
            x_coor: '1052445.64252',
            name: '성북동',
            code: '73'
          },
          {
            class: 'C',
            y_coor: '1689341.30072',
            x_coor: '1039341.34192',
            name: '수곡면',
            code: '45'
          },
          {
            class: 'C',
            y_coor: '1687836.23932',
            x_coor: '1051807.29791',
            name: '신안동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1686305.90289',
            x_coor: '1075247.82483',
            name: '이반성면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1688751.92371',
            x_coor: '1051142.8562',
            name: '이현동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1686497.77429',
            x_coor: '1070771.245',
            name: '일반성면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1681969.06909',
            x_coor: '1054901.12439',
            name: '정촌면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1688741.85071',
            x_coor: '1053829.9978',
            name: '중앙동',
            code: '74'
          },
          {
            class: 'C',
            y_coor: '1693567.66388',
            x_coor: '1070028.80731',
            name: '지수면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1687976.7135',
            x_coor: '1065857.01941',
            name: '진성면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1693910.79071',
            x_coor: '1053321.08502',
            name: '집현면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1687424.8905',
            x_coor: '1053245.3772',
            name: '천전동',
            code: '72'
          },
          {
            class: 'C',
            y_coor: '1690089.62347',
            x_coor: '1055944.5741',
            name: '초장동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1687702.05609',
            x_coor: '1057892.72461',
            name: '충무공동',
            code: '76'
          },
          {
            class: 'C',
            y_coor: '1685869.03412',
            x_coor: '1050509.38782',
            name: '판문동',
            code: '70'
          },
          {
            class: 'C',
            y_coor: '1686652.39929',
            x_coor: '1051485.45801',
            name: '평거동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1688442.84912',
            x_coor: '1056470.87262',
            name: '하대1동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1688405.53491',
            x_coor: '1057117.97052',
            name: '하대2동',
            code: '64'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1728077.99451',
        x_coor: '1089947.9718',
        name: '창녕군',
        code: '330',
        subClassList: [
          {
            class: 'C',
            y_coor: '1719693.7973',
            x_coor: '1091902.91467',
            name: '계성면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1731621.95471',
            x_coor: '1091608.2746',
            name: '고암면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1710673.55151',
            x_coor: '1097086.95563',
            name: '길곡면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1710815.02228',
            x_coor: '1088750.21667',
            name: '남지읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1729279.52069',
            x_coor: '1087724.34833',
            name: '대지면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1735722.93652',
            x_coor: '1088038.60303',
            name: '대합면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1715960.92108',
            x_coor: '1092404.8681',
            name: '도천면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1716016.51111',
            x_coor: '1100109.4884',
            name: '부곡면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1737411.07831',
            x_coor: '1090005.5578',
            name: '성산면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1718021.30353',
            x_coor: '1093280.41248',
            name: '영산면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1723958.65948',
            x_coor: '1082627.78729',
            name: '유어면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1731598.17029',
            x_coor: '1080446.31403',
            name: '이방면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1718472.25909',
            x_coor: '1088283.36658',
            name: '장마면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1727716.66272',
            x_coor: '1090719.02228',
            name: '창녕읍',
            code: '11'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1689591.91669',
        x_coor: '1097213.75781',
        name: '창원시 마산합포구',
        code: '113',
        subClassList: [
          {
            class: 'C',
            y_coor: '1686557.08508',
            x_coor: '1097626.18518',
            name: '가포동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1691518.73608',
            x_coor: '1097045.0368',
            name: '교방동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1681036.70587',
            x_coor: '1098483.47699',
            name: '구산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1691342.5329',
            x_coor: '1097774.08142',
            name: '노산동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1690407.80811',
            x_coor: '1097736.13171',
            name: '동서동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1688218.88452',
            x_coor: '1096350.53381',
            name: '문화동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1688855.7403',
            x_coor: '1096724.71558',
            name: '반월동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1691727.5517',
            x_coor: '1098837.97131',
            name: '산호동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1690759.42029',
            x_coor: '1097635.1546',
            name: '성호동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1690915.42853',
            x_coor: '1098172.9931',
            name: '오동동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1689872.55548',
            x_coor: '1096873.27161',
            name: '완월동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1687620.60773',
            x_coor: '1096312.73273',
            name: '월영동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1690537.90491',
            x_coor: '1096985.05389',
            name: '자산동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1689591.91669',
            x_coor: '1097213.75781',
            name: '중앙동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1680420.4101',
            x_coor: '1090080.72552',
            name: '진동면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1680465.37451',
            x_coor: '1088157.03998',
            name: '진북면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1679022.51532',
            x_coor: '1083754.99451',
            name: '진전면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1691155.39331',
            x_coor: '1098237.1087',
            name: '합포동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1683155.59052',
            x_coor: '1098114.24261',
            name: '현동',
            code: '51'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1692225.43469',
        x_coor: '1098243.68878',
        name: '창원시 마산회원구',
        code: '114',
        subClassList: [
          {
            class: 'C',
            y_coor: '1695433.9599',
            x_coor: '1099484.33557',
            name: '구암1동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1695396.02753',
            x_coor: '1099930.8045',
            name: '구암2동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1695061.70129',
            x_coor: '1091673.32629',
            name: '내서읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1691916.01569',
            x_coor: '1100337.88702',
            name: '봉암동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1693189.72491',
            x_coor: '1097205.42889',
            name: '석전1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1693291.86029',
            x_coor: '1097650.05798',
            name: '석전2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1693531.9057',
            x_coor: '1098837.78662',
            name: '양덕1동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1693181.94452',
            x_coor: '1098634.13098',
            name: '양덕2동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1694624.3219',
            x_coor: '1098616.36157',
            name: '합성1동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1694276.64368',
            x_coor: '1098882.237',
            name: '합성2동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1693589.77893',
            x_coor: '1096608.48981',
            name: '회성동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1691974.24811',
            x_coor: '1097752.84088',
            name: '회원1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1692026.14691',
            x_coor: '1097315.26959',
            name: '회원2동',
            code: '52'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1689900.47607',
        x_coor: '1109475.80682',
        name: '창원시 성산구',
        code: '112',
        subClassList: [
          {
            class: 'C',
            y_coor: '1691521.48889',
            x_coor: '1109269.44019',
            name: '가음정동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1694013.75171',
            x_coor: '1106418.77612',
            name: '반송동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1691839.94189',
            x_coor: '1110008.96283',
            name: '사파동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1691823.98889',
            x_coor: '1108025.10278',
            name: '상남동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1689900.47607',
            x_coor: '1109475.80682',
            name: '성주동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1690583.90472',
            x_coor: '1102600.43219',
            name: '웅남동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1691967.37311',
            x_coor: '1106439.21503',
            name: '중앙동',
            code: '52'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1695981.0813',
        x_coor: '1103723.1601',
        name: '창원시 의창구',
        code: '111',
        subClassList: [
          {
            class: 'C',
            y_coor: '1705085.81451',
            x_coor: '1109808.93817',
            name: '대산면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1699444.06232',
            x_coor: '1107526.55969',
            name: '동읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1695981.0813',
            x_coor: '1103723.1601',
            name: '명곡동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1694248.8335',
            x_coor: '1108454.7074',
            name: '봉림동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1706357.97949',
            x_coor: '1100593.00659',
            name: '북면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1693145.70093',
            x_coor: '1107552.10242',
            name: '용지동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1697211.39893',
            x_coor: '1101933.26782',
            name: '의창동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1696139.1311',
            x_coor: '1101230.02252',
            name: '팔룡동',
            code: '52'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1682759.56293',
        x_coor: '1110357.92261',
        name: '창원시 진해구',
        code: '115',
        subClassList: [
          {
            class: 'C',
            y_coor: '1684989.28833',
            x_coor: '1108105.0235',
            name: '경화동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1683785.9859',
            x_coor: '1109656.435',
            name: '덕산동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1685062.18811',
            x_coor: '1108347.02173',
            name: '병암동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1685478.84967',
            x_coor: '1109295.98273',
            name: '석동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1685425.61169',
            x_coor: '1105684.27008',
            name: '여좌동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1681940.9541',
            x_coor: '1116872.24609',
            name: '웅동1동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1679236.54651',
            x_coor: '1119828.25439',
            name: '웅동2동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1680285.9845',
            x_coor: '1113884.84668',
            name: '웅천동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1684450.7027',
            x_coor: '1109297.61688',
            name: '이동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1684203.99231',
            x_coor: '1109805.64929',
            name: '자은동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1684677.65149',
            x_coor: '1105264.2439',
            name: '중앙동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1684535.36627',
            x_coor: '1105691.22278',
            name: '충무동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1684927.13593',
            x_coor: '1107239.59332',
            name: '태백동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1684011.76727',
            x_coor: '1105859.71417',
            name: '태평동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1682759.56293',
            x_coor: '1110357.92261',
            name: '풍호동',
            code: '62'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1651485.20392',
        x_coor: '1085308.19379',
        name: '통영시',
        code: '050',
        subClassList: [
          {
            class: 'C',
            y_coor: '1656493.46667',
            x_coor: '1082851.87262',
            name: '광도면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1656837.48871',
            x_coor: '1078741.1521',
            name: '도산면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1649779.02753',
            x_coor: '1082356.10529',
            name: '도천동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1650155.26349',
            x_coor: '1084093.7287',
            name: '명정동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1651809.13647',
            x_coor: '1085238.13287',
            name: '무전동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1648800.23907',
            x_coor: '1082854.0257',
            name: '미수동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1648720.75409',
            x_coor: '1084521.68707',
            name: '봉평동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1651763.70728',
            x_coor: '1084608.73718',
            name: '북신동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1650325.25952',
            x_coor: '1065806.33673',
            name: '사량면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1645799.53668',
            x_coor: '1081932.20599',
            name: '산양읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1627164.36969',
            x_coor: '1069966.55939',
            name: '욕지면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1652962.04248',
            x_coor: '1086132.6991',
            name: '용남면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1650216.07452',
            x_coor: '1085045.4101',
            name: '정량동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1650454.86413',
            x_coor: '1084399.15548',
            name: '중앙동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1641869.96033',
            x_coor: '1092210.2583',
            name: '한산면',
            code: '35'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1674721.32428',
        x_coor: '1022913.84851',
        name: '하동군',
        code: '360',
        subClassList: [
          {
            class: 'C',
            y_coor: '1669728.46808',
            x_coor: '1028949.12012',
            name: '고전면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1661815.2395',
            x_coor: '1032757.3772',
            name: '금남면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1663251.52692',
            x_coor: '1026501.3335',
            name: '금성면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1680016.6463',
            x_coor: '1035797.02911',
            name: '북천면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1685256.33807',
            x_coor: '1019027.51172',
            name: '악양면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1672530.1037',
            x_coor: '1031530.97528',
            name: '양보면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1687584.54791',
            x_coor: '1034557.63232',
            name: '옥종면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1676489.61212',
            x_coor: '1025244.48352',
            name: '적량면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1670679.18811',
            x_coor: '1036570.9574',
            name: '진교면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1684614.10992',
            x_coor: '1027278.85822',
            name: '청암면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1675430.2561',
            x_coor: '1021925.49121',
            name: '하동읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1688126.6991',
            x_coor: '1011419.97443',
            name: '화개면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1679422.6507',
            x_coor: '1028591.24487',
            name: '횡천면',
            code: '34'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1697819.68188',
        x_coor: '1082453.82739',
        name: '함안군',
        code: '320',
        subClassList: [
          {
            class: 'C',
            y_coor: '1697819.68188',
            x_coor: '1082453.82739',
            name: '가야읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1696570.20367',
            x_coor: '1076867.04871',
            name: '군북면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1706463.05511',
            x_coor: '1084646.99573',
            name: '대산면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1702545.15033',
            x_coor: '1077758.9668',
            name: '법수면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1698593.4917',
            x_coor: '1084057.38733',
            name: '산인면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1690936.09113',
            x_coor: '1085057.87732',
            name: '여항면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1706159.80267',
            x_coor: '1092838.5733',
            name: '칠북면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1704681.47308',
            x_coor: '1090697.38312',
            name: '칠서면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1700417.19075',
            x_coor: '1093449.19842',
            name: '칠원읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1694464.44873',
            x_coor: '1084042.24762',
            name: '함안면',
            code: '31'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1724980.28009',
        x_coor: '1020418.58899',
        name: '함양군',
        code: '380',
        subClassList: [
          {
            class: 'C',
            y_coor: '1711259.93909',
            x_coor: '1014804.68402',
            name: '마천면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1728418.27911',
            x_coor: '1012294.73279',
            name: '백전면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1725850.25592',
            x_coor: '1016511.94019',
            name: '병곡면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1743031.4967',
            x_coor: '1016823.09662',
            name: '서상면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1739065.48389',
            x_coor: '1017690.77301',
            name: '서하면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1725172.30188',
            x_coor: '1026090.00421',
            name: '수동면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1736991.93292',
            x_coor: '1028185.14923',
            name: '안의면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1718967.60529',
            x_coor: '1026522.18561',
            name: '유림면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1730052.74829',
            x_coor: '1024843.1488',
            name: '지곡면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1724980.28009',
            x_coor: '1020418.58899',
            name: '함양읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1720556.35529',
            x_coor: '1022700.30402',
            name: '휴천면',
            code: '32'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1730274.53912',
        x_coor: '1060336.86768',
        name: '합천군',
        code: '400',
        subClassList: [
          {
            class: 'C',
            y_coor: '1752006.3125',
            x_coor: '1057809.26648',
            name: '가야면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1715620.05072',
            x_coor: '1048440.76428',
            name: '가회면',
            code: '44'
          },
          {
            class: 'C',
            y_coor: '1725150.79169',
            x_coor: '1046626.77429',
            name: '대병면',
            code: '45'
          },
          {
            class: 'C',
            y_coor: '1724728.27332',
            x_coor: '1061159.6123',
            name: '대양면',
            code: '41'
          },
          {
            class: 'C',
            y_coor: '1735796.33051',
            x_coor: '1077801.46057',
            name: '덕곡면',
            code: '38'
          },
          {
            class: 'C',
            y_coor: '1740424.45709',
            x_coor: '1055515.11792',
            name: '묘산면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1736801.82971',
            x_coor: '1049063.68597',
            name: '봉산면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1713368.04071',
            x_coor: '1056459.71051',
            name: '삼가면',
            code: '43'
          },
          {
            class: 'C',
            y_coor: '1716393.73547',
            x_coor: '1058584.29449',
            name: '쌍백면',
            code: '42'
          },
          {
            class: 'C',
            y_coor: '1731368.0235',
            x_coor: '1070861.16052',
            name: '쌍책면',
            code: '37'
          },
          {
            class: 'C',
            y_coor: '1745646.5235',
            x_coor: '1060406.19067',
            name: '야로면',
            code: '34'
          },
          {
            class: 'C',
            y_coor: '1727359.60852',
            x_coor: '1055600.42908',
            name: '용주면',
            code: '46'
          },
          {
            class: 'C',
            y_coor: '1730985.31653',
            x_coor: '1065058.40839',
            name: '율곡면',
            code: '35'
          },
          {
            class: 'C',
            y_coor: '1728233.53351',
            x_coor: '1070569.86108',
            name: '적중면',
            code: '40'
          },
          {
            class: 'C',
            y_coor: '1729572.78491',
            x_coor: '1074474.67828',
            name: '청덕면',
            code: '39'
          },
          {
            class: 'C',
            y_coor: '1729601.28491',
            x_coor: '1069357.0451',
            name: '초계면',
            code: '36'
          },
          {
            class: 'C',
            y_coor: '1730195.60071',
            x_coor: '1059620.05408',
            name: '합천읍',
            code: '11'
          }
        ]
      }
    ]
  },
  {
    class: 'A',
    y_coor: '1500136.24872',
    x_coor: '906937.341187',
    name: '제주특별자치도',
    code: '39',
    subClassList: [
      {
        class: 'B',
        y_coor: '1473273.14925',
        x_coor: '907106.816102',
        name: '서귀포시',
        code: '020',
        subClassList: [
          {
            class: 'C',
            y_coor: '1476772.72968',
            x_coor: '927428.724304',
            name: '남원읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1473415.34613',
            x_coor: '907901.172302',
            name: '대륜동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1470098.0437',
            x_coor: '884208.750427',
            name: '대정읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1473738.2699',
            x_coor: '904755.01062',
            name: '대천동',
            code: '60'
          },
          {
            class: 'C',
            y_coor: '1474444.61292',
            x_coor: '913274.687073',
            name: '동홍동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1474246.98969',
            x_coor: '912459.798279',
            name: '서홍동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1494642.28491',
            x_coor: '945252.805298',
            name: '성산읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1471005.4201',
            x_coor: '912942.221966',
            name: '송산동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1474638.0481',
            x_coor: '891077.527405',
            name: '안덕면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1475639.2995',
            x_coor: '914936.881897',
            name: '영천동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1474204.87732',
            x_coor: '897336.669312',
            name: '예래동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1473119.09448',
            x_coor: '912921.074585',
            name: '정방동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1473855.08789',
            x_coor: '900769.881226',
            name: '중문동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1473660.40887',
            x_coor: '912924.819092',
            name: '중앙동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1473338.3703',
            x_coor: '912549.887085',
            name: '천지동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1481866.37988',
            x_coor: '937788.578796',
            name: '표선면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1475011.0871',
            x_coor: '917624.024231',
            name: '효돈동',
            code: '55'
          }
        ]
      },
      {
        class: 'B',
        y_coor: '1501268.95569',
        x_coor: '909996.703308',
        name: '제주시',
        code: '010',
        subClassList: [
          {
            class: 'C',
            y_coor: '1502988.18347',
            x_coor: '910056.282471',
            name: '건입동',
            code: '59'
          },
          {
            class: 'C',
            y_coor: '1503548.12512',
            x_coor: '939813.038513',
            name: '구좌읍',
            code: '13'
          },
          {
            class: 'C',
            y_coor: '1499496.16687',
            x_coor: '904974.864807',
            name: '노형동',
            code: '66'
          },
          {
            class: 'C',
            y_coor: '1501702.07288',
            x_coor: '904167.57019',
            name: '도두동',
            code: '69'
          },
          {
            class: 'C',
            y_coor: '1500351.46692',
            x_coor: '915906.004028',
            name: '봉개동',
            code: '62'
          },
          {
            class: 'C',
            y_coor: '1501744.28027',
            x_coor: '908809.609619',
            name: '삼도1동',
            code: '55'
          },
          {
            class: 'C',
            y_coor: '1502633.16028',
            x_coor: '909187.400818',
            name: '삼도2동',
            code: '56'
          },
          {
            class: 'C',
            y_coor: '1503700.62372',
            x_coor: '915081.813599',
            name: '삼양동',
            code: '61'
          },
          {
            class: 'C',
            y_coor: '1498684.89227',
            x_coor: '911267.609619',
            name: '아라동',
            code: '63'
          },
          {
            class: 'C',
            y_coor: '1497303.42389',
            x_coor: '891223.078003',
            name: '애월읍',
            code: '12'
          },
          {
            class: 'C',
            y_coor: '1500047.34528',
            x_coor: '906810.145325',
            name: '연동',
            code: '65'
          },
          {
            class: 'C',
            y_coor: '1500803.61908',
            x_coor: '908184.017822',
            name: '오라동',
            code: '64'
          },
          {
            class: 'C',
            y_coor: '1500625.88708',
            x_coor: '900796.539917',
            name: '외도동',
            code: '67'
          },
          {
            class: 'C',
            y_coor: '1502348.72388',
            x_coor: '908355.842896',
            name: '용담1동',
            code: '57'
          },
          {
            class: 'C',
            y_coor: '1502617.92352',
            x_coor: '908210.510193',
            name: '용담2동',
            code: '58'
          },
          {
            class: 'C',
            y_coor: '1501724.5885',
            x_coor: '949210.725891',
            name: '우도면',
            code: '33'
          },
          {
            class: 'C',
            y_coor: '1502065.28589',
            x_coor: '909626.211731',
            name: '이도1동',
            code: '53'
          },
          {
            class: 'C',
            y_coor: '1500996.54633',
            x_coor: '910389.976196',
            name: '이도2동',
            code: '54'
          },
          {
            class: 'C',
            y_coor: '1501369.68793',
            x_coor: '903220.882996',
            name: '이호동',
            code: '68'
          },
          {
            class: 'C',
            y_coor: '1502999.00067',
            x_coor: '909578.785217',
            name: '일도1동',
            code: '51'
          },
          {
            class: 'C',
            y_coor: '1502608.3009',
            x_coor: '910680.357483',
            name: '일도2동',
            code: '52'
          },
          {
            class: 'C',
            y_coor: '1505841.23767',
            x_coor: '922452.007202',
            name: '조천읍',
            code: '14'
          },
          {
            class: 'C',
            y_coor: '1552968.26929',
            x_coor: '888767.850098',
            name: '추자면',
            code: '32'
          },
          {
            class: 'C',
            y_coor: '1479550.36609',
            x_coor: '877465.388184',
            name: '한경면',
            code: '31'
          },
          {
            class: 'C',
            y_coor: '1491656.62329',
            x_coor: '885360.30603',
            name: '한림읍',
            code: '11'
          },
          {
            class: 'C',
            y_coor: '1503540.09308',
            x_coor: '913218.166504',
            name: '화북동',
            code: '60'
          }
        ]
      }
    ]
  }
] as Sido[]
