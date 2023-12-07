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
