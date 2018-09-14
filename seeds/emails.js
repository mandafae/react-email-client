exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("emails")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("emails").insert([
        {
          to_name: "Amanda Freeman",
          to_address: "mandafae5@gmail.com",
          from_name: "Taco Dog",
          from_address: "babydeer@gmail.com",
          subject: "Hey!",
          sent: "2018-09-14T21:28:58.219Z",
          email_body:
            "Lorem ipsum dolor sit amet, in idque malorum legimus his! Ex dicat laboramus cum, eu facete latine minimum sea, eu ubique intellegam liberavisse per. Ad duo mazim debet. Id modus accumsan cum, et magna efficiantur quo. Eum ea repudiandae disputationi, ne movet repudiandae ius, mazim zril diceret nam id. Dolor sententiae ut eos, an pro veniam suscipit theophrastus, id graece primis volutpat cum."
        },
        {
          to_name: "Amanda Freeman",
          to_address: "mandafae5@gmail.com",
          from_name: "Pearl Jones",
          from_address: "cheeselover@gmail.com",
          subject: "Gourmet cheese tasting!",
          sent: "2018-09-11T16:14:57.197Z",
          email_body:
            "Lorem ipsum dolor sit amet, in idque malorum legimus his! Ex dicat laboramus cum, eu facete latine minimum sea, eu ubique intellegam liberavisse per. Ad duo mazim debet. Id modus accumsan cum, et magna efficiantur quo. Eum ea repudiandae disputationi, ne movet repudiandae ius, mazim zril diceret nam id. Dolor sententiae ut eos, an pro veniam suscipit theophrastus, id graece primis volutpat cum."
        },
        {
          to_name: "Amanda Freeman",
          to_address: "mandafae5@gmail.com",
          from_name: "Vinny Killer",
          from_address: "ilovebugs@gmail.com",
          subject: "Insect identification class?",
          sent: "2018-07-03T10:48:41.741Z",
          email_body:
            "Lorem ipsum dolor sit amet, in idque malorum legimus his! Ex dicat laboramus cum, eu facete latine minimum sea, eu ubique intellegam liberavisse per. Ad duo mazim debet. Id modus accumsan cum, et magna efficiantur quo. Eum ea repudiandae disputationi, ne movet repudiandae ius, mazim zril diceret nam id. Dolor sententiae ut eos, an pro veniam suscipit theophrastus, id graece primis volutpat cum."
        },
        {
          to_name: "Amanda Freeman",
          to_address: "mandafae5@gmail.com",
          from_name: "Beauty Queen Beans",
          from_address: "themagicalfruit@gmail.com",
          subject: "Photo shoot",
          sent: "2018-08-17T11:55:29.702Z",
          email_body:
            "Lorem ipsum dolor sit amet, in idque malorum legimus his! Ex dicat laboramus cum, eu facete latine minimum sea, eu ubique intellegam liberavisse per. Ad duo mazim debet. Id modus accumsan cum, et magna efficiantur quo. Eum ea repudiandae disputationi, ne movet repudiandae ius, mazim zril diceret nam id. Dolor sententiae ut eos, an pro veniam suscipit theophrastus, id graece primis volutpat cum."
        },
        {
          to_name: "Amanda Freeman",
          to_address: "mandafae5@gmail.com",
          from_name: "Boyfriend Boo",
          from_address: "minpin@gmail.com",
          subject: "Let's do lunch!",
          sent: "2018-07-28T10:30:14.231Z",
          email_body:
            "Lorem ipsum dolor sit amet, in idque malorum legimus his! Ex dicat laboramus cum, eu facete latine minimum sea, eu ubique intellegam liberavisse per. Ad duo mazim debet. Id modus accumsan cum, et magna efficiantur quo. Eum ea repudiandae disputationi, ne movet repudiandae ius, mazim zril diceret nam id. Dolor sententiae ut eos, an pro veniam suscipit theophrastus, id graece primis volutpat cum."
        },
        {
          to_name: "Amanda Freeman",
          to_address: "mandafae5@gmail.com",
          from_name: "Olive Oyl",
          from_address: "derpqueen@gmail.com",
          subject: "You're my friend!",
          sent: "2018-05-26T06:29:14.656Z",
          email_body:
            "Lorem ipsum dolor sit amet, in idque malorum legimus his! Ex dicat laboramus cum, eu facete latine minimum sea, eu ubique intellegam liberavisse per. Ad duo mazim debet. Id modus accumsan cum, et magna efficiantur quo. Eum ea repudiandae disputationi, ne movet repudiandae ius, mazim zril diceret nam id. Dolor sententiae ut eos, an pro veniam suscipit theophrastus, id graece primis volutpat cum."
        },
        {
          to_name: "Amanda Freeman",
          to_address: "mandafae5@gmail.com",
          from_name: "Lindsay	Bennett",
          from_address: "lindsay@gmail.com",
          subject: "How are you?",
          sent: "2018-06-22T22:10:14.455Z",
          email_body:
            "Lorem ipsum dolor sit amet, in idque malorum legimus his! Ex dicat laboramus cum, eu facete latine minimum sea, eu ubique intellegam liberavisse per. Ad duo mazim debet. Id modus accumsan cum, et magna efficiantur quo. Eum ea repudiandae disputationi, ne movet repudiandae ius, mazim zril diceret nam id. Dolor sententiae ut eos, an pro veniam suscipit theophrastus, id graece primis volutpat cum."
        },
        {
          to_name: "Amanda Freeman",
          to_address: "mandafae5@gmail.com",
          from_name: "Charlie	Arnold",
          from_address: "charlie@gmail.com",
          subject: "Happy hour?",
          sent: "2018-08-11T06:26:57.076Z",
          email_body:
            "Lorem ipsum dolor sit amet, in idque malorum legimus his! Ex dicat laboramus cum, eu facete latine minimum sea, eu ubique intellegam liberavisse per. Ad duo mazim debet. Id modus accumsan cum, et magna efficiantur quo. Eum ea repudiandae disputationi, ne movet repudiandae ius, mazim zril diceret nam id. Dolor sententiae ut eos, an pro veniam suscipit theophrastus, id graece primis volutpat cum."
        },
        {
          to_name: "Amanda Freeman",
          to_address: "mandafae5@gmail.com",
          from_name: "Megan	Brady",
          from_address: "megan@gmail.com",
          subject: "Hello!",
          sent: "2018-06-13T06:16:27.584Z",
          email_body:
            "Lorem ipsum dolor sit amet, in idque malorum legimus his! Ex dicat laboramus cum, eu facete latine minimum sea, eu ubique intellegam liberavisse per. Ad duo mazim debet. Id modus accumsan cum, et magna efficiantur quo. Eum ea repudiandae disputationi, ne movet repudiandae ius, mazim zril diceret nam id. Dolor sententiae ut eos, an pro veniam suscipit theophrastus, id graece primis volutpat cum."
        },
        {
          to_name: "Amanda Freeman",
          to_address: "mandafae5@gmail.com",
          from_name: "Gwen	Watson",
          from_address: "gwen@gmail.com",
          subject: "Gardening class?",
          sent: "2018-08-13T10:55:59.607Z",
          email_body:
            "Lorem ipsum dolor sit amet, in idque malorum legimus his! Ex dicat laboramus cum, eu facete latine minimum sea, eu ubique intellegam liberavisse per. Ad duo mazim debet. Id modus accumsan cum, et magna efficiantur quo. Eum ea repudiandae disputationi, ne movet repudiandae ius, mazim zril diceret nam id. Dolor sententiae ut eos, an pro veniam suscipit theophrastus, id graece primis volutpat cum."
        }
      ]);
    });
};
