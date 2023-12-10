const users = [
  {
    id: '71718621-4643-4217-a851-85d516e7455f',
    name: 'Md. Mahadi Hassan Riyadh',
    phone: '01700000000',
    email: 'riyadh.al.nur@gmail.com',
    address: 'Uttara, Dhaka',
    role: 'president',
    type: 'donor',
    password: '123456',
  },
  {
    id: '7932388d-dbdd-4408-b2cd-222471eb1846',
    name: 'Saifullah Anjar',
    phone: '01700000000',
    email: 'anjar@gmail.com',
    address: 'Dhanmondi, Dhaka',
    role: 'moderator',
    type: 'donor',
    password: '123456',
  },
  {
    id: '3dbe4f32-a78c-4f8f-81a5-e7e9b87a8c2c',
    name: 'Ramisa Nidhi',
    phone: '01700000019',
    email: 'nidhi@gmail.com',
    address: 'Arambagh, Dhaka',
    role: 'moderator',
    type: 'donor',
    password: '123456',
  },
  {
    id: '8718135a-183c-406f-b9ea-44b5f9c42198',
    name: 'Tanzim Sabib',
    phone: '01700000021',
    email: 'tanzim@gmail.com',
    address: 'Puran Dhaka, Bangladesh',
    role: 'moderator',
    type: 'donor',
    password: '123456',
  },
  {
    id: '2449a54c-381f-41e3-8d7e-ec79f3493584',
    name: 'Tazbid Tasin',
    phone: '01700000001',
    email: 'tasin@gmail.com',
    address: 'Gulshan, Dhaka',
    role: 'moderator',
    type: 'donor',
    password: '123456',
  },
  {
    id: '6810ab1d-451c-4708-b82a-82b8059f12e7',
    name: 'Jane Smith',
    phone: '01700000002',
    email: 'janesmith@gmail.com',
    address: 'London, UK',
    role: 'moderator',
    type: 'donor',
    password: '123456',
  },
  {
    id: '9b768298-2f8e-4c87-a105-881c689ab486',
    name: 'Robert Johnson',
    phone: '01700000003',
    email: 'robertjohnson@gmail.com',
    address: 'Sydney, Australia',
    role: null,
    type: 'donor',
    password: '123456',
  },
  {
    id: 'b7a616b9-5375-4086-a8b2-d19163443288',
    name: 'Alice Williams',
    phone: '01700000004',
    email: 'alicewilliams@gmail.com',
    address: 'Toronto, Canada',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '533f2383-a858-4468-91c8-899454f06fe6',
    name: 'David Brown',
    phone: '01700000005',
    email: 'davidbrown@gmail.com',
    address: 'Paris, France',
    role: null,
    type: 'donor',
    password: '123456',
  },
  {
    id: 'f7529b53-0a45-433d-b544-e92f2c308c77',
    name: 'Emma Jones',
    phone: '01700000006',
    email: 'emmajones@gmail.com',
    address: 'Berlin, Germany',
    role: 'moderator',
    type: 'donor',
    password: '123456',
  },
  {
    id: 'a41bd1f2-d951-4e5f-96e1-43d7d003595e',
    name: 'Michael Miller',
    phone: '01700000007',
    email: 'michaelmiller@gmail.com',
    address: 'Tokyo, Japan',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '3f349d27-7347-447c-b994-ae41a5a74bc6',
    name: 'Sophia Davis',
    phone: '01700000008',
    email: 'sophiadavis@gmail.com',
    address: 'Rome, Italy',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '4f20c55b-7dc4-4529-a949-30b447bd8e64',
    name: 'Oliver Taylor',
    phone: '01700000015',
    email: 'olivertaylor@gmail.com',
    address: 'Madrid, Spain',
    role: 'moderator',
    type: 'donor',
    password: '123456',
  },
  {
    id: '63889534-0928-4121-84fa-a993970b613f',
    name: 'Charlotte Wilson',
    phone: '01700000016',
    email: 'charlottewilson@gmail.com',
    address: 'Amsterdam, Netherlands',
    role: 'moderator',
    type: 'donor',
    password: '123456',
  },
  {
    id: 'c97156a5-0438-463e-940c-4741898c763d',
    name: 'Harper Thomas',
    phone: '01700000017',
    email: 'harperthomas@gmail.com',
    address: 'Vienna, Austria',
    role: 'moderator',
    type: 'donor',
    password: '123456',
  },
  {
    id: '09654831-dd46-4097-b997-f2430d0e0b78',
    name: 'Evelyn Jackson',
    phone: '01700000018',
    email: 'evelynjackson@gmail.com',
    address: 'Brussels, Belgium',
    role: 'moderator',
    type: 'donor',
    password: '123456',
  },
  {
    id: '09158c70-47a7-4801-9f55-3150e57b487b',
    name: 'Ava Harris',
    phone: '01700000020',
    email: 'avaharris@gmail.com',
    address: 'Helsinki, Finland',
    role: 'moderator',
    type: 'donor',
    password: '123456',
  },
  {
    id: '0672b946-6d67-4b51-a618-54b9fa48b910',
    name: 'Sophia Clark',
    phone: '01700000022',
    email: 'sophiaclark@gmail.com',
    address: 'Copenhagen, Denmark',
    role: 'moderator',
    type: 'donor',
    password: '123456',
  },
  {
    id: '5f7fa138-8b34-437a-9c65-5947e3224629',
    name: 'Lucas Rodriguez',
    phone: '01700000023',
    email: 'lucasrodriguez@gmail.com',
    address: 'Lisbon, Portugal',
    role: 'moderator',
    type: 'donor',
    password: '123456',
  },
  {
    id: '49f44928-2d2e-4366-a6f0-a7051ebd35b6',
    name: 'Chloe Lewis',
    phone: '01700000024',
    email: 'chloelewis@gmail.com',
    address: 'Dublin, Ireland',
    role: 'moderator',
    type: 'donor',
    password: '123456',
  },
  {
    id: '82fa368a-042f-4e93-9e42-417851094f15',
    name: 'Liam Miller',
    phone: '01700000025',
    email: 'liammiller@gmail.com',
    address: 'Stockholm, Sweden',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: 'b37f93f0-87fc-4998-b634-996a5661646b',
    name: 'Noah Smith',
    phone: '01700000026',
    email: 'noahsmith@gmail.com',
    address: 'Budapest, Hungary',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: 'd410766d-5449-425b-9621-7400553702d2',
    name: 'William Brown',
    phone: '01700000027',
    email: 'williambrown@gmail.com',
    address: 'Prague, Czech Republic',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: 'f4d25630-7087-4626-81b6-88ee73f4a605',
    name: 'James Johnson',
    phone: '01700000028',
    email: 'jamesjohnson@gmail.com',
    address: 'Warsaw, Poland',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '6b845f34-07f4-4cfe-a953-c29d8c11446f',
    name: 'Benjamin Jones',
    phone: '01700000029',
    email: 'benjaminjones@gmail.com',
    address: 'Kiev, Ukraine',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '5f8948f8-85c4-46b6-b049-774b04c57133',
    name: 'Logan Williams',
    phone: '01700000030',
    email: 'loganwilliams@gmail.com',
    address: 'Moscow, Russia',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '46633352-e231-4407-a2f5-d02ea9e89ec1',
    name: 'Alexander Taylor',
    phone: '01700000031',
    email: 'alexanderrtaylor@gmail.com',
    address: 'Istanbul, Turkey',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '386b1a4d-f337-45f8-a885-7a6f4d5e0676',
    name: 'Elijah Wilson',
    phone: '01700000032',
    email: 'elijahwilson@gmail.com',
    address: 'Dubai, UAE',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '700b843a-e72c-4036-b32d-416b7330471f',
    name: 'Jacob Jackson',
    phone: '01700000033',
    email: 'jacobjackson@gmail.com',
    address: 'Bangkok, Thailand',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: 'e6214dfa-ff62-4c55-9661-a48ffd5463df',
    name: 'Anthony White',
    phone: '01700000034',
    email: 'anthonywhite@gmail.com',
    address: 'Singapore',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: 'e44529f8-9edf-4490-8133-519eef24e0b9',
    name: 'Harrison Harris',
    phone: '01700000035',
    email: 'harrisondharris@gmail.com',
    address: 'Kuala Lumpur, Malaysia',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: 'c4718565-e9d7-42b8-9916-af2473362d7d',
    name: 'Daniel Martin',
    phone: '01700000036',
    email: 'danielmartin@gmail.com',
    address: 'Taipei, Taiwan',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '91ff2ee2-2988-40dd-bcc5-8b5b9ae7d6d7',
    name: 'Sebastian Clark',
    phone: '01700000037',
    email: 'sebastianclark@gmail.com',
    address: 'Seoul, South Korea',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },

  {
    id: '2449a54c-381f-41e3-8d7e-ec79f3493584',
    name: 'Mateo Garcia',
    phone: '01700000039',
    email: 'mateogarcia@gmail.com',
    address: 'Osaka, Japan',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '2449a54c-381f-41e3-8d7e-ec79f3493584',
    name: 'Julian Lopez',
    phone: '01700000040',
    email: 'julianlopez@gmail.com',
    address: 'Mexico City, Mexico',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '2449a54c-381f-41e3-8d7e-ec79f3493584',
    name: 'Wyatt Gonzalez',
    phone: '01700000041',
    email: 'wyattgonzalez@gmail.com',
    address: 'São Paulo, Brazil',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '2449a54c-381f-41e3-8d7e-ec79f3493584',
    name: 'Nathan Sanchez',
    phone: '01700000042',
    email: 'nathansanchez@gmail.com',
    address: 'Buenos Aires, Argentina',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: 'c4e67bce-ed9f-49e5-8fb9-4de2720ca627',
    name: 'Christopher Ramirez',
    phone: '01700000043',
    email: 'christopherramirez@gmail.com',
    address: 'Lima, Peru',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '577957a6-3c56-47b0-8998-b6abe432037b',
    name: 'Lucas Pérez',
    phone: '01700000044',
    email: 'lucasperez@gmail.com',
    address: 'Bogotá, Colombia',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '9703e59b-748e-470a-8321-9479e191178e',
    name: 'Jack Scott',
    phone: '01700000045',
    email: 'jackscott@gmail.com',
    address: 'Santiago, Chile',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '3a8b6e55-14dd-4691-8c3e-6627f57ffcc4',
    name: 'Ethan Edwards',
    phone: '01700000046',
    email: 'ethanedwards@gmail.com',
    address: 'Caracas, Venezuela',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: 'dc531e83-935a-4a2b-b972-f01c92d38197',
    name: 'Aiden Morgan',
    phone: '01700000047',
    email: 'aidenmorgan@gmail.com',
    address: 'Quito, Ecuador',
    role: 'volunteer',
    type: 'donor',
    password: '123456',
  },
  {
    id: '5ba2632e-80f9-4129-9532-845fd30e110e',
    name: 'Rabbi Hasan',
    phone: '01700000047',
    email: 'rabbi@gmail.com',
    address: 'Sydney, Australia',
    role: null,
    type: 'recipient',
    password: '123456',
  },
  {
    id: '13953a84-e63b-4ece-9f60-dd329baaf5e1',
    name: 'Junaid Ahmed',
    phone: '01700000047',
    email: 'junaid@gmail.com',
    address: 'Mirpur, Dhaka',
    role: null,
    type: 'recipient',
    password: '123456',
  },
  {
    id: '23e56313-7fca-48b9-9ab4-39fa3247a056',
    name: 'Sakib Khan',
    phone: '01700000047',
    email: 'sakib@gmail.com',
    address: 'Feni, Bangladesh',
    role: null,
    type: 'recipient',
    password: '123456',
  },
  {
    id: '584a1669-ee1e-43ea-8f78-d9fb44dd7241',
    name: 'Sumaiya Akter',
    phone: '01700000047',
    email: 'sumaiya@gmail.com',
    address: 'Jasore, Bangladesh',
    role: null,
    type: 'donor',
    password: '123456',
  },
  {
    id: '2feb3c7e-e923-4f07-981f-746e8409a847',
    name: 'Siddhartha Sarker',
    phone: '01700000047',
    email: 'siddhartha@gmail.com',
    address: 'Tangail, Bangladesh',
    role: null,
    type: 'recipient',
    password: '123456',
  },
  {
    id: '7f5fd25e-bfbb-487a-bc7f-33b4e94da628',
    name: 'Mirja Galib',
    phone: '01700000047',
    email: 'galib@gmail.com',
    address: 'Bramanbaria, Bangladesh',
    role: null,
    type: 'recipient',
    password: '123456',
  },
];

const campaigns = [
  {
    id: '11731e47-c8f6-473a-8b3d-16cb7eaee456',
    name: 'Ramadan Campaign 2023',
    campaign_leader_id: users[1].id,
    status: 'archived',
    timestamp: '2023-05-12 12:00:00',
  },
  {
    id: 'b0472fed-132f-4f2f-a473-e0d5f247e1c7',
    name: 'Eid Campaign 2023',
    campaign_leader_id: users[1].id,
    status: 'active',
    timestamp: '2020-04-11 12:30:00',
  },
  {
    id: 'fc399ab3-b73f-4d6d-a8a6-1140004b1250',
    name: 'Winter Campaign 2023',
    campaign_leader_id: users[2].id,
    status: 'active',
    timestamp: '2020-12-12 10:20:11',
  },
  {
    id: 'dd53931d-171f-4a21-9965-8a715b59ea58',
    name: 'Ramadan Campaign 2024',
    campaign_leader_id: users[3].id,
    status: 'active',
    timestamp: '2021-06-12 09:12:01',
  },
  {
    id: 'f9ce6e5a-0fe6-4c94-aa34-0a367495e6dc',
    name: 'Eid Campaign 2024',
    campaign_leader_id: users[3].id,
    status: 'active',
    timestamp: '2021-04-11 05:30:18',
  },
  {
    id: '624d64e4-13d4-4daf-ab54-8a7f60739071',
    name: 'Clean Water Campaign 2024',
    campaign_leader_id: users[2].id,
    status: 'archived',
    timestamp: '2021-03-11 12:00:00',
  },
  {
    id: '8f98c81a-313e-4143-bea5-3f25ee0e79de',
    name: 'Clean Clothes Campaign 2024',
    campaign_leader_id: users[1].id,
    status: 'active',
    timestamp: '2021-03-11 12:00:00',
  },
  {
    id: 'b3a81091-63a6-42c0-8a1c-9fbbb7d375e0',
    name: 'Public Health Campaign 2024',
    campaign_leader_id: users[3].id,
    status: 'archived',
    timestamp: '2021-03-11 12:00:00',
  },
];

const teams = [
  {
    id: '70778cc4-4667-4c37-8354-ab97bf58906c',
    name: 'Pheonix Knights',
    district: 'Dhaka',
    status: 'active',
    team_leader_id: '7932388d-dbdd-4408-b2cd-222471eb1846',
    campaign_id: '11731e47-c8f6-473a-8b3d-16cb7eaee456',
  },
  {
    id: 'c738c231-8a87-4495-947a-1691558b2545',
    name: 'Final Crusaders',
    district: 'Dhaka',
    status: 'active',
    team_leader_id: '6810ab1d-451c-4708-b82a-82b8059f12e7',
    campaign_id: '11731e47-c8f6-473a-8b3d-16cb7eaee456',
  },
  {
    id: 'f26df159-869a-445e-9f5d-c24fb826cd1b',
    name: 'Knights of the Round Table',
    district: 'Sylhet',
    status: 'archived',
    team_leader_id: '7932388d-dbdd-4408-b2cd-222471eb1846',
    campaign_id: 'b0472fed-132f-4f2f-a473-e0d5f247e1c7',
  },
  {
    id: 'fc39ba31-8c4b-4c8f-bd2b-8d68be09b397',
    name: 'Zombie Slayers',
    district: 'Chittagong',
    status: 'active',
    team_leader_id: 'c97156a5-0438-463e-940c-4741898c763d',
    campaign_id: 'b0472fed-132f-4f2f-a473-e0d5f247e1c7',
  },
  {
    id: '01396bfd-2181-4788-8623-c049c0723a2e',
    name: 'Elite Mercenaries',
    district: 'Dhaka',
    status: 'archived',
    team_leader_id: '7932388d-dbdd-4408-b2cd-222471eb1846',
    campaign_id: 'fc399ab3-b73f-4d6d-a8a6-1140004b1250',
  },
  {
    id: '23169114-c097-42e1-a7a6-08c67b82ab91',
    name: 'Bounty Hunters',
    district: 'Mymensingh',
    status: 'active',
    team_leader_id: '3dbe4f32-a78c-4f8f-81a5-e7e9b87a8c2c',
    campaign_id: 'dd53931d-171f-4a21-9965-8a715b59ea58',
  },
  {
    id: '01a85833-be45-46c7-a682-986d430541c7',
    name: 'Locked and Loaded',
    district: 'Dhaka',
    status: 'active',
    team_leader_id: '8718135a-183c-406f-b9ea-44b5f9c42198',
    campaign_id: 'fc399ab3-b73f-4d6d-a8a6-1140004b1250',
  },
  {
    id: '281c679d-9c82-4b27-9243-9f22981fbd04',
    name: 'Just Do It',
    district: 'Dhaka',
    status: 'archived',
    team_leader_id: '6810ab1d-451c-4708-b82a-82b8059f12e7',
    campaign_id: 'dd53931d-171f-4a21-9965-8a715b59ea58',
  },
  {
    id: '5bb965c6-2ddc-450c-b2cc-ed6311f3a288',
    name: 'Raiders',
    district: 'Cumilla',
    status: 'archived',
    team_leader_id: '6810ab1d-451c-4708-b82a-82b8059f12e7',
    campaign_id: 'f9ce6e5a-0fe6-4c94-aa34-0a367495e6dc',
  },
];

const volunteersWorksOrWorkedIn = [
  {
    volunteer_id: '2449a54c-381f-41e3-8d7e-ec79f3493584',
    team_id: '70778cc4-4667-4c37-8354-ab97bf58906c',
  },
  {
    volunteer_id: '2449a54c-381f-41e3-8d7e-ec79f3493584',
    team_id: 'f26df159-869a-445e-9f5d-c24fb826cd1b',
  },
  {
    volunteer_id: '2449a54c-381f-41e3-8d7e-ec79f3493584',
    team_id: '01396bfd-2181-4788-8623-c049c0723a2e',
  },
  {
    volunteer_id: 'a41bd1f2-d951-4e5f-96e1-43d7d003595e',
    team_id: 'c738c231-8a87-4495-947a-1691558b2545',
  },
  {
    volunteer_id: 'a41bd1f2-d951-4e5f-96e1-43d7d003595e',
    team_id: '281c679d-9c82-4b27-9243-9f22981fbd04',
  },
  {
    volunteer_id: '3f349d27-7347-447c-b994-ae41a5a74bc6',
    team_id: '23169114-c097-42e1-a7a6-08c67b82ab91',
  },
  {
    volunteer_id: 'b37f93f0-87fc-4998-b634-996a5661646b',
    team_id: 'fc39ba31-8c4b-4c8f-bd2b-8d68be09b397',
  },
  {
    volunteer_id: '6b845f34-07f4-4cfe-a953-c29d8c11446f',
    team_id: 'fc39ba31-8c4b-4c8f-bd2b-8d68be09b397',
  },
  {
    volunteer_id: '6b845f34-07f4-4cfe-a953-c29d8c11446f',
    team_id: '01396bfd-2181-4788-8623-c049c0723a2e',
  },
  {
    volunteer_id: '46633352-e231-4407-a2f5-d02ea9e89ec1',
    team_id: '23169114-c097-42e1-a7a6-08c67b82ab91',
  },
  {
    volunteer_id: 'e6214dfa-ff62-4c55-9661-a48ffd5463df',
    team_id: '70778cc4-4667-4c37-8354-ab97bf58906c',
  },
];

const donationItems = [
  {
    id: '69f91dd0-7245-499f-a0ef-54728b974ff4',
    name: 'Rice',
    unit: 'kg',
  },
  {
    id: '9adc5ae2-20aa-4876-bbc1-a025ab763667',
    name: 'Lentils',
    unit: 'kg',
  },
  {
    id: 'c957ee0f-231c-4daf-9d7e-36c240aec4bd',
    name: 'Potatoes',
    unit: 'kg',
  },
  {
    id: 'a00056bb-b6ad-4763-9e02-cbf4e966ac7d',
    name: 'Money',
    unit: 'BDT',
  },
  {
    id: 'e6048a84-6f67-4a7f-a0f0-5792f49c1000',
    name: 'Clothes',
    unit: 'piece',
  },
  {
    id: '50051103-c5c5-4b41-9fef-51953890d900',
    name: 'Books',
    unit: 'piece',
  },
  {
    id: 'd036a814-ae0f-4697-94c6-024b4f5e09a9',
    name: 'Toys',
    unit: 'piece',
  },
];

const campaignStocks = [
  {
    campaign_id: campaigns[0].id,
    donation_item_id: donationItems[3].id,
    quantity: 54000,
  },
  {
    campaign_id: campaigns[0].id,
    donation_item_id: donationItems[0].id,
    quantity: 230,
  },
  {
    campaign_id: campaigns[0].id,
    donation_item_id: donationItems[1].id,
    quantity: 250,
  },
  {
    campaign_id: campaigns[0].id,
    donation_item_id: donationItems[4].id,
    quantity: 30,
  },
  {
    campaign_id: campaigns[1].id,
    donation_item_id: donationItems[3].id,
    quantity: 75000,
  },
  {
    campaign_id: campaigns[1].id,
    donation_item_id: donationItems[0].id,
    quantity: 200,
  },
  {
    campaign_id: campaigns[1].id,
    donation_item_id: donationItems[4].id,
    quantity: 70,
  },
  {
    campaign_id: campaigns[2].id,
    donation_item_id: donationItems[3].id,
    quantity: 30000,
  },
  {
    campaign_id: campaigns[2].id,
    donation_item_id: donationItems[0].id,
    quantity: 120,
  },
  {
    campaign_id: campaigns[2].id,
    donation_item_id: donationItems[4].id,
    quantity: 17,
  },
  {
    campaign_id: campaigns[3].id,
    donation_item_id: donationItems[3].id,
    quantity: 45000,
  },
  {
    campaign_id: campaigns[3].id,
    donation_item_id: donationItems[4].id,
    quantity: 32,
  },
  {
    campaign_id: campaigns[4].id,
    donation_item_id: donationItems[3].id,
    quantity: 25000,
  },
  {
    campaign_id: campaigns[4].id,
    donation_item_id: donationItems[4].id,
    quantity: 90,
  },
];

const reliefs = [
  {
    id: 'cea7d7a5-8629-4867-8404-2fda94e2c45e',
    name: 'Cholo Syllhet Jaibo',
    location: 'Sylhet',
    campaign_id: campaigns[0].id,
    timestamp: '2021-05-01 12:00:00',
  },
  {
    id: 'e67f25ae-0aeb-4f0d-a517-3f729c90819e',
    name: 'Cumilla Jabo',
    location: 'Cumilla',
    campaign_id: '11731e47-c8f6-473a-8b3d-16cb7eaee456',
    timestamp: '2021-05-02 12:00:00',
  },
  {
    id: '428a4ef6-86f1-4d53-8247-009af4359f13',
    name: 'Talk Talk Barishal',
    location: 'Barishal',
    campaign_id: '11731e47-c8f6-473a-8b3d-16cb7eaee456',
    timestamp: '2021-05-03 12:00:00',
  },
  {
    id: '4f13ccba-e67f-481b-9bd4-2a3da7d3ab22',
    name: 'Run Run Sisimpur',
    location: 'Rangpur',
    campaign_id: 'b0472fed-132f-4f2f-a473-e0d5f247e1c7',
    timestamp: '2021-05-04 12:00:00',
  },
  {
    id: '406d0ce9-6038-4d53-a1d5-14ba99ab7ef0',
    name: 'Fun Fun Gaibandha',
    location: 'Gaibandha',
    campaign_id: 'b0472fed-132f-4f2f-a473-e0d5f247e1c7',
    timestamp: '2021-05-05 12:00:00',
  },
];

const teamWorksWithRelief = [
  {
    team_id: '70778cc4-4667-4c37-8354-ab97bf58906c',
    relief_id: reliefs[0].id,
  },
  {
    team_id: '70778cc4-4667-4c37-8354-ab97bf58906c',
    relief_id: 'e67f25ae-0aeb-4f0d-a517-3f729c90819e',
  },
  {
    team_id: 'c738c231-8a87-4495-947a-1691558b2545',
    relief_id: reliefs[0].id,
  },
  {
    team_id: '70778cc4-4667-4c37-8354-ab97bf58906c',
    relief_id: '428a4ef6-86f1-4d53-8247-009af4359f13',
  },
  {
    team_id: 'c738c231-8a87-4495-947a-1691558b2545',
    relief_id: '4f13ccba-e67f-481b-9bd4-2a3da7d3ab22',
  },
  {
    team_id: 'f26df159-869a-445e-9f5d-c24fb826cd1b',
    relief_id: '406d0ce9-6038-4d53-a1d5-14ba99ab7ef0',
  },
  {
    team_id: 'f26df159-869a-445e-9f5d-c24fb826cd1b',
    relief_id: '4f13ccba-e67f-481b-9bd4-2a3da7d3ab22',
  },
  {
    team_id: 'f26df159-869a-445e-9f5d-c24fb826cd1b',
    relief_id: '428a4ef6-86f1-4d53-8247-009af4359f13',
  },
  {
    team_id: 'fc39ba31-8c4b-4c8f-bd2b-8d68be09b397',
    relief_id: 'e67f25ae-0aeb-4f0d-a517-3f729c90819e',
  },
];

const transactions = [
  // 8 donations
  {
    id: 'b9f5e351-dd9e-4d78-b044-71e7662462ed',
    donation_item_id: 'a00056bb-b6ad-4763-9e02-cbf4e966ac7d',
    quantity: 50000,
    status: 'pending',
    relief_id: null,
    campaign_id: campaigns[0].id,
    donor_id: '7932388d-dbdd-4408-b2cd-222471eb1846',
    timestamp: '2021-05-01 12:00:00',
  },
  {
    id: '22233872-8082-4e19-80b1-7325edfcbcbc',
    donation_item_id: 'a00056bb-b6ad-4763-9e02-cbf4e966ac7d',
    quantity: 30000,
    status: 'pending',
    relief_id: null,
    campaign_id: 'b0472fed-132f-4f2f-a473-e0d5f247e1c7',
    donor_id: '71718621-4643-4217-a851-85d516e7455f',
    timestamp: '2021-05-02 12:00:00',
  },
  {
    id: 'b3204315-9b29-4b68-8626-0c42b52ad8d7',
    donation_item_id: '69f91dd0-7245-499f-a0ef-54728b974ff4',
    quantity: 300,
    status: 'pending',
    relief_id: null,
    campaign_id: '11731e47-c8f6-473a-8b3d-16cb7eaee456',
    donor_id: '7932388d-dbdd-4408-b2cd-222471eb1846',
    timestamp: '2021-05-03 12:00:00',
  },
  {
    id: '519cd5f5-0ef6-468c-92d9-49f12872570c',
    donation_item_id: '69f91dd0-7245-499f-a0ef-54728b974ff4',
    quantity: 250,
    status: 'pending',
    relief_id: null,
    campaign_id: 'b0472fed-132f-4f2f-a473-e0d5f247e1c7',
    donor_id: '71718621-4643-4217-a851-85d516e7455f',
    timestamp: '2021-05-04 12:00:00',
  },
  {
    id: 'cbaaca28-8e0f-482f-b573-cedd57702ab7',
    donation_item_id: '9adc5ae2-20aa-4876-bbc1-a025ab763667',
    quantity: 50,
    status: 'pending',
    relief_id: null,
    campaign_id: campaigns[0].id,
    donor_id: '7932388d-dbdd-4408-b2cd-222471eb1846',
    timestamp: '2021-05-05 12:00:00',
  },
  {
    id: '0b6d9690-f827-45ab-bed0-f15e413596b0',
    donation_item_id: '9adc5ae2-20aa-4876-bbc1-a025ab763667',
    quantity: 30,
    status: 'pending',
    relief_id: null,
    campaign_id: '11731e47-c8f6-473a-8b3d-16cb7eaee456',
    donor_id: '7932388d-dbdd-4408-b2cd-222471eb1846',
    timestamp: '2021-05-06 12:00:00',
  },
  {
    id: '0e16b604-1235-4b42-a2ab-84d763dc7273',
    donation_item_id: 'a00056bb-b6ad-4763-9e02-cbf4e966ac7d',
    quantity: 20000,
    status: 'pending',
    relief_id: null,
    campaign_id: 'fc399ab3-b73f-4d6d-a8a6-1140004b1250',
    donor_id: '71718621-4643-4217-a851-85d516e7455f',
    timestamp: '2021-05-07 12:00:00',
  },
  {
    id: 'cc38d8df-84d0-4f26-9d7f-dd2371cf2b21',
    donation_item_id: 'a00056bb-b6ad-4763-9e02-cbf4e966ac7d',
    quantity: 45000,
    status: 'pending',
    relief_id: null,
    campaign_id: 'b0472fed-132f-4f2f-a473-e0d5f247e1c7',
    donor_id: '7932388d-dbdd-4408-b2cd-222471eb1846',
    timestamp: '2021-05-08 12:00:00',
  },

  // 3 reliefs
  {
    id: '6bc48e3a-3cac-4cf5-919c-c0ceec5bfae2',
    donation_item_id: '69f91dd0-7245-499f-a0ef-54728b974ff4',
    quantity: 200,
    status: 'distributed',
    relief_id: reliefs[0].id,
    campaign_id: campaigns[0].id,
    donor_id: null,
    timestamp: '2021-05-09 12:00:00',
  },
  {
    id: 'f073a4c6-cbac-4e35-a8f2-5e1c87acc744',
    donation_item_id: '69f91dd0-7245-499f-a0ef-54728b974ff4',
    quantity: 100,
    status: 'pending',
    relief_id: reliefs[0].id,
    campaign_id: campaigns[0].id,
    donor_id: null,
    timestamp: '2021-05-10 12:00:00',
  },
  {
    id: 'aca0ec30-7273-4ddd-8e69-dcc2fa56bed6',
    donation_item_id: 'a00056bb-b6ad-4763-9e02-cbf4e966ac7d',
    quantity: 60000,
    status: 'pending',
    relief_id: reliefs[0].id,
    campaign_id: campaigns[0].id,
    donor_id: null,
    timestamp: '2021-05-11 12:00:00',
  },
];

const recipientReceiveRelief = [
  {
    relief_id: reliefs[0].id,
    recipient_id: '5ba2632e-80f9-4129-9532-845fd30e110e',
    donation_item_id: '69f91dd0-7245-499f-a0ef-54728b974ff4',
    quantity: 5,
    timestamp: '2021-05-01 12:00:00',
  },
  {
    relief_id: reliefs[0].id,
    recipient_id: '13953a84-e63b-4ece-9f60-dd329baaf5e1',
    donation_item_id: '69f91dd0-7245-499f-a0ef-54728b974ff4',
    quantity: 10,
    timestamp: '2021-05-02 12:00:00',
  },
  {
    relief_id: reliefs[0].id,
    recipient_id: '2feb3c7e-e923-4f07-981f-746e8409a847',
    donation_item_id: '69f91dd0-7245-499f-a0ef-54728b974ff4',
    quantity: 3,
    timestamp: '2021-05-03 12:00:00',
  },
  {
    relief_id: 'e67f25ae-0aeb-4f0d-a517-3f729c90819e',
    recipient_id: '13953a84-e63b-4ece-9f60-dd329baaf5e1',
    donation_item_id: 'a00056bb-b6ad-4763-9e02-cbf4e966ac7d',
    quantity: 1000,
    timestamp: '2021-05-04 12:00:00',
  },
  {
    relief_id: 'e67f25ae-0aeb-4f0d-a517-3f729c90819e',
    recipient_id: '7f5fd25e-bfbb-487a-bc7f-33b4e94da628',
    donation_item_id: 'a00056bb-b6ad-4763-9e02-cbf4e966ac7d',
    quantity: 1000,
    timestamp: '2021-05-05 12:00:00',
  },
  {
    relief_id: 'e67f25ae-0aeb-4f0d-a517-3f729c90819e',
    recipient_id: '23e56313-7fca-48b9-9ab4-39fa3247a056',
    donation_item_id: 'a00056bb-b6ad-4763-9e02-cbf4e966ac7d',
    quantity: 1000,
    timestamp: '2021-05-06 12:00:00',
  },
  {
    relief_id: '428a4ef6-86f1-4d53-8247-009af4359f13',
    recipient_id: '5ba2632e-80f9-4129-9532-845fd30e110e',
    donation_item_id: 'a00056bb-b6ad-4763-9e02-cbf4e966ac7d',
    quantity: 1000,
    timestamp: '2021-05-07 12:00:00',
  },
];

module.exports = {
  users,
  teams,
  campaigns,
  volunteersWorksOrWorkedIn,
  donationItems,
  campaignStocks,
  reliefs,
  recipientReceiveRelief,
  teamWorksWithRelief,
  transactions,
};
