export const products = [
  {
    id: 1,
    type: 'fixed',
    name: 'Bored Ape 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://www.cointribune.com/app/uploads/2021/09/bayc2.jpg?nowebp',
    'author_id': 200,
    'likes_ids': [201, 202],
    price: 2,
    currency: 'ETH'
  },
  {
    id: 2,
    type: 'fixed',
    name: 'Bored Ape 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://lh3.googleusercontent.com/ULjfyo4LJhtV3J9K7lu1xh0YZQBa6WHPp-cwlV2C9sUIyTpgSlv554mh_97fRXsziOIu9xwpukl5NQoDbkE3mlXlWR8zU7qcWQsxVg=w577',
    'author_id': 200,
    'likes_ids': [201],
    price: 1.1,
    currency: 'ETH'
  },
  {
    id: 3,
    type: 'fixed',
    name: 'Mutant Ape 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://lh3.googleusercontent.com/4Vx7v2cqrtyq8KVI1pOKM4dbpKqrBYBiHrLROIkwhJeB9B-KC88yGuiJFKXhTy6O2OWURWYaB3paldUyyX5dm4CzjcQXo5LshEf17A=w577',
    'author_id': 201,
    'likes_ids': [],
    price: 22.5,
    currency: 'USDT'
  },
  {
    id: 4,
    type: 'auction',
    'start_time': 1646382192586,
    'end_time': 1659982192586,
    name: 'VOX Collectibles: Mirandus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://lh3.googleusercontent.com/8bTPA0yoPMAoq-Wi0BwXVW0_Q6rR9SwoRs2yaLLVe8eyMjRvYxob3Jzd3ZJd-P4gaRf1zgOtZun9W2Qhlf3HIrTrO50mysN1jTlE=w577',
    'author_id': 200,
    'likes_ids': [201, 202],
    'start_price': 0.2,
    currency: 'ETH'
  },
  {
    id: 5,
    type: 'auction',
    'start_time': 1646382192586,
    'end_time': 1659982192586,
    name: 'VOX Collectibles: Mirandus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://lh3.googleusercontent.com/gaFikkf0ZqKVXUgLya-S5Z4SLNO_sBJF5oaIXPA2FOk0Rsc908_tAmUbtrPoOaH0uzetN4KyUaPV58trs_2SEl15P8pFn6qP0CFBsg=w577',
    'author_id': 202,
    'likes_ids': [200],
    'start_price': 0.5,
    currency: 'ETH'
  },
  {
    id: 6,
    type: 'auction',
    'start_time': 1646382192586,
    'end_time': 1659982192586,
    name: 'VOX Collectibles: Mirandus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://lh3.googleusercontent.com/jL95lVWzdUaLcGF0ukoDlX7Eqr1l9b9KcmUuVMXwbo_pdUYAv89rDI19_Dgap3-Uidj5BrDt9A7OPHvG2FlmdP8ZCQM6QPTnlmphoA=w577',
    'author_id': 200,
    'likes_ids': [],
    'start_price': 200,
    currency: 'USDT'
  }
];

export const users = [
  {
    id: 200,
    name: 'Author name 1',
    image: 'https://bit.ly/dan-abramov',
    isOnline: true,
    'arts_id': [1, 2, 4, 6],
    likes: [5]
  },
  {
    id: 201,
    name: 'Humanoid',
    image: 'https://lh3.googleusercontent.com/Lc1WjLkXFmgyRnDYeTQWsBwNeZza_JWhEoG9FyPQhwuEZ5ZKPvT7IoiwUB3Q6emZv598n3dbVnlvOXo_SBqxNv4Ngctjcs58fpfFtWs=w577',
    isOnline: true,
    'arts_id': [3],
    likes: [1, 2, 4]
  },
  {
    id: 202,
    name: 'DentedFeelsNFT',
    image: 'https://lh3.googleusercontent.com/qOhsdENhpC2i83_0cWo3Dar7JmV0g183zRehA9qGajLLQI01AonhDwKf3sBJraJ8lVzJxVpGmF2ibq3DZSZOkPmxXdCs3-iXMa8Aew=w577',
    isOnline: false,
    'arts_id': [5],
    likes: [1, 4]
  },
  {
    id: 203,
    name: 'Ghost',
    image: 'https://lh3.googleusercontent.com/bO30vM0gUh6YpVVdS6dPRapMEniwjM4C_XKDOCkQPCqsu6DnnwBhb4tKoBG4CCDDMtuwJZT5XtHDrcQezd95LRLzz2RM4zreocvjEA=s130',
    isOnline: true,
    'arts_id': [],
    likes: []
  }
];