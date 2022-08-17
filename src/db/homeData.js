export const homeData = {
  main: {
    description_ua: 'Сайт Благодійного Фонду \n“Українська Армія Допомагає”',
    description_fr: 'Site de la Fondation \n"Ukrainian Army Defend"',
    description_en: 'Website of the  Foundation \n"Ukrainian Army Defend"',
    title_ua: 'Разом Допоможемо Українській Армії Захистити Країну',
    title_fr: "Ensemble, nous aiderons l'armée ukrainienne à défendre le pays",
    title_en: 'Together we will help the Ukrainian Army to Defend the Country',
    cover: 'img',
    tag: '#stopwarinukraine',
    counter_title_ua: 'День Війни \nв Україні',
    counter_title_fr: 'Jours de guerre \nen Ukraine',
    counter_title_en: 'Day of War \nin Ukraine',
    counter: 1,
  },
  open_round: {
    title_ua: 'Відкриті Раунди допомоги',
    title_fr: "Rondes d'assistance ouvertes",
    title_en: 'Open Rounds of Assistance',
    link_ua: 'Перейти в каталог',
    link_fr: 'Aller au répertoire',
    link_en: 'Go to the directory',
    link: '/openRaundCatalog/',
  },
  home_benefits: {
    cover: 'img',
    title_ua: 'Чому саме наш фонд',
    title_fr: 'Pourquoi notre fonds',
    title_en: 'Why our fund',
    benefits: [
      {
        title_ua: 'Фонд офіційно зареєстрований в Україні',
        title_fr: 'The fund is officially registered in Ukraine',
        title_en: 'The fund is officially registered in Ukraine',
      },
      {
        title_ua: 'Вся звітність прозоро подається державі',
        title_fr:
          "Tous les rapports sont soumis de manière transparente à l'État",
        title_en: 'All reporting is transparently submitted to the state',
      },
      {
        title_ua: 'Розробляємо та реалізовуємо власні програми підтримки',
        title_fr:
          'Nous développons et mettons en œuvre nos propres programmes de soutien',
        title_en: 'We develop and implement our own support programs',
      },
      {
        title_ua: 'Ми патріоти України',
        title_fr: "Nous sommes des patriotes de l'Ukraine",
        title_en: 'We are patriots of Ukraine',
      },
    ],
  },
  home_steps: {
    description_ua: 'Для допомоги \nУкраїні та її народу',
    description_fr: "Pour aider \nl'Ukraine et son peuple",
    description_en: 'To help \nUkraine and its people',
    title_ua: '4 кроки',
    title_fr: '4 steps',
    title_en: '4 steps',
    steps_info: [
      {
        title_ua: 'Перейди в каталог відкритих раундів допомоги',
        title_fr: "Accéder à l'annuaire des tournées d'assistance ouvertes",
        title_en: 'Go to the directory of open rounds of assistance',
      },
      {
        title_ua: 'Обери раунд до якого бажаєш долучитися',
        title_fr: 'Choisissez le tour que vous souhaitez rejoindre',
        title_en: 'Choose the round you want to join',
      },
      {
        title_ua: 'вкажи суму та Обери зручну платіжну систему',
        title_fr:
          'entrez le montant et choisissez un système de paiement pratique',
        title_en: 'enter the amount and Choose a convenient payment system',
      },
      {
        title_ua: 'Зроби благодійний внесок',
        title_fr: 'Faire une contribution caritative',
        title_en: 'Make a charitable contribution',
      },
    ],
  },
  close_round: {
    title_ua: 'Закриті Раунди допомоги',
    title_fr: "Rondes d'aide fermées",
    title_en: 'Closed Aid Rounds',
    link_ua: 'Перейти в каталог',
    link_fr: 'Aller au répertoire',
    link_en: 'Go to the directory',
    link: '/closeRaundCatalog/',
  },
  home_about: {
    title_ua: 'Про наш фонд',
    title_fr: 'À propos de nous',
    title_en: 'About us',
    link_ua: 'Читати більше',
    link_fr: 'Lire la suite',
    link_en: 'Read more',
    link: '/about/',
  },
  home_about_aside: {
    title_ua:
      'Допоможіть прискорити нашу Перемогу! Ваші внески допомагають забезпечувати захисників України сучасним обладнанням і спорядженням для протидії російському вторгненню.',
    title_fr:
      "Aidez à accélérer notre victoire ! Vos contributions aident à fournir aux défenseurs ukrainiens des équipements modernes et des contre-mesures pour contrer l'invasion russe.",
    title_en:
      "Help speed up our Victory! Your contributions help provide Ukraine's defenders with modern equipment and equipment to counter the Russian invasion.",
  },
  faq: {
    title_ua: 'ВІДПОВІДІ НА ЗАПИТАННЯ',
    title_fr: 'RÉPONSES AUX QUESTIONS',
    title_en: 'ANSWERS TO QUESTIONS',
    marker_ua: 'Першочергова потреба',
    marker_fr: 'Priorité',
    marker_en: 'Top priority',
    slug: '/round-card/',

    important_item: {
      title_ua:
        'Збір коштів на закупівлю медикаментів, для поранених в результаті обстрілу Маріуполя',
      title_fr:
        "Collecte de fonds pour l'achat de médicaments pour les blessés du bombardement de Marioupol",
      title_en:
        'Fundraising for the purchase of medicines for the wounded in the shelling of Mariupol',
      image: 'img',
      total_price: 145000,
      current_price: 82350,
      status: 'open',
      category_ua: 'соціальна допомога',
      category_fr: 'assistance sociale',
      category_en: 'social assistance',
      date: '23.05.2022',
      slug: '/round-card/',
    },
  },
  faq_items: [
    {
      question_ua: 'Для чого створений сайт?',
      question_fr: 'But du site internet ?',
      question_en: 'What is the purpose of the website?',
      answer_ua:
        'Для підтримки української армії та на соціальні потреби українців. \nЗабезпечення української армії всіма необхідними засобами індивідуального захисту, екіпіруванням, технікою, обладнанням, медикаментами, побутовими речами, тощо. \nТакож ми збираємо кошти для біженців, які втратили свої домівки і повинні були бігти від війни.',
      answer_fr:
        'Aide et soutien à l’armée ukrainienne ainsi que aide sociale pour tous les ukrainiens qui en ont besoin. \nSoutien de l’armée avec tous les moyens possibles, équipement de protection individuelle, équipement défensif, appareils techniques, médicaments, alimentation etc. \nRecueil de fonds également pour venir en aide à tous les ukrainiens qui ont du quitter leurs domicile suite à la guerre.',
      answer_en:
        'To support the Ukrainian army and the social needs of Ukrainians. \nTo provide the Ukrainian army with all the essential personal protective equipment, gear, technical supplies, equipment, medicines, domestic items, etc. \nWe also raise funds for refugees who lost their homes and had to escape from the war.',
    },
    {
      question_ua: 'Як зробити переказ коштів?',
      question_fr: 'Comment effectuer un transfert d’argent?',
      question_en: 'How to transfer funds?',
      answer_ua:
        'На сайті знаходиться розділ з відкритими раундами допомоги. Кожен раунд - це конкретна ціль, яка буде мати інформацію про те, скільки, на що саме та кому збираються кошти. Ви обираєте той раунд, на який хочете здійснити пожертвування, та переходите на нього. \nДалі натискаєте на кнопку "пожертвувати" і обираєте зручний спосіб переказу коштів. \nВсі пожертвування фонд збирає через різні системи безготівкових переказів: Visa, Mastercard, Apple Pay, Google Pay, PayPal, Bitcoin, ETH, USDT/USD. \nВи можете зробити пожертвування на будь-яку суму та у зручній для вас валюті (UAH, EUR, USD).',
      answer_fr:
        'Sur le site se trouvent des « rounds », des causes, ouvertes qui recueillent les fonds. \nCe sont des mission bien spécifiques. \nVous pouvez de cette manière voir combien il reste pour atteindre l’objectif, de quoi avons nous besoin etc. \nVous sélectionnez la cause qui vous tient le plus à coeur et ensuite cliquez sur «  donner » et choisissez votre mode de paiement favori. \nTous les moyens de paiement à distance sont acceptés : VISA, Mastercard, Apple Pay, Google Pay, PayPal, Bitcoin, ETH, USDT/USD. \nVous pouvez effectuer un don pour n’importe quel montant et avec votre devise préférée : UAH, EUR, USD.',
      answer_en:
        "There is a section on the website with open aid rounds. Each round represents a specific goal that will contain information about how much, for what purpose, and to whom the funds are being raised. You choose the round you want to donate to and click on it. \nThen you click on 'donate' and choose a convenient way to transfer funds. \nAll donations are collected by the foundation through various non-cash transfer systems: Visa, Mastercard, Apple Pay, Google Pay, PayPal, Bitcoin, ETH, USDT/USD. \nYou can donate any amount and in any convenient currency (UAH, EUR, USD). ",
    },
    {
      question_ua: 'На які потреби йдуть гроші?',
      question_fr: 'À quels besoins subvient notre argent?',
      question_en: 'What is the money used for?',
      answer_ua:
        'На підтримку української армії та соціальні потреби. Забезпечення української армії всіма необхідними засобами індивідуального захисту, екіпіруванням, технікою, обладнанням, медикаментами, побутовими речами, тощо. \nТакож ми збираємо кошти для біженців, які втратили свої домівки і повинні були бігти від війни.',
      answer_fr:
        'Au soutient de l’armée ukrainienne et à l’aide sociale pour les ukrainiens en difficulté. \nSoutien de l’armée avec tous les moyens possibles, équipement de protection individuelle, équipement défensif, appareils techniques, médicaments, choses de la vie quotidienne, alimentation etc.',
      answer_en:
        'To support the Ukrainian army and for social needs. Providing the Ukrainian army with all the essential personal protective equipment, gear, technical supplies, equipment, medicines, domestic items, etc. \nWe also raise funds for refugees who lost their homes and had to escape from the war.',
    },
    {
      question_ua: 'В яких країнах це працює?',
      question_fr: 'Comment faire partie de votre projet ?',
      question_en: 'Dans quels pays cela fonctionne?',
      answer_ua:
        'Ви можете зробити переказ з будь-якої країни зручним для вас способом та обраною валютою.',
      answer_fr:
        'Vous pouvez effectuer un don de n’importe quel pays avec votre moyen de payement favori et votre devise sélectionnée.',
      answer_en:
        'You can make a transfer from any country in a convenient way and in the chosen currency.',
    },
    {
      question_ua: 'Чому нам можна довіряти?',
      question_fr: 'Pourquoi nous faire confiance? ',
      question_en: 'Why can you trust us?',
      answer_ua:
        'Наш благодійний фонд офіційно зареєстрований в Україні з офіційними рахунками, вся звітність прозоро подається державі. Після закінчення збору на конкретний раунд та реалізації цілі, на сайт додається повна звітність за витраченими коштами.',
      answer_fr:
        'Notre organisation caritative est officiellement et légalement implanté en Ukraine. Tous les mouvements de fonds sont ouvertement montrés au gouvernement. \nÀ la fin des collectes, des preuves sont postés sur le site afin que vous puissiez voir le cheminement de votre donation.',
      answer_en:
        'Our Charity Foundation is officially registered in Ukraine and has official accounts, all reports are transparently submitted to the authorities. After the end of the fundraising for a particular round and the realization of the goal, a full report on the spent money is published on the website.',
    },
    {
      question_ua: 'Як стати частиною команди та приєднатися до проекту?',
      question_fr: 'Comment devenir membre de l’équipe et rejoindre le projet?',
      question_en: 'How to become part of the team and join the project?',
      answer_ua:
        'Напишіть листа на нашу офіційну пошту ukrdefend@gmail.com й запропонуйте своє бачення того, як ви можете бути корисні.',
      answer_fr:
        'Adressez vous à notre mail officiel : ukrdefend@gmail.com et dites nous comment vous pensez être utiles à la cause.',
      answer_en:
        'Send us a letter to our official e-mail address ukrdefend@gmail.com and offer your vision of how you can be helpful.',
    },
    {
      question_ua: 'Чому важливо зробити це прямо зараз?',
      question_fr: 'Pourquoi est-il important d’agir maintenant? ',
      question_en: 'Why is it so important to do this right now?',
      answer_ua:
        'Ворог акумулює сили та продовжує нищити міста й вбивати мирних людей. Тому дуже важливо постачати нашим захисникам все необхідне для прискорення нашої перемоги.',
      answer_fr:
        'L’ennemi continue de gagner en force et territoire, continue de ruiner des villes et des vies innocentes. C’est pour cela qu’il est primordial de pouvoir fournir à nos protecteurs l’aide dont ils ont besoin dans les meilleurs délais afin d’accélérer l’arrivée de notre victoire.',
      answer_en:
        'The enemy is accumulating forces and continues to destroy cities and kill civilians. That is why it is very important to provide our defenders with everything they need to accelerate our victory.',
    },
  ],
  buttons: {
    catalogButton_ua: 'Перейти в каталог',
    catalogButton_fr: 'Aller au catalogue',
    catalogButton_en: 'Go to the catalog',
    donatButton_ua: 'Зробити внесок',
    donatButton_fr: 'Contribuer',
    donatButton_en: 'To contribute',
  },
};
