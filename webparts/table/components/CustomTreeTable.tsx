import React from "react";
import { Table, Checkbox as Checkfield, Button, DOMHelper, Icon } from "rsuite";
import { Checkbox  } from 'office-ui-fabric-react';
import 'rsuite/dist/styles/rsuite-default.css';
import TablePagination from "rsuite/lib/Table/TablePagination";
import ImageUpload from "./ImageUpload"
//import 'rsuite-table/dist/css/rsuite-table.css'
//import "rsuite/dist/styles/rsuite.min.css";
// import { Table,Input } from 'antd';
// import styles from "./index.less";
import './App.css';
const { Column, HeaderCell, Cell, Pagination } = Table;
const { addClass, scrollTop } = DOMHelper;

let data = [
  {
    id: "1",
    labelName: "Car",
    status: "ENABLED",
    children: [
      {
        id: "1-1",
        labelName: "Mercedes Benz",
        status: "ENABLED",
        count: 460
      },
      {
        id: "1-2",
        labelName: "BMW",
        status: "ENABLED",
        children: [
          {
            id: "1-2-1",
            labelName: "2 series",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "1-2-1-1",
                labelName: "Sporty hatchback",
                status: "DISABLED",
                count: 502
              },
              {
                id: "1-2-1-2",
                labelName: "Coupe",
                status: "ENABLED",
                count: 502
              },
              {
                id: "1-2-1-3",
                labelName: "Roadster",
                status: "DISABLED"
              },
              {
                id: "1-2-1-4",
                labelName: "Multi-function wagon",
                status: "DISABLED"
              },
              {
                id: "1-2-1-5",
                labelName: "Station wagon",
                status: "DISABLED",
                count: 34
              }
            ]
          },
          {
            id: "1-2-2",
            labelName: "The intention of customers",
            status: "ENABLED",
            count: 364,
            children: [
              {
                id: "1-2-2-1",
                labelName: "Financial plan",
                status: "DISABLED"
              },
              {
                id: "1-2-2-2",
                labelName: "Appointment test drive",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "2",
    labelName: "Game",
    status: "ENABLED",
    count: 834,
    children: [
      {
        id: "2-1",
        labelName: "Online game",
        status: "DISABLED"
      },
      {
        id: "2-2",
        labelName: "Mobile game",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "3",
    labelName: "Digital",
    status: "ENABLED",
    count: 534,
    children: [
      {
        id: "3-1",
        labelName: "Tablet",
        status: "ENABLED",
        children: []
      },
      {
        id: "3-2",
        labelName: "Computer",
        status: "DISABLED",
        children: [
          {
            id: "3-2-1",
            labelName: "Microsoft Surface Book",
            status: "ENABLED",
            count: 103
          },
          {
            id: "3-2-1",
            labelName: "Macbook Pro",
            status: "ENABLED",
            count: 103
          }
        ]
       },
      {
        id: "3-3",
        labelName: "Watch",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "4",
    labelName: "Phone",
    status: "ENABLED",
    children: [
      {
        id: "4-1",
        labelName: "Samsung",
        status: "ENABLED",
        count: 460
      },
      {
        id: "4-2",
        labelName: "Apple",
        status: "ENABLED",
        children: [
          {
            id: "4-2-1",
            labelName: "iPhone 11",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "4-2-1-1",
                labelName: "in Midnight Green",
                status: "DISABLED",
                count: 502
              },
              {
                id: "4-2-1-2",
                labelName: "in Purple",
                status: "ENABLED",
                count: 502
              },
              {
                id: "4-2-1-3",
                labelName: "in Red",
                status: "DISABLED"
              },
              {
                id: "1-2-1-4",
                labelName: "in Black",
                status: "DISABLED"
              },
              {
                id: "1-2-1-5",
                labelName: "in White",
                status: "DISABLED",
                count: 34
              }
            ]
          },
          {
            id: "4-2-2",
            labelName: "iPhone 11 Pro",
            status: "ENABLED",
            count: 364,
            children: [
              {
                id: "4-2-2-1",
                labelName: "with 256 GB",
                status: "DISABLED"
              },
              {
                id: "4-2-2-2",
                labelName: "with 512 GB",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '5',
    labelName: 'Furniture ',
    status: 'ENABLED',
    children: [
      {
        id: '5-1',
        labelName: 'Living Room',
        status: 'ENABLED',
        count: 460
      },
      {
        id: '5-2',
        labelName: 'Dining Room',
        status: 'ENABLED',
        children: [
          {
            id: '5-2-1',
            labelName: 'Wood',
            status: 'ENABLED',
            count: 103,
            children: [
              {
                id: '5-2-1-1' ,
                labelName: '6 Chairs',
                status: 'DISABLED',
                count: 502
              },
              {
                id: '5-2-1-2',
                labelName: '1 Table',
                status: 'ENABLED',
                count: 502
              },
            ]
          },
          {
            id: '5-2-2',
            labelName: 'Glass',
            status: 'ENABLED',
            count: 364,
            children: [
              {
                id: '5-2-2-1',
                labelName: 'Cutlery',
                status: 'DISABLED'
              },
              {
                id: '5-2-2-2',
                labelName: 'Crockery',
                status: 'ENABLED'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '6',
    labelName: 'House',
    status: 'ENABLED',
    count: 834,
    children: [
      {
        id: '6-1',
        labelName: 'Villas',
        status: 'DISABLED'
      },
      {
        id: '6-2',
        labelName: 'Apartment',
        status: 'ENABLED'
      },
      {
        id: '6-2',
        labelName: 'Penthouse',
        status: 'ENABLED'
      }

    ]
  },
  {
    id: '7',
    labelName: 'University',
    status: 'ENABLED',
    count: 534,
    children: [
      {
        id: '7-1',
        labelName: 'Faculty',
        status: 'ENABLED',
        children: []
      },
      {
        id: '7-2',
        labelName: 'Administration',
        status: 'DISABLED'
      },
      {
        id: '7-3',
        labelName: 'Students',
        status: 'ENABLED'
      }
    ]
  },
  {
    id:'8',
    labelName: "Car",
    status: "ENABLED",
    children: [
      {
        id: "8-1",
        labelName: "Mercedes Benz",
        status: "ENABLED",
        count: 460
      },
      {
        id: "8-2",
        labelName: "BMW",
        status: "ENABLED",
        children: [
          {
            id: "8-2-1",
            labelName: "2 series",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "8-2-1-1",
                labelName: "Sporty hatchback",
                status: "DISABLED",
                count: 502
              },
              {
                id: "8-2-1-2",
                labelName: "Coupe",
                status: "ENABLED",
                count: 502
              },
              {
                id: "8-2-1-3",
                labelName: "Roadster",
                status: "DISABLED"
              },
              {
                id: "8-2-1-4",
                labelName: "Multi-function wagon",
                status: "DISABLED"
              },
              {
                id: "8-2-1-5",
                labelName: "Station wagon",
                status: "DISABLED",
                count: 34
              }
            ]
          },
          {
            id: "8-2-2",
            labelName: "The intention of customers",
            status: "ENABLED",
            count: 364,
            children: [
              {
                id: "8-2-2-1",
                labelName: "Financial plan",
                status: "DISABLED"
              },
              {
                id: "8-2-2-2",
                labelName: "Appointment test drive",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "9",
    labelName: "Game",
    status: "ENABLED",
    count: 834,
    children: [
      {
        id: "9-1",
        labelName: "Online game",
        status: "DISABLED"
      },
      {
        id: "9-2",
        labelName: "Mobile game",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "9",
    labelName: "Digital",
    status: "ENABLED",
    count: 534,
    children: [
      {
        id: "9-1",
        labelName: "Tablet",
        status: "ENABLED",
        children: []
      },
      {
        id: "9-2",
        labelName: "Computer",
        status: "DISABLED",
        children: [
          {
            id: "9-2-1",
            labelName: "Microsoft Surface Book",
            status: "ENABLED",
            count: 103
          },
          {
            id: "9-2-2",
            labelName: "Macbook Pro",
            status: "ENABLED",
            count: 103
          }
        ]
       },
      {
        id: "9-3",
        labelName: "Watch",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "10",
    labelName: "Phone",
    status: "ENABLED",
    children: [
      {
        id: "10-1",
        labelName: "Samsung",
        status: "ENABLED",
        count: 460
      },
      {
        id: "10-2",
        labelName: "Apple",
        status: "ENABLED",
        children: [
          {
            id: "10-2-1",
            labelName: "iPhone 11",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "10-2-1-1",
                labelName: "in Midnight Green",
                status: "DISABLED",
                count: 502
              },
              {
                id: "10-2-1-2",
                labelName: "in Purple",
                status: "ENABLED",
                count: 502
              },
              {
                id: "10-2-1-3",
                labelName: "in Red",
                status: "DISABLED"
              },
              {
                id: "10-2-1-4",
                labelName: "in Black",
                status: "DISABLED"
              },
              {
                id: "10-2-1-5",
                labelName: "in White",
                status: "DISABLED",
                count: 34
              }
            ]
          },
          {
            id: "10-2-2",
            labelName: "iPhone 11 Pro",
            status: "ENABLED",
            count: 364,
            children: [
              {
                id: "10-2-2-1",
                labelName: "with 256 GB",
                status: "DISABLED"
              },
              {
                id: "10-2-2-2",
                labelName: "with 512 GB",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '11',
    labelName: 'Furniture ',
    status: 'ENABLED',
    children: [
      {
        id: '11-1',
        labelName: 'Living Room',
        status: 'ENABLED',
        count: 460
      },
      {
        id: '11-2',
        labelName: 'Dining Room',
        status: 'ENABLED',
        children: [
          {
            id: '11-2-1',
            labelName: 'Wood',
            status: 'ENABLED',
            count: 103,
            children: [
              {
                id: '11-2-1-1',
                labelName: '6 Chairs',
                status: 'DISABLED',
                count: 502
              },
              {
                id: '11-2-1-2',
                labelName: '1 Table',
                status: 'ENABLED',
                count: 502
              },
            ]
          },
          {
            id: '11-2-2',
            labelName: 'Glass',
            status: 'ENABLED',
            count: 364,
            children: [
              {
                id: '11-2-2-1',
                labelName: 'Cutlery',
                status: 'DISABLED'
              },
              {
                id: '11-2-2-2',
                labelName: 'Crockery',
                status: 'ENABLED'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '12',
    labelName: 'House',
    status: 'ENABLED',
    count: 834,
    children: [
      {
        id: '12-1',
        labelName: 'Villas',
        status: 'DISABLED'
      },
      {
        id: '12-2',
        labelName: 'Apartment',
        status: 'ENABLED'
      },
      {
        id: '12-2',
        labelName: 'Penthouse',
        status: 'ENABLED'
      }
  
    ]
  },
  {
    id: '13',
    labelName: 'University',
    status: 'ENABLED',
    count: 534,
    children: [
      {
        id: '13-1',
        labelName: 'Faculty',
        status: 'ENABLED',
        children: []
      },
      {
        id: '13-2',
        labelName: 'Administration',
        status: 'DISABLED'
      },
      {
        id: '13-3',
        labelName: 'Students',
        status: 'ENABLED'
      }
    ]
  },

  {
    id: "14",
    labelName: "Car",
    status: "ENABLED",
    children: [
      {
        id: "14-1",
        labelName: "Mercedes Benz",
        status: "ENABLED",
        count: 460
      },
      {
        id: "14-2",
        labelName: "BMW",
        status: "ENABLED",
        children: [
          {
            id: "14-2-1",
            labelName: "2 series",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "14-2-1-1",
                labelName: "Sporty hatchback",
                status: "DISABLED",
                count: 502
              },
              {
                id: "14-2-1-2",
                labelName: "Coupe",
                status: "ENABLED",
                count: 502
              },
              {
                id: "14-2-1-3",
                labelName: "Roadster",
                status: "DISABLED"
              },
              {
                id: "14-2-1-4",
                labelName: "Multi-function wagon",
                status: "DISABLED"
              },
              {
                id: "14-2-1-5",
                labelName: "Station wagon",
                status: "DISABLED",
                count: 34
              }
            ]
          },
          {
            id: "14-2-2",
            labelName: "The intention of customers",
            status: "ENABLED",
            count: 364,
            children: [
              {
                id: "14-2-2-1",
                labelName: "Financial plan",
                status: "DISABLED"
              },
              {
                id: "14-2-2-2",
                labelName: "Appointment test drive",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "15",
    labelName: "Game",
    status: "ENABLED",
    count: 834,
    children: [
      {
        id: "15-1",
        labelName: "Online game",
        status: "DISABLED"
      },
      {
        id: "15-2",
        labelName: "Mobile game",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "16",
    labelName: "Digital",
    status: "ENABLED",
    count: 534,
    children: [
      {
        id: "16-1",
        labelName: "Tablet",
        status: "ENABLED",
        children: []
      },
      {
        id: "16-2",
        labelName: "Computer",
        status: "DISABLED",
        children: [
          {
            id: "16-2-1",
            labelName: "Microsoft Surface Book",
            status: "ENABLED",
            count: 103
          },
          {
            id: "16-2-1",
            labelName: "Macbook Pro",
            status: "ENABLED",
            count: 103
          }
        ]
       },
      {
        id: "16-3",
        labelName: "Watch",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "120",
    labelName: "Phone",
    status: "ENABLED",
    children: [
      {
        id: "120-1",
        labelName: "Samsung",
        status: "ENABLED",
        count: 460
      },
      {
        id: "120-2",
        labelName: "Apple",
        status: "ENABLED",
        children: [
          {
            id: "120-2-1",
            labelName: "iPhone 11",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "120-2-1-1",
                labelName: "in Midnight Green",
                status: "DISABLED",
                count: 502
              },
              {
                id: "120-2-1-2",
                labelName: "in Purple",
                status: "ENABLED",
                count: 502
              },
              {
                id: "120-2-1-3",
                labelName: "in Red",
                status: "DISABLED"
              },
              {
                id: "120-2-1-4",
                labelName: "in Black",
                status: "DISABLED"
              },
              {
                id: "120-2-1-5",
                labelName: "in White",
                status: "DISABLED",
                count: 34
              }
            ]
          },
          {
            id: "120-2-2",
            labelName: "iPhone 11 Pro",
            status: "ENABLED",
            count: 364,
            children: [
              {
                id: "120-2-2-1",
                labelName: "with 256 GB",
                status: "DISABLED"
              },
              {
                id: "120-2-2-2",
                labelName: "with 512 GB",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '18',
    labelName: 'Furniture ',
    status: 'ENABLED',
    children: [
      {
        id: '18-1',
        labelName: 'Living Room',
        status: 'ENABLED',
        count: 460
      },
      {
        id: '18-2',
        labelName: 'Dining Room',
        status: 'ENABLED',
        children: [
          {
            id: '18-2-1',
            labelName: 'Wood',
            status: 'ENABLED',
            count: 103,
            children: [
              {
                id: '18-2-1-1',
                labelName: '6 Chairs',
                status: 'DISABLED',
                count: 502
              },
              {
                id: '18-2-1-2',
                labelName: '1 Table',
                status: 'ENABLED',
                count: 502
              },
            ]
          },
          {
            id: '18-2-2',
            labelName: 'Glass',
            status: 'ENABLED',
            count: 364,
            children: [
              {
                id: '18-2-2-1',
                labelName: 'Cutlery',
                status: 'DISABLED'
              },
              {
                id: '18-2-2-2',
                labelName: 'Crockery',
                status: 'ENABLED'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '19',
    labelName: 'House',
    status: 'ENABLED',
    count: 834,
    children: [
      {
        id: '19-1',
        labelName: 'Villas',
        status: 'DISABLED'
      },
      {
        id: '19-2',
        labelName: 'Apartment',
        status: 'ENABLED'
      },
      {
        id: '19-2',
        labelName: 'Penthouse',
        status: 'ENABLED'
      }
  
    ]
  },
  {
    id: '20',
    labelName: 'University',
    status: 'ENABLED',
    count: 534,
    children: [
      {
        id: '20-1',
        labelName: 'Faculty',
        status: 'ENABLED',
        children: []
      },
      {
        id: '20-2',
        labelName: 'Administration',
        status: 'DISABLED'
      },
      {
        id: '20-3',
        labelName: 'Students',
        status: 'ENABLED'
      }
    ]
  },
  {
    id: "21",
    labelName: "Car",
    status: "ENABLED",
    children: [
      {
        id: "21-1",
        labelName: "Mercedes Benz",
        status: "ENABLED",
        count: 460
      },
      {
        id: "21-2",
        labelName: "BMW",
        status: "ENABLED",
        children: [
          {
            id: "21-2-1",
            labelName: "2 series",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "21-2-1-1",
                labelName: "Sporty hatchback",
                status: "DISABLED",
                count:2272
              },
              {
                id: "21-2-1-2",
                labelName: "Coupe",
                status: "ENABLED",
                count:2272
              },
              {
                id: "21-2-1-3",
                labelName: "Roadster",
                status: "DISABLED"
              },
              {
                id: "21-2-1-4",
                labelName: "Multi-function wagon",
                status: "DISABLED"
              },
              {
                id: "21-2-122",
                labelName: "Station wagon",
                status: "DISABLED",
                count: 34
              }
            ]
          },
          {
            id: "21-2-2",
            labelName: "The intention of customers",
            status: "ENABLED",
            count: 364,
            children: [
              {
                id: "21-2-2-1",
                labelName: "Financial plan",
                status: "DISABLED"
              },
              {
                id: "21-2-2-2",
                labelName: "Appointment test drive",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "22",
    labelName: "Game",
    status: "ENABLED",
    count: 834,
    children: [
      {
        id: "22-1",
        labelName: "Online game",
        status: "DISABLED"
      },
      {
        id: "22-2",
        labelName: "Mobile game",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "23",
    labelName: "Digital",
    status: "ENABLED",
    count:2234,
    children: [
      {
        id: "23-1",
        labelName: "Tablet",
        status: "ENABLED",
        children: []
      },
      {
        id: "23-2",
        labelName: "Computer",
        status: "DISABLED",
        children: [
          {
            id: "23-2-1",
            labelName: "Microsoft Surface Book",
            status: "ENABLED",
            count: 103
          },
          {
            id: "23-2-1",
            labelName: "Macbook Pro",
            status: "ENABLED",
            count: 103
          }
        ]
       },
      {
        id: "23-3",
        labelName: "Watch",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "24",
    labelName: "Phone",
    status: "ENABLED",
    children: [
      {
        id: "24-1",
        labelName: "Samsung",
        status: "ENABLED",
        count: 460
      },
      {
        id: "24-2",
        labelName: "Apple",
        status: "ENABLED",
        children: [
          {
            id: "24-2-1",
            labelName: "iPhone 11",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "24-2-1-1",
                labelName: "in Midnight Green",
                status: "DISABLED",
                count:2272
              },
              {
                id: "24-2-1-2",
                labelName: "in Purple",
                status: "ENABLED",
                count:2272
              },
              {
                id: "24-2-1-3",
                labelName: "in Red",
                status: "DISABLED"
              },
              {
                id: "24-2-1-4",
                labelName: "in Black",
                status: "DISABLED"
              },
              {
                id: "24-2-122",
                labelName: "in White",
                status: "DISABLED",
                count: 34
              }
            ]
          },
          {
            id: "24-2-2",
            labelName: "iPhone 11 Pro",
            status: "ENABLED",
            count: 364,
            children: [
              {
                id: "24-2-2-1",
                labelName: "with 226 GB",
                status: "DISABLED"
              },
              {
                id: "24-2-2-2",
                labelName: "with2212 GB",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '25',
    labelName: 'Furniture ',
    status: 'ENABLED',
    children: [
      {
        id: '25-1',
        labelName: 'Living Room',
        status: 'ENABLED',
        count: 460
      },
      {
        id: '25-2',
        labelName: 'Dining Room',
        status: 'ENABLED',
        children: [
          {
            id: '25-2-1',
            labelName: 'Wood',
            status: 'ENABLED',
            count: 103,
            children: [
              {
                id: '25-2-1-1',
                labelName: '6 Chairs',
                status: 'DISABLED',
                count:2272
              },
              {
                id: '25-2-1-2',
                labelName: '1 Table',
                status: 'ENABLED',
                count:2272
              },
            ]
          },
          {
            id: '25-2-2',
            labelName: 'Glass',
            status: 'ENABLED',
            count: 364,
            children: [
              {
                id: '25-2-2-1',
                labelName: 'Cutlery',
                status: 'DISABLED'
              },
              {
                id: '25-2-2-2',
                labelName: 'Crockery',
                status: 'ENABLED'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '26',
    labelName: 'House',
    status: 'ENABLED',
    count: 834,
    children: [
      {
        id: '26-1',
        labelName: 'Villas',
        status: 'DISABLED'
      },
      {
        id: '26-2',
        labelName: 'Apartment',
        status: 'ENABLED'
      },
      {
        id: '26-2',
        labelName: 'Penthouse',
        status: 'ENABLED'
      }
  
    ]
  },
  {
    id: '27',
    labelName: 'University',
    status: 'ENABLED',
    count:2234,
    children: [
      {
        id: '27-1',
        labelName: 'Faculty',
        status: 'ENABLED',
        children: []
      },
      {
        id: '27-2',
        labelName: 'Administration',
        status: 'DISABLED'
      },
      {
        id: '27-3',
        labelName: 'Students',
        status: 'ENABLED'
      }
    ]
  },
  {
    id: "28",
    labelName: "Car",
    status: "ENABLED",
    children: [
      {
        id: "28-1",
        labelName: "Mercedes Benz",
        status: "ENABLED",
        count: 460
      },
      {
        id: "28-2",
        labelName: "BMW",
        status: "ENABLED",
        children: [
          {
            id: "28-2-1",
            labelName: "2 series",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "28-2-1-1",
                labelName: "Sporty hatchback",
                status: "DISABLED",
                count:2972
              },
              {
                id: "28-2-1-2",
                labelName: "Coupe",
                status: "ENABLED",
                count:2972
              },
              {
                id: "28-2-1-3",
                labelName: "Roadster",
                status: "DISABLED"
              },
              {
                id: "28-2-1-4",
                labelName: "Multi-function wagon",
                status: "DISABLED"
              },
              {
                id: "28-2-129",
                labelName: "Station wagon",
                status: "DISABLED",
                count: 33
              }
            ]
          },
          {
            id: "28-2-2",
            labelName: "The intention of customers",
            status: "ENABLED",
            count: 364,
            children: [
              {
                id: "28-2-2-1",
                labelName: "Financial plan",
                status: "DISABLED"
              },
              {
                id: "28-2-2-2",
                labelName: "Appointment test drive",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "29",
    labelName: "Game",
    status: "ENABLED",
    count: 833,
    children: [
      {
        id: "29-1",
        labelName: "Online game",
        status: "DISABLED"
      },
      {
        id: "29-2",
        labelName: "Mobile game",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "30",
    labelName: "Digital",
    status: "ENABLED",
    count:2933,
    children: [
      {
        id: "30-1",
        labelName: "Tablet",
        status: "ENABLED",
        children: []
      },
      {
        id: "30-2",
        labelName: "Computer",
        status: "DISABLED",
        children: [
          {
            id: "30-2-1",
            labelName: "Microsoft Surface Book",
            status: "ENABLED",
            count: 103
          },
          {
            id: "30-2-1",
            labelName: "Macbook Pro",
            status: "ENABLED",
            count: 103
          }
        ]
       },
      {
        id: "30-3",
        labelName: "Watch",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "31",
    labelName: "Phone",
    status: "ENABLED",
    children: [
      {
        id: "31-1",
        labelName: "Samsung",
        status: "ENABLED",
        count: 460
      },
      {
        id: "31-2",
        labelName: "Apple",
        status: "ENABLED",
        children: [
          {
            id: "31-2-1",
            labelName: "iPhone 11",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "31-2-1-1",
                labelName: "in Midnight Green",
                status: "DISABLED",
                count:2972
              },
              {
                id: "31-2-1-2",
                labelName: "in Purple",
                status: "ENABLED",
                count:2972
              },
              {
                id: "31-2-1-3",
                labelName: "in Red",
                status: "DISABLED"
              },
              {
                id: "31-2-1-4",
                labelName: "in Black",
                status: "DISABLED"
              },
              {
                id: "31-2-129",
                labelName: "in White",
                status: "DISABLED",
                count: 33
              }
            ]
          },
          {
            id: "31-2-2",
            labelName: "iPhone 11 Pro",
            status: "ENABLED",
            count: 364,
            children: [
              {
                id: "31-2-2-1",
                labelName: "with 296 GB",
                status: "DISABLED"
              },
              {
                id: "31-2-2-2",
                labelName: "with2912 GB",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '32',
    labelName: 'Furniture ',
    status: 'ENABLED',
    children: [
      {
        id: '32-1',
        labelName: 'Living Room',
        status: 'ENABLED',
        count: 460
      },
      {
        id: '32-2',
        labelName: 'Dining Room',
        status: 'ENABLED',
        children: [
          {
            id: '32-2-1',
            labelName: 'Wood',
            status: 'ENABLED',
            count: 103,
            children: [
              {
                id: '32-2-1-1',
                labelName: '6 Chairs',
                status: 'DISABLED',
                count:2972
              },
              {
                id: '32-2-1-2',
                labelName: '1 Table',
                status: 'ENABLED',
                count:2972
              },
            ]
          },
          {
            id: '32-2-2',
            labelName: 'Glass',
            status: 'ENABLED',
            count: 364,
            children: [
              {
                id: '32-2-2-1',
                labelName: 'Cutlery',
                status: 'DISABLED'
              },
              {
                id: '32-2-2-2',
                labelName: 'Crockery',
                status: 'ENABLED'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '33',
    labelName: 'House',
    status: 'ENABLED',
    count: 833,
    children: [
      {
        id: '33-1',
        labelName: 'Villas',
        status: 'DISABLED'
      },
      {
        id: '33-2',
        labelName: 'Apartment',
        status: 'ENABLED'
      },
      {
        id: '33-2',
        labelName: 'Penthouse',
        status: 'ENABLED'
      }
  
    ]
  },
  {
    id: '34',
    labelName: 'University',
    status: 'ENABLED',
    count:2933,
    children: [
      {
        id: '34-1',
        labelName: 'Faculty',
        status: 'ENABLED',
        children: []
      },
      {
        id: '34-2',
        labelName: 'Administration',
        status: 'DISABLED'
      },
      {
        id: '34-3',
        labelName: 'Students',
        status: 'ENABLED'
      }
    ]
  },
  {
    id: "35",
    labelName: "Car",
    status: "ENABLED",
    children: [
      {
        id: "35-1",
        labelName: "Mercedes Benz",
        status: "ENABLED",
        count: 460
      },
      {
        id: "35-2",
        labelName: "BMW",
        status: "ENABLED",
        children: [
          {
            id: "35-2-1",
            labelName: "2 series",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "35-2-1-1",
                labelName: "Sporty hatchback",
                status: "DISABLED",
                count:3672
              },
              {
                id: "35-2-1-2",
                labelName: "Coupe",
                status: "ENABLED",
                count:3672
              },
              {
                id: "35-2-1-3",
                labelName: "Roadster",
                status: "DISABLED"
              },
              {
                id: "35-2-1-4",
                labelName: "Multi-function wagon",
                status: "DISABLED"
              },
              {
                id: "35-2-136",
                labelName: "Station wagon",
                status: "DISABLED",
                count: 40
              }
            ]
          },
          {
            id: "35-2-2",
            labelName: "The intention of customers",
            status: "ENABLED",
            count: 364,
            children: [
              {
                id: "35-2-2-1",
                labelName: "Financial plan",
                status: "DISABLED"
              },
              {
                id: "35-2-2-2",
                labelName: "Appointment test drive",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "36",
    labelName: "Game",
    status: "ENABLED",
    count: 840,
    children: [
      {
        id: "36-1",
        labelName: "Online game",
        status: "DISABLED"
      },
      {
        id: "36-2",
        labelName: "Mobile game",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "37",
    labelName: "Digital",
    status: "ENABLED",
    count:3640,
    children: [
      {
        id: "37-1",
        labelName: "Tablet",
        status: "ENABLED",
        children: []
      },
      {
        id: "37-2",
        labelName: "Computer",
        status: "DISABLED",
        children: [
          {
            id: "37-2-1",
            labelName: "Microsoft Surface Book",
            status: "ENABLED",
            count: 103
          },
          {
            id: "37-2-1",
            labelName: "Macbook Pro",
            status: "ENABLED",
            count: 103
          }
        ]
       },
      {
        id: "37-3",
        labelName: "Watch",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "38",
    labelName: "Phone",
    status: "ENABLED",
    children: [
      {
        id: "38-1",
        labelName: "Samsung",
        status: "ENABLED",
        count: 460
      },
      {
        id: "38-2",
        labelName: "Apple",
        status: "ENABLED",
        children: [
          {
            id: "38-2-1",
            labelName: "iPhone 11",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "38-2-1-1",
                labelName: "in Midnight Green",
                status: "DISABLED",
                count:3672
              },
              {
                id: "38-2-1-2",
                labelName: "in Purple",
                status: "ENABLED",
                count:3672
              },
              {
                id: "38-2-1-3",
                labelName: "in Red",
                status: "DISABLED"
              },
              {
                id: "38-2-1-4",
                labelName: "in Black",
                status: "DISABLED"
              },
              {
                id: "38-2-136",
                labelName: "in White",
                status: "DISABLED",
                count: 40
              }
            ]
          },
          {
            id: "38-2-2",
            labelName: "iPhone 11 Pro",
            status: "ENABLED",
            count: 364,
            children: [
              {
                id: "38-2-2-1",
                labelName: "with 366 GB",
                status: "DISABLED"
              },
              {
                id: "38-2-2-2",
                labelName: "with3612 GB",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '39',
    labelName: 'Furniture ',
    status: 'ENABLED',
    children: [
      {
        id: '39-1',
        labelName: 'Living Room',
        status: 'ENABLED',
        count: 460
      },
      {
        id: '39-2',
        labelName: 'Dining Room',
        status: 'ENABLED',
        children: [
          {
            id: '39-2-1',
            labelName: 'Wood',
            status: 'ENABLED',
            count: 103,
            children: [
              {
                id: '39-2-1-1',
                labelName: '6 Chairs',
                status: 'DISABLED',
                count:3672
              },
              {
                id: '39-2-1-2',
                labelName: '1 Table',
                status: 'ENABLED',
                count:3672
              },
            ]
          },
          {
            id: '39-2-2',
            labelName: 'Glass',
            status: 'ENABLED',
            count: 364,
            children: [
              {
                id: '39-2-2-1',
                labelName: 'Cutlery',
                status: 'DISABLED'
              },
              {
                id: '39-2-2-2',
                labelName: 'Crockery',
                status: 'ENABLED'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '40',
    labelName: 'House',
    status: 'ENABLED',
    count: 840,
    children: [
      {
        id: '40-1',
        labelName: 'Villas',
        status: 'DISABLED'
      },
      {
        id: '40-2',
        labelName: 'Apartment',
        status: 'ENABLED'
      },
      {
        id: '40-2',
        labelName: 'Penthouse',
        status: 'ENABLED'
      }
  
    ]
  },
  {
    id: '41',
    labelName: 'University',
    status: 'ENABLED',
    count:3640,
    children: [
      {
        id: '41-1',
        labelName: 'Faculty',
        status: 'ENABLED',
        children: []
      },
      {
        id: '41-2',
        labelName: 'Administration',
        status: 'DISABLED'
      },
      {
        id: '41-3',
        labelName: 'Students',
        status: 'ENABLED'
      }
    ]
  },
  {
    id: "42",
    labelName: "Car",
    status: "ENABLED",
    children: [
      {
        id: "42-1",
        labelName: "Mercedes Benz",
        status: "ENABLED",
        count: 460
      },
      {
        id: "42-2",
        labelName: "BMW",
        status: "ENABLED",
        children: [
          {
            id: "42-2-1",
            labelName: "2 series",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "42-2-1-1",
                labelName: "Sporty hatchback",
                status: "DISABLED",
                count:4442
              },
              {
                id: "42-2-1-2",
                labelName: "Coupe",
                status: "ENABLED",
                count:4442
              },
              {
                id: "42-2-1-3",
                labelName: "Roadster",
                status: "DISABLED"
              },
              {
                id: "42-2-1-4",
                labelName: "Multi-function wagon",
                status: "DISABLED"
              },
              {
                id: "42-2-143",
                labelName: "Station wagon",
                status: "DISABLED",
                count: 47
              }
            ]
          },
          {
            id: "42-2-2",
            labelName: "The intention of customers",
            status: "ENABLED",
            count: 434,
            children: [
              {
                id: "42-2-2-1",
                labelName: "Financial plan",
                status: "DISABLED"
              },
              {
                id: "42-2-2-2",
                labelName: "Appointment test drive",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "43",
    labelName: "Game",
    status: "ENABLED",
    count: 847,
    children: [
      {
        id: "43-1",
        labelName: "Online game",
        status: "DISABLED"
      },
      {
        id: "43-2",
        labelName: "Mobile game",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "44",
    labelName: "Digital",
    status: "ENABLED",
    count:4347,
    children: [
      {
        id: "44-1",
        labelName: "Tablet",
        status: "ENABLED",
        children: []
      },
      {
        id: "44-2",
        labelName: "Computer",
        status: "DISABLED",
        children: [
          {
            id: "44-2-1",
            labelName: "Microsoft Surface Book",
            status: "ENABLED",
            count: 103
          },
          {
            id: "44-2-1",
            labelName: "Macbook Pro",
            status: "ENABLED",
            count: 103
          }
        ]
       },
      {
        id: "44-3",
        labelName: "Watch",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "45",
    labelName: "Phone",
    status: "ENABLED",
    children: [
      {
        id: "45-1",
        labelName: "Samsung",
        status: "ENABLED",
        count: 460
      },
      {
        id: "45-2",
        labelName: "Apple",
        status: "ENABLED",
        children: [
          {
            id: "45-2-1",
            labelName: "iPhone 11",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "45-2-1-1",
                labelName: "in Midnight Green",
                status: "DISABLED",
                count:4442
              },
              {
                id: "45-2-1-2",
                labelName: "in Purple",
                status: "ENABLED",
                count:4442
              },
              {
                id: "45-2-1-3",
                labelName: "in Red",
                status: "DISABLED"
              },
              {
                id: "45-2-1-4",
                labelName: "in Black",
                status: "DISABLED"
              },
              {
                id: "45-2-143",
                labelName: "in White",
                status: "DISABLED",
                count: 47
              }
            ]
          },
          {
            id: "45-2-2",
            labelName: "iPhone 11 Pro",
            status: "ENABLED",
            count: 434,
            children: [
              {
                id: "45-2-2-1",
                labelName: "with 436 GB",
                status: "DISABLED"
              },
              {
                id: "45-2-2-2",
                labelName: "with4312 GB",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '46',
    labelName: 'Furniture ',
    status: 'ENABLED',
    children: [
      {
        id: '46-1',
        labelName: 'Living Room',
        status: 'ENABLED',
        count: 460
      },
      {
        id: '46-2',
        labelName: 'Dining Room',
        status: 'ENABLED',
        children: [
          {
            id: '46-2-1',
            labelName: 'Wood',
            status: 'ENABLED',
            count: 103,
            children: [
              {
                id: '46-2-1-1',
                labelName: '6 Chairs',
                status: 'DISABLED',
                count:4442
              },
              {
                id: '46-2-1-2',
                labelName: '1 Table',
                status: 'ENABLED',
                count:4442
              },
            ]
          },
          {
            id: '46-2-2',
            labelName: 'Glass',
            status: 'ENABLED',
            count: 434,
            children: [
              {
                id: '46-2-2-1',
                labelName: 'Cutlery',
                status: 'DISABLED'
              },
              {
                id: '46-2-2-2',
                labelName: 'Crockery',
                status: 'ENABLED'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '47',
    labelName: 'House',
    status: 'ENABLED',
    count: 847,
    children: [
      {
        id: '47-1',
        labelName: 'Villas',
        status: 'DISABLED'
      },
      {
        id: '47-2',
        labelName: 'Apartment',
        status: 'ENABLED'
      },
      {
        id: '47-2',
        labelName: 'Penthouse',
        status: 'ENABLED'
      }
  
    ]
  },
  {
    id: '48',
    labelName: 'University',
    status: 'ENABLED',
    count:4347,
    children: [
      {
        id: '48-1',
        labelName: 'Faculty',
        status: 'ENABLED',
        children: []
      },
      {
        id: '48-2',
        labelName: 'Administration',
        status: 'DISABLED'
      },
      {
        id: '48-3',
        labelName: 'Students',
        status: 'ENABLED'
      }
    ]
  },
  {
    id: '49',
    labelName: 'Hot Beverages',
    status: 'ENABLED',
    count:4347,
    children: [
      {
        id: '49-1',
        labelName: 'Tea',
        status: 'ENABLED',
        children: []
      },
      {
        id: '49-2',
        labelName: 'Coffee',
        status: 'DISABLED'
      },
      {
        id: '49-3',
        labelName: 'Milk',
        status: 'ENABLED'
      }
    ]
  },
  {
    id: '50',
    labelName: 'Pet Animals',
    status: 'ENABLED',
    count:4347,
    children: [
      {
        id: '50-1',
        labelName: 'Dog',
        status: 'ENABLED',
        children: [
          {
            id: '50-1-1',
            labelName: 'Pug',
            status: 'DISABLED'
          },
          {
            id: '50-1-2',
            labelName: 'Beagle',
            status: 'ENABLED'
          }
        ]
      },
      {
        id: '50-2',
        labelName: 'Cat',
        status: 'DISABLED'
      },
      
    ]
  },
];


const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
  return (
    <Cell {...props} style={{ padding: '6px 0' }}>
      <Button
        appearance="link"
        onClick={() => {
         alert('clicked'+rowData.id)
        }}
      >
        {rowData.status === 'EDIT' ? 'Save' : 'Edit'}
      </Button>
    </Cell>
  );
};



//Checkbox
// const SelectionCell = ({ rowData, dataKey, onClick, ...props }) => {
//   return (
//     <Cell {...props} style={{ padding: '6px 0' }}>
//       <Checkbox
//       onChange = {(ele,newChecked)=>{
//         debugger;
//         this.state
//         //onChange(rowData,newChecked)
//       }}
     
//         onClick={() => {
//          alert('clicked'+rowData.id)
//         }}
//       >
//       </Checkbox>
//     </Cell>
//   );
// };



class TableTree extends React.Component<any,any> {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      height: 500,
      displayLength: 10,
      loading: false,
      page: 3,
      rowId:null,
      scroll:false
    };
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeLength = this.handleChangeLength.bind(this);
  }
  myRef = React.createRef<TableTree>()
  body;

  SelectionCell = ({ rowData, dataKey, onClick, ...props }) => {
    return (
      <Cell {...props} style={{ padding: '6px 0' }}>
        <Checkbox
        onChange = {(ele,newChecked)=>{
          debugger;
          console.log(this.body)
          let scroll = scrollTop(this.body.scrollHeight);
          //alert(scroll)
          console.log(this.body)
          if(this.state.scroll)
          this.setState({scroll:false})
         if(this.state.rowId!=rowData.id)
             this.setState({rowId:rowData.id},()=>{/*scrollTop(this.body.parentElement,scroll)*/})
             else
             this.setState({rowId:null},()=>{/*scrollTop(this.body.parentElement,scroll)*/})
        }}
        checked = {this.state.rowId==rowData.id}
       
          onClick={() => {
           alert('clicked'+rowData.id)
          }}
        >
        </Checkbox>
      </Cell>
    );
  };
  
  changeHeight = () => {
    const cur_height = this.state.height;
    this.setState({
      height: cur_height === 400 ? 200 : 400,
      scroll:true
    });
  };
  handleChangePage(dataKey) {
    this.setState({
      page: dataKey
    });
  }

  handleChangeLength(dataKey) {
    this.setState({
      page: 4,
      displayLength: dataKey
    });
  }

  getData() {
    const { displayLength, page } = this.state;

    return data.filter((v, i) => {
      const start = displayLength * (page - 1);
      const end = start + displayLength;
      return i >= start && i < end;
    });
  }
  // addData = () => {
  //   debugger;
  //   const cur_data = [...this.state.data, ...this.state.data];
  //   console.table(this.state.data);
  //   this.setState(
  //     {
  //       data: cur_data
  //     },
  //     () => {
  //       console.table(this.state.data);
  //     }
  //   );
  // };
 
  render() {
    //const { data, height } = this.state;
    const data = this.getData();
    const { loading, displayLength, page, height } = this.state;

    return (
      <div>
        <Button
          onClick={this.changeHeight}
        >{`Change Height${height}`}</Button>
        {/* <Button onClick={this.addData}>添加数据</Button> */}
        <Table
        bodyRef={ref => {
          this.body = ref;
        }}

        rowClassName={rowData => {
          if (this.state.rowId && rowData && rowData.id == this.state.rowId) {
            return 'custom-row-select';
          }
          return 'default-row';
        }}
          isTree
          virtualized
          rowKey="id"
          height={height}
          shouldUpdateScroll={this.state.scroll}
          data={data}
          onExpandChange={(isOpen, rowData) => {
            console.log(isOpen, rowData);
          }}
          defaultExpandedRowKeys = {["1","1-1"]}
          onRowClick = {(rowData) =>{
            // if(this.state.rowId!=rowData.id)
            //  this.setState({rowId:rowData.id})
            //  else
            //  this.setState({rowId:null})
          }}

          // renderTreeToggle={(icon, rowData) => {
          //   if (rowData.children && rowData.children.length === 0) {
          //     return <Icon icon="spinner" spin />;
          //   }
          //   return icon;
          // }}
        >

          <Column width={50} align={'right'} verticalAlign={'middle'}>
            <HeaderCell>Label</HeaderCell>
            <this.SelectionCell dataKey="id" rowData={{}} onClick={()=>{}} align={'right'} verticalAlign={'middle'}/>
          </Column>

          <Column width={200} treeCol={true} sortable={true}>
            <HeaderCell>Label</HeaderCell>
            <Cell dataKey="labelName" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" ></Cell>
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <ActionCell dataKey="id" rowData={{}} onClick={()=>{}} />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={1000}>
            <HeaderCell>Image Upload</HeaderCell>
            <Cell dataKey="status" />
          </Column>
        </Table>

        <TablePagination
          lengthMenu={[
            {
              value: 10,
              label: '10 rows'
            },
            {
              value: 20,
              label: '20 rows'
            },
            {
              value: 30,
              label: '30 rows'
            }
          ]}
          prev
          next
          first
          last
          activePage={page}
          displayLength={displayLength}
          total={data.length}
          onChangePage={this.handleChangePage}
          onChangeLength={this.handleChangeLength}
        />
        <div><ImageUpload />  </div>
      </div>


    );
  }
}

export default TableTree
