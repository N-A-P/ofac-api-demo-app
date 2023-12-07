// {
// 	"apiKey": "c604aea8-72a4-41bc-aca3-f6988677e209",
// 	"minScore": 95,
// 	"source": ["SDN"],
// 	"cases": [{
// 		"name": "Abu Abbas",
// 		"dob": "1971-10-16"
// 	}]
// }

import {POST} from './networking';

export function searchByName({name, dob}: any) {
  return POST({
    url: '',
    data: {
      minScore: 95,
      source: ['SDN'],
      cases: [
        {
          name: name,
          dob: dob,
        },
      ],
    },
  });
}
