// storymap_data can be an URL or a Javascript object
var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "1995",
      text: {
        headline: "My Journey",
        text: "<p> I was born in 1995. Now let me show you my journey during the past 22 years.</p>"
      },
      media: {
      	url: "http://dev-megan-personalsite.pantheonsite.io/final/Megan.jpeg",
        credit: "Megan",
        caption: "About Megan"
      }
    },{
      date: "2017",
      text: {
        headline: "My Hometown",
        text: "<p> Fuqing located in the southeastern part of China. It is a small and peaceful city by the sea, having an abundance of evergreen plants. </p>"
      },
      location: {
        name: "Fuqing, Fujian",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 25.7211,
        lon: 119.3843,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://dev-megan-personalsite.pantheonsite.io/final/Hometown.jpeg",
        type: "image",
        credit: "Megan",
        caption: "An Afternoon in Winter."
      }
    },{
      date: "2013",
      text: {
        headline: "Nanjing University",
        text: "<p>In 2013, I entered Nanjing University and begin the 4-year journey here. My major is Advertising. Here, I was exposed to multidisciplinary courses and various activities.</p> "
      },
      location: {
        name: "Nanjing University",
        lat: 32.0568,
        lon: 118.7790,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://dev-megan-personalsite.pantheonsite.io/final/nju.jpg",
        credit: "Megan",
        caption: "Kid and Fallen Leaves after Snow"
      }
  },
  {
      date: "2014",
      text: {
        headline: "Nanjing Youth Olympics",
        text: "<p>In 2014, I participated in the 2014 Nanjing Youth Olympic Games as a volunteer.</p> "
      },
      location: {
        name: "YOG Nanjing",
        lat: 32.047656,
        lon: 118.77158,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://dev-megan-personalsite.pantheonsite.io/final/yog.jpeg",
        credit: "Megan",
        caption: "With the Audience"
      }
  },{
      date: "2015",
      text: {
        headline: "Sigapore",
        text: "<p>I went to Sigpore for a one-week study tour organized by Peter Sue, a famous adman.</p> "
      },
      location: {
        name: "Singapore",
        lat: 1.352083,
        lon: 103.819836,
        zoom: 16,
        line: true
      },
      media: {
        url:"http://dev-megan-personalsite.pantheonsite.io/final/1.jpeg",
        credit: "Anonymous",
        caption: "The APPIES"
      }
 },{
      date: "2015",
      text: {
        headline: "JSBC",
        text: "<p>I worked at Jiangsu Broadcasting Corporation as a New Media and Stretegy Intern from November 2015 to May 2016.</p> "
      },
      location: {
        name: "JSBC",
        lat: 32.06167,
        lon: 118.77778,
        zoom: 16,
        line: true
      },
      media: {
      	url:"http://dev-megan-personalsite.pantheonsite.io/final/jsbc.jpg",
        credit: "weilaijinhuatong",
        caption: "JSBC Building before Sunset"
      }
 },{
      date: "2016",
      text: {
        headline: "McCANN & Erickson",
        text: "<p>From May 2016 to September 2016, I interned as an AE at McCANN & Erickson, one of the top 4A agencied. During the 4 months, I got to know more about advertising idustry and branding.</p> "
      },
      location: {
        name: "McCANN & Erickson",
        lat: 31.230393,
        lon: 121.473704,
        zoom: 16,
        line: true
      },
      media: {
      	url:"http://dev-megan-personalsite.pantheonsite.io/final/mccann.jpg",
        credit: "Megan",
        caption: "Children's Day Party in McCANN"
      }
},{
      date: "2016",
      text: {
        headline: "Danone Nutricia",
        text: "<p>Another intership of mine was in Danone Nutricia Early Life Nutrition about innovation marketing from December 2016 to March 2017. </p> "
      },
      location: {
        name: "Danone Nutricia ELN",
        lat: 31.230393,
        lon: 121.47370,
        zoom: 16,
        line: true
      },
      media: {
      	url:"http://dev-megan-personalsite.pantheonsite.io/final/danone.jpg",
        credit: "Megan",
        caption: "4-year Anniversary Party of Nutrilon"
      }
 },{
      date: "2017",
      text: {
        headline: "CUHK",
        text: "<p>Now I am studying New Media at School of Journalism and Communication in CUHK.</p> "
      },
      location: {
        name: "School of Journalism and Communication, CUHK",
        lat: 22.4163,
        lon: 114.2109,
        zoom: 16,
        line: true
      },
      media: {
      	url:"http://dev-megan-personalsite.pantheonsite.io/final/cuhk.jpg",
        credit: "Megan",
        caption: "On the Way to Canteen"
      }
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'mapbox:mapbox.light',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}