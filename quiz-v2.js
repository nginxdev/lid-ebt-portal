const quizData = [
    {
        "qNum": 1,
        "q": "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil ...",
        "tq": "In Germany, people are allowed to openly say something against the government because ...",
        "o": {
            "a": "hier Religionsfreiheit gilt.",
            "b": "die Menschen Steuern zahlen.",
            "c": "die Menschen das Wahlrecht haben.",
            "d": "hier Meinungsfreiheit gilt."
        },
        "to": {
            "a": "there is freedom of religion here.",
            "b": "people pay taxes.",
            "c": "people have the right to vote.",
            "d": "there is freedom of expression here."
        },
        "a": "d",
        "r": "The correct answer is 'hier Meinungsfreiheit gilt.' because Germany's Basic Law guarantees freedom of expression."
    },
    {
        "qNum": 2,
        "q": "In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am ... teilnimmt.",
        "tq": "In Germany, parents can decide until the age of 14 whether their child participates in ... at school.",
        "o": {
            "a": "Geschichtsunterricht",
            "b": "Religionsunterricht",
            "c": "Politikunterricht",
            "d": "Sprachunterricht"
        },
        "to": {
            "a": "history class",
            "b": "religious education",
            "c": "politics class",
            "d": "language class"
        },
        "a": "b",
        "r": "The correct answer is 'Religionsunterricht' because in Germany, parents have the right to decide whether their child receives religious instruction at school."
    },
    {
        "qNum": 3,
        "q": "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
        "tq": "Germany is a constitutional state. What does that mean?",
        "o": {
            "a": "Alle Einwohnerinnen/Einwohner und der Staat müssen sich an die Gesetze halten.",
            "b": "Der Staat muss sich nicht an die Gesetze halten.",
            "c": "Nur Deutsche müssen die Gesetze befolgen.",
            "d": "Die Gerichte machen die Gesetze."
        },
        "to": {
            "a": "All residents and the state must abide by the laws.",
            "b": "The state does not have to abide by the laws.",
            "c": "Only Germans have to obey the laws.",
            "d": "The courts make the laws."
        },
        "a": "a",
        "r": "The correct answer is 'Alle Einwohnerinnen/Einwohner und der Staat müssen sich an die Gesetze halten.' because in a constitutional state, everyone, including the government, is subject to the law."
    },
    {
        "qNum": 4,
        "q": "Welches Recht gehört zu den Grundrechten in Deutschland?",
        "tq": "Which right is one of the basic rights in Germany?",
        "o": {
            "a": "Waffenbesitz",
            "b": "Faustrecht",
            "c": "Meinungsfreiheit",
            "d": "Selbstjustiz"
        },
        "to": {
            "a": "the right to bear arms",
            "b": "self-help",
            "c": "freedom of expression",
            "d": "vigilantism"
        },
        "a": "c",
        "r": "The correct answer is 'Meinungsfreiheit' because freedom of expression is a fundamental right guaranteed by the German constitution."
    },
    {
        "qNum": 5,
        "q": "Wahlen in Deutschland sind frei. Was bedeutet das?",
        "tq": "Elections in Germany are free. What does that mean?",
        "o": {
            "a": "Man darf Geld annehmen, wenn man dafür eine bestimmte Kandidatin/einen bestimmten Kandidaten wählt.",
            "b": "Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.",
            "c": "Die Wählerin/der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.",
            "d": "Alle wahlberechtigten Personen müssen wählen."
        },
        "to": {
            "a": "You are allowed to accept money if you vote for a certain candidate.",
            "b": "Only people who have never been in prison are allowed to vote.",
            "c": "The voter must not be influenced or forced to vote in a certain way and must not suffer any disadvantages from the election.",
            "d": "All eligible persons must vote."
        },
        "a": "c",
        "r": "The correct answer is 'Die Wählerin/der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.' because free elections mean that voters can cast their vote without any pressure or negative consequences."
    },
    {
        "qNum": 6,
        "q": "Wie heißt die deutsche Verfassung?",
        "tq": "What is the name of the German constitution?",
        "o": {
            "a": "Volksgesetz",
            "b": "Bundesgesetz",
            "c": "Deutsches Gesetz",
            "d": "Grundgesetz"
        },
        "to": {
            "a": "People's Law",
            "b": "Federal Law",
            "c": "German Law",
            "d": "Basic Law"
        },
        "a": "d",
        "r": "The correct answer is 'Grundgesetz' because the German constitution is called the Basic Law (Grundgesetz)."
    },
    {
        "qNum": 7,
        "q": "Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf ...",
        "tq": "Which right is one of the basic rights guaranteed by the German constitution? The right to ...",
        "o": {
            "a": "Glaubens- und Gewissensfreiheit",
            "b": "Unterhaltung",
            "c": "Arbeit",
            "d": "Wohnung"
        },
        "to": {
            "a": "freedom of belief and conscience",
            "b": "entertainment",
            "c": "work",
            "d": "housing"
        },
        "a": "a",
        "r": "The correct answer is 'Glaubens- und Gewissensfreiheit' because the German constitution guarantees freedom of belief and conscience as a fundamental right."
    },
    {
        "qNum": 8,
        "q": "Was steht nicht im Grundgesetz von Deutschland?",
        "tq": "What is not in Germany's Basic Law?",
        "o": {
            "a": "Die Würde des Menschen ist unantastbar.",
            "b": "Alle sollen gleich viel Geld haben.",
            "c": "Jeder Mensch darf seine Meinung sagen.",
            "d": "Alle sind vor dem Gesetz gleich."
        },
        "to": {
            "a": "Human dignity is inviolable.",
            "b": "Everyone should have the same amount of money.",
            "c": "Everyone is free to express their opinion.",
            "d": "All are equal before the law."
        },
        "a": "b",
        "r": "The correct answer is 'Alle sollen gleich viel Geld haben.' because the German Basic Law does not stipulate that everyone should have the same amount of money. It emphasizes human dignity, freedom of expression, and equality before the law."
    },
    {
        "qNum": 9,
        "q": "Welches Grundrecht gilt in Deutschland nur für Ausländerinnen/Ausländer? Das Grundrecht auf ...",
        "tq": "Which basic right applies in Germany only to foreigners? The basic right to ...",
        "o": {
            "a": "Schutz der Familie",
            "b": "Menschenwürde",
            "c": "Asyl",
            "d": "Meinungsfreiheit"
        },
        "to": {
            "a": "protection of the family",
            "b": "human dignity",
            "c": "asylum",
            "d": "freedom of expression"
        },
        "a": "c",
        "r": "The correct answer is 'Asyl' because the right to asylum is a basic right that applies specifically to foreigners seeking protection in Germany."
    },
    {
        "qNum": 10,
        "q": "Was ist mit dem deutschen Grundgesetz vereinbar?",
        "tq": "What is compatible with the German Basic Law?",
        "o": {
            "a": "die Prügelstrafe",
            "b": "die Folter",
            "c": "die Todesstrafe",
            "d": "die Geldstrafe"
        },
        "to": {
            "a": "corporal punishment",
            "b": "torture",
            "c": "the death penalty",
            "d": "a fine"
        },
        "a": "d",
        "r": "The correct answer is 'die Geldstrafe' because the German Basic Law prohibits cruel and inhuman punishment like corporal punishment, torture, and the death penalty, but fines are a permissible form of punishment."
    },
    {
        "qNum": 11,
        "q": "Wie wird die Verfassung der Bundesrepublik Deutschland genannt?",
        "tq": "What is the constitution of the Federal Republic of Germany called?",
        "o": {
            "a": "Grundgesetz",
            "b": "Bundesverfassung",
            "c": "Gesetzbuch",
            "d": "Verfassungsvertrag"
        },
        "to": {
            "a": "Basic Law",
            "b": "Federal Constitution",
            "c": "Law Book",
            "d": "Constitutional Treaty"
        },
        "a": "a",
        "r": "The correct answer is 'Grundgesetz' because the official name of the constitution of the Federal Republic of Germany is the Basic Law (Grundgesetz)."
    },
    {
        "qNum": 12,
        "q": "Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich?",
        "tq": "A party in the German Bundestag wants to abolish freedom of the press. Is that possible?",
        "o": {
            "a": "Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.",
            "b": "Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.",
            "c": "Nein, denn die Pressefreiheit ist ein Grundrecht.",
            "d": "Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen."
        },
        "to": {
            "a": "Yes, if more than half of the members of the Bundestag vote for it.",
            "b": "Yes, but two-thirds of the members of the Bundestag have to vote for it.",
            "c": "No, because freedom of the press is a basic right.",
            "d": "No, because only the Bundesrat can abolish freedom of the press."
        },
        "a": "c",
        "r": "The correct answer is 'Nein, denn die Pressefreiheit ist ein Grundrecht.' because freedom of the press is a fundamental right protected by the German constitution and cannot be abolished by a simple majority in the Bundestag."
    },
    {
        "qNum": 13,
        "q": "Im Parlament steht der Begriff 'Opposition' für ...",
        "tq": "In parliament, the term 'opposition' stands for ...",
        "o": {
            "a": "die regierenden Parteien.",
            "b": "die Fraktion mit den meisten Abgeordneten.",
            "c": "alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten.",
            "d": "alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören."
        },
        "to": {
            "a": "the ruling parties.",
            "b": "the parliamentary group with the most members.",
            "c": "all parties that were able to clear the 5% hurdle in the last election.",
            "d": "all members of parliament who do not belong to the governing party/parties."
        },
        "a": "d",
        "r": "The correct answer is 'alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören.' because the opposition in parliament comprises all members who are not part of the ruling party or coalition."
    },
    {
        "qNum": 14,
        "q": "Meinungsfreiheit in Deutschland heißt, dass ich...",
        "tq": "Freedom of expression in Germany means that I...",
        "o": {
            "a": "Passanten auf der Straße beschimpfen darf.",
            "b": "meine Meinung in Leserbriefen äußern kann.",
            "c": "Nazi-, Hamas- oder Islamischer Staat-Symbole öffentlich tragen darf.",
            "d": "meine Meinung nur dann äußern darf, solange ich der Regierung nicht widerspreche."
        },
        "to": {
            "a": "am allowed to insult passers-by on the street.",
            "b": "can express my opinion in letters to the editor.",
            "c": "am allowed to publicly display Nazi, Hamas, or Islamic State symbols.",
            "d": "am only allowed to express my opinion as long as I do not contradict the government."
        },
        "a": "b",
        "r": "The correct answer is 'meine Meinung in Leserbriefen äußern kann.' because freedom of expression in Germany allows individuals to express their opinions, such as through letters to the editor, but it does not extend to hate speech or the public display of symbols of unconstitutional organizations."
    },
    {
        "qNum": 15,
        "q": "Was verbietet das deutsche Grundgesetz?",
        "tq": "What does the German Basic Law prohibit?",
        "o": {
            "a": "Militärdienst",
            "b": "Zwangsarbeit",
            "c": "freie Berufswahl",
            "d": "Arbeit im Ausland"
        },
        "to": {
            "a": "military service",
            "b": "forced labor",
            "c": "free choice of profession",
            "d": "working abroad"
        },
        "a": "b",
        "r": "The correct answer is 'Zwangsarbeit' because the German Basic Law prohibits forced labor as a violation of human dignity."
    },
    {
        "qNum": 16,
        "q": "Wann ist die Meinungsfreiheit in Deutschland eingeschränkt?",
        "tq": "When is freedom of expression restricted in Germany?",
        "o": {
            "a": "bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen",
            "b": "bei Meinungsäußerungen über die Bundesregierung",
            "c": "bei Diskussionen über Religionen",
            "d": "bei Kritik am Staat"
        },
        "to": {
            "a": "in the public dissemination of false claims about individuals",
            "b": "when expressing opinions about the federal government",
            "c": "in discussions about religions",
            "d": "when criticizing the state"
        },
        "a": "a",
        "r": "The correct answer is 'bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen' because freedom of expression is restricted when it infringes on the rights and reputation of others, such as by spreading false accusations."
    },
    {
        "qNum": 17,
        "q": "Die deutschen Gesetze verbieten...",
        "tq": "German laws prohibit...",
        "o": {
            "a": "Meinungsfreiheit der Einwohnerinnen und Einwohner.",
            "b": "Petitionen der Bürgerinnen und Bürger.",
            "c": "Versammlungsfreiheit der Einwohnerinnen und Einwohner.",
            "d": "Ungleichbehandlung der Bürgerinnen und Bürger durch den Staat."
        },
        "to": {
            "a": "freedom of expression of residents.",
            "b": "petitions from citizens.",
            "c": "freedom of assembly of residents.",
            "d": "unequal treatment of citizens by the state."
        },
        "a": "d",
        "r": "The correct answer is 'Ungleichbehandlung der Bürgerinnen und Bürger durch den Staat.' because German laws prohibit unequal treatment of citizens by the state to ensure fairness and equality."
    },
    {
        "qNum": 18,
        "q": "Welches Grundrecht ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?",
        "tq": "Which basic right is guaranteed in Article 1 of the Basic Law of the Federal Republic of Germany?",
        "o": {
            "a": "die Unantastbarkeit der Menschenwürde",
            "b": "das Recht auf Leben",
            "c": "Religionsfreiheit",
            "d": "Meinungsfreiheit"
        },
        "to": {
            "a": "the inviolability of human dignity",
            "b": "the right to life",
            "c": "freedom of religion",
            "d": "freedom of expression"
        },
        "a": "a",
        "r": "The correct answer is 'die Unantastbarkeit der Menschenwürde' because Article 1 of the German Basic Law guarantees the inviolability of human dignity."
    },
    {
        "qNum": 19,
        "q": "Was versteht man unter dem Recht der 'Freizügigkeit' in Deutschland?",
        "tq": "What is meant by the right of 'freedom of movement' in Germany?",
        "o": {
            "a": "Man darf sich seinen Wohnort selbst aussuchen.",
            "b": "Man kann seinen Beruf wechseln.",
            "c": "Man darf sich für eine andere Religion entscheiden.",
            "d": "Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen."
        },
        "to": {
            "a": "You are free to choose your place of residence.",
            "b": "You can change your profession.",
            "c": "You are free to choose another religion.",
            "d": "You are allowed to move around in public only lightly dressed."
        },
        "a": "a",
        "r": "The correct answer is 'Man darf sich seinen Wohnort selbst aussuchen.' because freedom of movement in Germany primarily refers to the right to choose one's place of residence freely."
    },
    {
        "qNum": 20,
        "q": "Eine Partei in Deutschland verfolgt das Ziel, eine Diktatur zu errichten. Sie ist dann ...",
        "tq": "A party in Germany pursues the goal of establishing a dictatorship. It is then ...",
        "o": {
            "a": "tolerant.",
            "b": "rechtsstaatlich orientiert.",
            "c": "gesetzestreu.",
            "d": "verfassungswidrig."
        },
        "to": {
            "a": "tolerant.",
            "b": "oriented towards the rule of law.",
            "c": "law-abiding.",
            "d": "unconstitutional."
        },
        "a": "d",
        "r": "The correct answer is 'verfassungswidrig.' because a party that aims to establish a dictatorship is violating the constitution and is therefore unconstitutional."
    },
    {
        "qNum": 21,
        "id": "21.png",
        "q": "Welches ist das Wappen der Bundesrepublik Deutschland?",
        "tq": "Which is the coat of arms of the Federal Republic of Germany?",
        "o": {
            "a": "Bild 1",
            "b": "Bild 2",
            "c": "Bild 3",
            "d": "Bild 4"
        },
        "to": {
            "a": "Image 1",
            "b": "Image 2",
            "c": "Image 3",
            "d": "Image 4"
        },
        "a": "a",
        "r": "The correct answer is 'Bild 1' because Image 1 shows the eagle, which is the coat of arms of the Federal Republic of Germany."
    },
    {
        "qNum": 22,
        "q": "Was für eine Staatsform hat Deutschland?",
        "tq": "What form of government does Germany have?",
        "o": {
            "a": "Monarchie",
            "b": "Diktatur",
            "c": "Republik",
            "d": "Fürstentum"
        },
        "to": {
            "a": "monarchy",
            "b": "dictatorship",
            "c": "republic",
            "d": "principality"
        },
        "a": "c",
        "r": "The correct answer is 'Republik' because Germany is a republic, a state in which supreme power is held by the people and their elected representatives."
    },
    {
        "qNum": 23,
        "q": "In Deutschland sind die meisten Erwerbstätigen ...",
        "tq": "In Germany, most employed people are ...",
        "o": {
            "a": "in kleinen Familienunternehmen beschäftigt.",
            "b": "ehrenamtlich für ein Bundesland tätig.",
            "c": "selbstständig mit einer eigenen Firma tätig.",
            "d": "bei einer Firma oder Behörde beschäftigt."
        },
        "to": {
            "a": "employed in small family businesses.",
            "b": "working voluntarily for a federal state.",
            "c": "self-employed with their own company.",
            "d": "employed by a company or public authority."
        },
        "a": "d",
        "r": "The correct answer is 'bei einer Firma oder Behörde beschäftigt.' because the majority of employed people in Germany work for a company or public authority."
    },
    {
        "qNum": 24,
        "q": "Wie viele Bundesländer hat die Bundesrepublik Deutschland?",
        "tq": "How many federal states does the Federal Republic of Germany have?",
        "o": {
            "a": "14",
            "b": "15",
            "c": "16",
            "d": "17"
        },
        "to": {
            "a": "14",
            "b": "15",
            "c": "16",
            "d": "17"
        },
        "a": "c",
        "r": "The correct answer is '16' because the Federal Republic of Germany consists of 16 federal states."
    },
    {
        "qNum": 25,
        "q": "Was ist kein Bundesland der Bundesrepublik Deutschland?",
        "tq": "What is not a federal state of the Federal Republic of Germany?",
        "o": {
            "a": "Elsass-Lothringen",
            "b": "Nordrhein-Westfalen",
            "c": "Mecklenburg-Vorpommern",
            "d": "Sachsen-Anhalt"
        },
        "to": {
            "a": "Alsace-Lorraine",
            "b": "North Rhine-Westphalia",
            "c": "Mecklenburg-Western Pomerania",
            "d": "Saxony-Anhalt"
        },
        "a": "a",
        "r": "The correct answer is 'Elsass-Lothringen' because Alsace-Lorraine is a historical region that is now part of France, not a federal state of Germany."
    },
    {
        "qNum": 26,
        "q": "Deutschland ist ...",
        "tq": "Germany is ...",
        "o": {
            "a": "eine kommunistische Republik.",
            "b": "ein demokratischer und sozialer Bundesstaat.",
            "c": "eine kapitalistische und soziale Monarchie.",
            "d": "ein sozialer und sozialistischer Bundesstaat."
        },
        "to": {
            "a": "a communist republic.",
            "b": "a democratic and social federal state.",
            "c": "a capitalist and social monarchy.",
            "d": "a social and socialist federal state."
        },
        "a": "b",
        "r": "The correct answer is 'ein demokratischer und sozialer Bundesstaat.' because Germany is a democratic and social federal state, combining democratic principles with a social welfare system."
    },
    {
        "qNum": 27,
        "q": "Deutschland ist ...",
        "tq": "Germany is ...",
        "o": {
            "a": "ein sozialistischer Staat.",
            "b": "ein Bundesstaat.",
            "c": "eine Diktatur.",
            "d": "eine Monarchie."
        },
        "to": {
            "a": "a socialist state.",
            "b": "a federal state.",
            "c": "a dictatorship.",
            "d": "a monarchy."
        },
        "a": "b",
        "r": "The correct answer is 'ein Bundesstaat.' because Germany is a federal state, consisting of several states (Länder) that have a degree of autonomy."
    },
    {
        "qNum": 28,
        "q": "Wer wählt in Deutschland die Abgeordneten zum Bundestag?",
        "tq": "Who elects the members of the Bundestag in Germany?",
        "o": {
            "a": "das Militär",
            "b": "die Wirtschaft",
            "c": "das wahlberechtigte Volk",
            "d": "die Verwaltung"
        },
        "to": {
            "a": "the military",
            "b": "the economy",
            "c": "the eligible voters",
            "d": "the administration"
        },
        "a": "c",
        "r": "The correct answer is 'das wahlberechtigte Volk' because the members of the Bundestag, the German parliament, are elected by the eligible voting population."
    },
    {
        "qNum": 29,
        "q": "Welches Tier ist das Wappentier der Bundesrepublik Deutschland?",
        "tq": "Which animal is the heraldic animal of the Federal Republic of Germany?",
        "o": {
            "a": "Löwe",
            "b": "Adler",
            "c": "Bär",
            "d": "Pferd"
        },
        "to": {
            "a": "lion",
            "b": "eagle",
            "c": "bear",
            "d": "horse"
        },
        "a": "b",
        "r": "The correct answer is 'Adler' because the eagle is the heraldic animal of the Federal Republic of Germany."
    },
    {
        "qNum": 30,
        "q": "Was ist kein Merkmal unserer Demokratie?",
        "tq": "What is not a feature of our democracy?",
        "o": {
            "a": "regelmäßige Wahlen",
            "b": "Pressezensur",
            "c": "Meinungsfreiheit",
            "d": "verschiedene Parteien"
        },
        "to": {
            "a": "regular elections",
            "b": "press censorship",
            "c": "freedom of expression",
            "d": "different parties"
        },
        "a": "b",
        "r": "The correct answer is 'Pressezensur' because press censorship is the suppression of information and is contrary to the principles of democracy, which include freedom of expression and a free press."
    },
    {
        "qNum": 31,
        "q": "Die Zusammenarbeit von Parteien zur Bildung einer Regierung nennt man in Deutschland ...",
        "tq": "The cooperation of parties to form a government is called ... in Germany.",
        "o": {
            "a": "Einheit.",
            "b": "Koalition.",
            "c": "Ministerium.",
            "d": "Fraktion."
        },
        "to": {
            "a": "unity.",
            "b": "coalition.",
            "c": "ministry.",
            "d": "parliamentary group."
        },
        "a": "b",
        "r": "The correct answer is 'Koalition.' because when parties join forces to form a government, it is called a coalition."
    },
    {
        "qNum": 32,
        "q": "Was ist keine staatliche Gewalt in Deutschland?",
        "tq": "What is not a branch of government in Germany?",
        "o": {
            "a": "Gesetzgebung",
            "b": "Regierung",
            "c": "Presse",
            "d": "Rechtsprechung"
        },
        "to": {
            "a": "legislation",
            "b": "government",
            "c": "press",
            "d": "jurisdiction"
        },
        "a": "c",
        "r": "The correct answer is 'Presse' because the press, while important in a democracy, is not formally considered one of the branches of government. The branches are the legislative (Gesetzgebung), executive (Regierung), and judicial (Rechtsprechung)."
    },
    {
        "qNum": 33,
        "q": "Welche Aussage ist richtig? In Deutschland...",
        "tq": "Which statement is correct? In Germany...",
        "o": {
            "a": "sind Staat und Religionsgemeinschaften voneinander getrennt.",
            "b": "bilden die Religionsgemeinschaften den Staat.",
            "c": "ist der Staat abhängig von den Religionsgemeinschaften.",
            "d": "bilden Staat und Religionsgemeinschaften eine Einheit."
        },
        "to": {
            "a": "state and religious communities are separate.",
            "b": "religious communities form the state.",
            "c": "the state is dependent on religious communities.",
            "d": "state and religious communities form a unit."
        },
        "a": "a",
        "r": "The correct answer is 'sind Staat und Religionsgemeinschaften voneinander getrennt.' because in Germany, the state and religious communities are separate, a principle known as the separation of church and state."
    },
    {
        "qNum": 34,
        "q": "Was ist Deutschland nicht?",
        "tq": "What is Germany not?",
        "o": {
            "a": "eine Demokratie",
            "b": "ein Rechtsstaat",
            "c": "eine Monarchie",
            "d": "ein Sozialstaat"
        },
        "to": {
            "a": "a democracy",
            "b": "a constitutional state",
            "c": "a monarchy",
            "d": "a welfare state"
        },
        "a": "c",
        "r": "The correct answer is 'eine Monarchie' because Germany is a republic, not a monarchy."
    },
    {
        "qNum": 35,
        "q": "Womit finanziert der deutsche Staat die Sozialversicherung?",
        "tq": "How does the German state finance social security?",
        "o": {
            "a": "Kirchensteuer",
            "b": "Sozialabgaben",
            "c": "Spendengeldern",
            "d": "Vereinsbeiträgen"
        },
        "to": {
            "a": "church tax",
            "b": "social contributions",
            "c": "donations",
            "d": "club contributions"
        },
        "a": "b",
        "r": "The correct answer is 'Sozialabgaben' because the German state finances social security through social contributions paid by employers and employees."
    },
    {
        "qNum": 36,
        "q": "Welche Maßnahme schafft in Deutschland soziale Sicherheit?",
        "tq": "Which measure creates social security in Germany?",
        "o": {
            "a": "die Krankenversicherung",
            "b": "die Autoversicherung",
            "c": "die Gebäudeversicherung",
            "d": "die Haftpflichtversicherung"
        },
        "to": {
            "a": "health insurance",
            "b": "car insurance",
            "c": "building insurance",
            "d": "liability insurance"
        },
        "a": "a",
        "r": "The correct answer is 'die Krankenversicherung' because health insurance is a key component of Germany's social security system, providing access to healthcare for all."
    },
    {
        "qNum": 37,
        "q": "Wie werden die Regierungschefinnen/Regierungschefs der meisten Bundesländer in Deutschland genannt?",
        "tq": "What are the heads of government of most federal states in Germany called?",
        "o": {
            "a": "Erste Ministerin/Erster Minister",
            "b": "Premierministerin/Premierminister",
            "c": "Senatorin/Senator",
            "d": "Ministerpräsidentin/Ministerpräsident"
        },
        "to": {
            "a": "First Minister",
            "b": "Prime Minister",
            "c": "Senator",
            "d": "Minister-President"
        },
        "a": "d",
        "r": "The correct answer is 'Ministerpräsidentin/Ministerpräsident' because the heads of government of most German federal states are called Minister-President (Ministerpräsident)."
    },
    {
        "qNum": 38,
        "q": "Die Bundesrepublik Deutschland ist ein demokratischer und sozialer ...",
        "tq": "The Federal Republic of Germany is a democratic and social ...",
        "o": {
            "a": "Staatenverbund.",
            "b": "Bundesstaat.",
            "c": "Staatenbund.",
            "d": "Zentralstaat."
        },
        "to": {
            "a": "association of states.",
            "b": "federal state.",
            "c": "confederation of states.",
            "d": "centralized state."
        },
        "a": "b",
        "r": "The correct answer is 'Bundesstaat.' because the Federal Republic of Germany is a democratic and social federal state, meaning it is composed of states (Länder) with a degree of autonomy."
    },
    {
        "qNum": 39,
        "q": "Was hat jedes deutsche Bundesland?",
        "tq": "What does every German federal state have?",
        "o": {
            "a": "eine eigene Außenministerin/einen eigenen Außenminister",
            "b": "eine eigene Währung",
            "c": "eine eigene Armee",
            "d": "eine eigene Regierung"
        },
        "to": {
            "a": "its own foreign minister",
            "b": "its own currency",
            "c": "its own army",
            "d": "its own government"
        },
        "a": "d",
        "r": "The correct answer is 'eine eigene Regierung' because each federal state in Germany has its own government, responsible for its own affairs."
    },
    {
        "qNum": 40,
        "q": "Mit welchen Worten beginnt die deutsche Nationalhymne?",
        "tq": "With which words does the German national anthem begin?",
        "o": {
            "a": "Völker, hört die Signale ...",
            "b": "Einigkeit und Recht und Freiheit...",
            "c": "Freude schöner Götterfunken ...",
            "d": "Deutschland einig Vaterland ..."
        },
        "to": {
            "a": "Peoples, hear the signals ...",
            "b": "Unity and justice and freedom...",
            "c": "Joy, beautiful spark of divinity ...",
            "d": "Germany united fatherland ..."
        },
        "a": "b",
        "r": "The correct answer is 'Einigkeit und Recht und Freiheit...' because the German national anthem begins with the words 'Unity and justice and freedom...'"
    },
    {
        "qNum": 41,
        "q": "Warum gibt es in einer Demokratie mehr als eine Partei?",
        "tq": "Why are there more than one party in a democracy?",
        "o": {
            "a": "weil dadurch die unterschiedlichen Meinungen der Bürgerinnen und Bürger vertreten werden",
            "b": "damit Bestechung in der Politik begrenzt wird",
            "c": "um politische Demonstrationen zu verhindern",
            "d": "um wirtschaftlichen Wettbewerb zu anzuregen"
        },
        "to": {
            "a": "because it represents the different opinions of the citizens",
            "b": "to limit bribery in politics",
            "c": "to prevent political demonstrations",
            "d": "to stimulate economic competition"
        },
        "a": "a",
        "r": "The correct answer is 'weil dadurch die unterschiedlichen Meinungen der Bürgerinnen und Bürger vertreten werden' because democracies have multiple parties to represent the diverse opinions and interests of the population."
    },
    {
        "qNum": 42,
        "q": "Wer beschließt in Deutschland ein neues Gesetz?",
        "tq": "Who passes a new law in Germany?",
        "o": {
            "a": "die Regierung",
            "b": "das Parlament",
            "c": "die Gerichte",
            "d": "die Polizei"
        },
        "to": {
            "a": "the government",
            "b": "the parliament",
            "c": "the courts",
            "d": "the police"
        },
        "a": "b",
        "r": "The correct answer is 'das Parlament' because in Germany, laws are passed by the parliament (Bundestag and Bundesrat)."
    },
    {
        "qNum": 43,
        "q": "Wann kann in Deutschland eine Partei verboten werden?",
        "tq": "When can a party be banned in Germany?",
        "o": {
            "a": "wenn ihr Wahlkampf zu teuer ist",
            "b": "wenn sie gegen die Verfassung kämpft",
            "c": "wenn sie Kritik am Staatsoberhaupt äußert",
            "d": "wenn ihr Programm eine neue Richtung vorschlägt"
        },
        "to": {
            "a": "if its election campaign is too expensive",
            "b": "if it fights against the constitution",
            "c": "if it criticizes the head of state",
            "d": "if its program proposes a new direction"
        },
        "a": "b",
        "r": "The correct answer is 'wenn sie gegen die Verfassung kämpft' because a party can be banned in Germany if it actively works against the constitution."
    },
    {
        "qNum": 44,
        "q": "Wen kann man als Bürgerin/Bürger in Deutschland nicht direkt wählen?",
        "tq": "Whom can you not directly elect as a citizen in Germany?",
        "o": {
            "a": "Abgeordnete des EU-Parlaments",
            "b": "Die Bundespräsidentin/den Bundespräsidenten",
            "c": "Landtagsabgeordnete",
            "d": "Bundestagsabgeordnete"
        },
        "to": {
            "a": "Members of the EU Parliament",
            "b": "The Federal President",
            "c": "Members of the State Parliament",
            "d": "Members of the Federal Parliament"
        },
        "a": "b",
        "r": "The correct answer is 'Die Bundespräsidentin/den Bundespräsidenten' because the Federal President of Germany is elected by a special assembly (Bundesversammlung), not directly by the citizens."
    },
    {
        "qNum": 45,
        "q": "Zu welcher Versicherung gehört die Pflegeversicherung?",
        "tq": "To which insurance does long-term care insurance belong?",
        "o": {
            "a": "Sozialversicherung",
            "b": "Unfallversicherung",
            "c": "Hausratsversicherung",
            "d": "Haftpflicht- und Feuerversicherung"
        },
        "to": {
            "a": "social insurance",
            "b": "accident insurance",
            "c": "household insurance",
            "d": "liability and fire insurance"
        },
        "a": "a",
        "r": "The correct answer is 'Sozialversicherung' because long-term care insurance (Pflegeversicherung) is part of the social insurance system in Germany."
    },
    {
        "qNum": 46,
        "q": "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört dazu?",
        "tq": "The German state has many tasks. Which task is one of them?",
        "o": {
            "a": "Er baut Straßen und Schulen.",
            "b": "Er verkauft Lebensmittel und Kleidung.",
            "c": "Er versorgt alle Einwohnerinnen und Einwohner kostenlos mit Zeitungen.",
            "d": "Er produziert Autos und Busse."
        },
        "to": {
            "a": "It builds roads and schools.",
            "b": "It sells food and clothing.",
            "c": "It provides all residents with free newspapers.",
            "d": "It produces cars and buses."
        },
        "a": "a",
        "r": "The correct answer is 'Er baut Straßen und Schulen.' because building infrastructure like roads and schools is a key responsibility of the German state."
    },
    {
        "qNum": 47,
        "q": "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört nicht dazu?",
        "tq": "The German state has many tasks. Which task is not one of them?",
        "o": {
            "a": "Er bezahlt für alle Staatsangehörigen Urlaubsreisen.",
            "b": "Er zahlt Kindergeld.",
            "c": "Er unterstützt Museen.",
            "d": "Er fördert Sportlerinnen und Sportler."
        },
        "to": {
            "a": "It pays for holiday trips for all citizens.",
            "b": "It pays child benefits.",
            "c": "It supports museums.",
            "d": "It promotes athletes."
        },
        "a": "a",
        "r": "The correct answer is 'Er bezahlt für alle Staatsangehörigen Urlaubsreisen.' because paying for everyone's holiday trips is not a task of the German state. It does, however, provide child benefits, support museums, and promote athletes."
    },
    {
        "qNum": 48,
        "q": "Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands?",
        "tq": "Which body is not one of the constitutional bodies of Germany?",
        "o": {
            "a": "der Bundesrat",
            "b": "die Bundespräsidentin/der Bundespräsident",
            "c": "die Bürgerversammlung",
            "d": "die Regierung"
        },
        "to": {
            "a": "the Bundesrat",
            "b": "the Federal President",
            "c": "the citizens' assembly",
            "d": "the government"
        },
        "a": "c",
        "r": "The correct answer is 'die Bürgerversammlung' because citizens' assemblies are not part of the formal constitutional bodies of Germany. The constitutional bodies include the Bundesrat, the Federal President, the Bundestag, and the government."
    },
    {
        "qNum": 49,
        "q": "Wer bestimmt in Deutschland die Schulpolitik?",
        "tq": "Who determines school policy in Germany?",
        "o": {
            "a": "die Lehrer und Lehrerinnen",
            "b": "die Bundesländer",
            "c": "das Familienministerium",
            "d": "die Universitäten"
        },
        "to": {
            "a": "the teachers",
            "b": "the federal states",
            "c": "the family ministry",
            "d": "the universities"
        },
        "a": "b",
        "r": "The correct answer is 'die Bundesländer' because in Germany, school policy is primarily determined by the individual federal states."
    },
    {
        "qNum": 50,
        "q": "Die Wirtschaftsform in Deutschland nennt man ...",
        "tq": "The economic system in Germany is called ...",
        "o": {
            "a": "freie Zentralwirtschaft.",
            "b": "soziale Marktwirtschaft.",
            "c": "gelenkte Zentralwirtschaft.",
            "d": "Planwirtschaft."
        },
        "to": {
            "a": "free central economy.",
            "b": "social market economy.",
            "c": "controlled central economy.",
            "d": "planned economy."
        },
        "a": "b",
        "r": "The correct answer is 'soziale Marktwirtschaft.' because the economic system in Germany is known as the social market economy, which combines a free market with social support and regulations."
    },
    {
        "qNum": 51,
        "q": "Zu einem demokratischen Rechtsstaat gehört es nicht, dass ...",
        "tq": "It is not part of a democratic constitutional state that ...",
        "o": {
            "a": "Menschen sich kritisch über die Regierung äußern können.",
            "b": "Bürger friedlich demonstrieren gehen dürfen.",
            "c": "Menschen von einer Privatpolizei ohne Grund verhaftet werden.",
            "d": "jemand ein Verbrechen begeht und deshalb verhaftet wird."
        },
        "to": {
            "a": "people can critically express their opinion about the government.",
            "b": "citizens are allowed to demonstrate peacefully.",
            "c": "people are arrested by a private police force without reason.",
            "d": "someone commits a crime and is arrested for it."
        },
        "a": "c",
        "r": "The correct answer is 'Menschen von einer Privatpolizei ohne Grund verhaftet werden.' because in a democratic constitutional state, arrests must be lawful and not arbitrary."
    },
    {
        "qNum": 52,
        "q": "Was bedeutet 'Volkssouveränität'? Alle Staatsgewalt geht vom ... aus.",
        "tq": "What does 'popular sovereignty' mean? All state power comes from the ...",
        "o": {
            "a": "Volke",
            "b": "Bundestag",
            "c": "preußischen König",
            "d": "Bundesverfassungsgericht"
        },
        "to": {
            "a": "people",
            "b": "Bundestag",
            "c": "Prussian king",
            "d": "Federal Constitutional Court"
        },
        "a": "a",
        "r": "The correct answer is 'Volke' because popular sovereignty means that all state power originates from the people."
    },
    {
        "qNum": 53,
        "q": "Was bedeutet 'Rechtsstaat' in Deutschland?",
        "tq": "What does 'constitutional state' mean in Germany?",
        "o": {
            "a": "Der Staat hat Recht.",
            "b": "Es gibt nur rechte Parteien.",
            "c": "Die Bürgerinnen und Bürger entscheiden über Gesetze.",
            "d": "Der Staat muss die Gesetze einhalten."
        },
        "to": {
            "a": "The state is right.",
            "b": "There are only right-wing parties.",
            "c": "The citizens decide on laws.",
            "d": "The state must obey the laws."
        },
        "a": "d",
        "r": "The correct answer is 'Der Staat muss die Gesetze einhalten.' because a 'Rechtsstaat' means that the state is bound by the law and must act within its legal framework."
    },
    {
        "qNum": 54,
        "q": "Was ist keine staatliche Gewalt in Deutschland?",
        "tq": "What is not a branch of government in Germany?",
        "o": {
            "a": "Legislative",
            "b": "Judikative",
            "c": "Exekutive",
            "d": "Direktive"
        },
        "to": {
            "a": "Legislative",
            "b": "Judicial",
            "c": "Executive",
            "d": "Directive"
        },
        "a": "d",
        "r": "The correct answer is 'Direktive' because the branches of government in Germany are the Legislative (legislative), Judikative (judicial), and Exekutive (executive). 'Direktive' is not a recognized branch."
    },
    {
        "qNum": 55,
        "image": "55.png",
        "q": "Was zeigt dieses Bild?",
        "tq": "What does this picture show?",
        "o": {
            "a": "den Bundestagssitz in Berlin",
            "b": "das Bundesverfassungsgericht in Karlsruhe",
            "c": "das Bundesratsgebäude in Berlin",
            "d": "das Bundeskanzleramt in Berlin"
        },
        "to": {
            "a": "the Bundestag building in Berlin",
            "b": "the Federal Constitutional Court in Karlsruhe",
            "c": "the Bundesrat building in Berlin",
            "d": "the Federal Chancellery in Berlin"
        },
        "a": "a",
        "r": "The correct answer is 'den Bundestagssitz in Berlin' because the image shows the Reichstag building, which houses the German Bundestag."
    },
    {
        "qNum": 56,
        "q": "Welches Amt gehört in Deutschland zur Gemeindeverwaltung?",
        "tq": "Which office belongs to the municipal administration in Germany?",
        "o": {
            "a": "Pfarramt",
            "b": "Ordnungsamt",
            "c": "Finanzamt",
            "d": "Auswärtiges Amt"
        },
        "to": {
            "a": "parish office",
            "b": "public order office",
            "c": "tax office",
            "d": "foreign office"
        },
        "a": "b",
        "r": "The correct answer is 'Ordnungsamt' because the Ordnungsamt (public order office) is part of the municipal administration, responsible for local public order and safety."
    },
    {
        "qNum": 57,
        "q": "Wer wird meistens zur Präsidentin/zum Präsidenten des Deutschen Bundestages gewählt?",
        "tq": "Who is usually elected as the President of the German Bundestag?",
        "o": {
            "a": "die/der älteste Abgeordnete im Parlament",
            "b": "die Ministerpräsidentin/der Ministerpräsident des größten Bundeslandes",
            "c": "eine ehemalige Bundeskanzlerin/ein ehemaliger Bundeskanzler",
            "d": "eine Abgeordnete/ein Abgeordneter der stärksten Fraktion"
        },
        "to": {
            "a": "the oldest member of parliament",
            "b": "the Minister-President of the largest federal state",
            "c": "a former Federal Chancellor",
            "d": "a member of parliament from the strongest parliamentary group"
        },
        "a": "d",
        "r": "The correct answer is 'eine Abgeordnete/ein Abgeordneter der stärksten Fraktion' because the President of the Bundestag is usually a member of parliament from the strongest parliamentary group."
    },
    {
        "qNum": 58,
        "q": "Wer ernennt in Deutschland die Ministerinnen/die Minister der Bundesregierung?",
        "tq": "Who appoints the ministers of the federal government in Germany?",
        "o": {
            "a": "die Präsidentin/der Präsident des Bundesverfassungsgerichtes",
            "b": "die Bundespräsidentin/der Bundespräsident",
            "c": "die Bundesratspräsidentin/der Bundesratspräsident",
            "d": "die Bundestagspräsidentin/der Bundestagspräsident"
        },
        "to": {
            "a": "the President of the Federal Constitutional Court",
            "b": "the Federal President",
            "c": "the President of the Bundesrat",
            "d": "the President of the Bundestag"
        },
        "a": "b",
        "r": "The correct answer is 'die Bundespräsidentin/der Bundespräsident' because the Federal President of Germany appoints the ministers of the federal government upon the proposal of the Federal Chancellor."
    },
    {
        "qNum": 59,
        "q": "Vor wie vielen Jahren gab es erstmals eine jüdische Gemeinde auf dem Gebiet des heutigen Deutschlands?",
        "tq": "How many years ago was there a Jewish community for the first time in the area of today's Germany?",
        "o": {
            "a": "vor etwa 300 Jahren",
            "b": "vor etwa 700 Jahren",
            "c": "vor etwa 1150 Jahren",
            "d": "vor etwa 1700 Jahren"
        },
        "to": {
            "a": "about 300 years ago",
            "b": "about 700 years ago",
            "c": "about 1150 years ago",
            "d": "about 1700 years ago"
        },
        "a": "d",
        "r": "The correct answer is 'vor etwa 1700 Jahren' because the first documented evidence of a Jewish community in the area of present-day Germany dates back about 1700 years."
    },
    {
        "qNum": 60,
        "q": "In Deutschland gehören der Bundestag und der Bundesrat zur ...",
        "tq": "In Germany, the Bundestag and the Bundesrat belong to the ...",
        "o": {
            "a": "Exekutive.",
            "b": "Legislative.",
            "c": "Direktive.",
            "d": "Judikative."
        },
        "to": {
            "a": "executive.",
            "b": "legislative.",
            "c": "directive.",
            "d": "judiciary."
        },
        "a": "b",
        "r": "The correct answer is 'Legislative.' because the Bundestag and the Bundesrat together form the legislative branch of the German government."
    },
    {
        "qNum": 61,
        "q": "Was bedeutet 'Volkssouveränität'?",
        "tq": "What does 'popular sovereignty' mean?",
        "o": {
            "a": "Die Königin/der König herrscht über das Volk.",
            "b": "Das Bundesverfassungsgericht steht über der Verfassung.",
            "c": "Die Interessenverbände üben die Souveränität zusammen mit der Regierung aus.",
            "d": "Die Staatsgewalt geht vom Volke aus."
        },
        "to": {
            "a": "The queen/king rules over the people.",
            "b": "The Federal Constitutional Court is above the constitution.",
            "c": "The interest groups exercise sovereignty together with the government.",
            "d": "State power comes from the people."
        },
        "a": "d",
        "r": "The correct answer is 'Die Staatsgewalt geht vom Volke aus.' because popular sovereignty means that the authority of the state is derived from the consent of its people."
    },
    {
        "qNum": 62,
        "q": "Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das ...",
        "tq": "When the parliament of a German federal state is elected, it is called ...",
        "o": {
            "a": "Kommunalwahl",
            "b": "Landtagswahl",
            "c": "Europawahl",
            "d": "Bundestagswahl"
        },
        "to": {
            "a": "municipal election",
            "b": "state parliament election",
            "c": "European election",
            "d": "federal election"
        },
        "a": "b",
        "r": "The correct answer is 'Landtagswahl' because the parliament of a German federal state is called the Landtag, and its election is a Landtagswahl."
    },
    {
        "qNum": 63,
        "q": "Was gehört in Deutschland nicht zur Exekutive?",
        "tq": "What does not belong to the executive branch in Germany?",
        "o": {
            "a": "die Polizei",
            "b": "die Gerichte",
            "c": "das Finanzamt",
            "d": "die Ministerien"
        },
        "to": {
            "a": "the police",
            "b": "the courts",
            "c": "the tax office",
            "d": "the ministries"
        },
        "a": "b",
        "r": "The correct answer is 'die Gerichte' because the courts (Gerichte) belong to the judicial branch (Judikative), not the executive branch (Exekutive), which includes the police, tax office, and ministries."
    },
    {
        "qNum": 64,
        "q": "Die Bundesrepublik Deutschland ist heute gegliedert in...",
        "tq": "Today, the Federal Republic of Germany is divided into...",
        "o": {
            "a": "vier Besatzungszonen.",
            "b": "einen Oststaat und einen Weststaat.",
            "c": "16 Kantone.",
            "d": "Bund, Länder und Kommunen."
        },
        "to": {
            "a": "four occupation zones.",
            "b": "an eastern state and a western state.",
            "c": "16 cantons.",
            "d": "federation, states and municipalities."
        },
        "a": "d",
        "r": "The correct answer is 'Bund, Länder und Kommunen.' because the Federal Republic of Germany is structured into the federal level (Bund), the state level (Länder), and the local level (Kommunen)."
    },
    {
        "qNum": 65,
        "q": "Es gehört nicht zu den Aufgaben des Deutschen Bundestages, ...",
        "tq": "It is not one of the tasks of the German Bundestag to ...",
        "o": {
            "a": "Gesetze zu entwerfen.",
            "b": "die Bundesregierung zu kontrollieren.",
            "c": "die Bundeskanzlerin/den Bundeskanzler zu wählen.",
            "d": "das Bundeskabinett zu bilden."
        },
        "to": {
            "a": "to draft laws.",
            "b": "to control the federal government.",
            "c": "to elect the Federal Chancellor.",
            "d": "to form the Federal Cabinet."
        },
        "a": "d",
        "r": "The correct answer is 'das Bundeskabinett zu bilden.' because the Bundestag elects the Federal Chancellor, who then forms the Federal Cabinet. The Bundestag does not directly form the cabinet."
    },
    {
        "qNum": 66,
        "q": "Welche Städte haben die größten jüdischen Gemeinden in Deutschland?",
        "tq": "Which cities have the largest Jewish communities in Germany?",
        "o": {
            "a": "Berlin und München",
            "b": "Hamburg und Essen",
            "c": "Nürnberg und Stuttgart",
            "d": "Worms und Speyer"
        },
        "to": {
            "a": "Berlin and Munich",
            "b": "Hamburg and Essen",
            "c": "Nuremberg and Stuttgart",
            "d": "Worms and Speyer"
        },
        "a": "a",
        "r": "The correct answer is 'Berlin und München' because Berlin and Munich have the largest Jewish communities in Germany."
    },
    {
        "qNum": 67,
        "q": "Was ist in Deutschland vor allem eine Aufgabe der Bundesländer?",
        "tq": "What is primarily a task of the federal states in Germany?",
        "o": {
            "a": "Verteidigungspolitik",
            "b": "Außenpolitik",
            "c": "Wirtschaftspolitik",
            "d": "Schulpolitik"
        },
        "to": {
            "a": "defense policy",
            "b": "foreign policy",
            "c": "economic policy",
            "d": "school policy"
        },
        "a": "d",
        "r": "The correct answer is 'Schulpolitik' because education policy (Schulpolitik) is primarily the responsibility of the individual federal states in Germany."
    },
    {
        "qNum": 68,
        "q": "Warum kontrolliert der Staat in Deutschland das Schulwesen?",
        "tq": "Why does the state in Germany control the school system?",
        "o": {
            "a": "weil es in Deutschland nur staatliche Schulen gibt",
            "b": "weil alle Schülerinnen und Schüler einen Schulabschluss haben müssen",
            "c": "weil es in den Bundesländern verschiedene Schulen gibt",
            "d": "weil es nach dem Grundgesetz seine Aufgabe ist"
        },
        "to": {
            "a": "because there are only state schools in Germany",
            "b": "because all pupils must have a school leaving certificate",
            "c": "because there are different schools in the federal states",
            "d": "because it is its task according to the Basic Law"
        },
        "a": "d",
        "r": "The correct answer is 'weil es nach dem Grundgesetz seine Aufgabe ist' because the state's control of the school system is mandated by the Basic Law to ensure quality and standards in education."
    },
    {
        "qNum": 69,
        "q": "Die Bundesrepublik Deutschland hat einen dreistufigen Verwaltungsaufbau. Wie heißt die unterste politische Stufe?",
        "tq": "The Federal Republic of Germany has a three-tier administrative structure. What is the name of the lowest political level?",
        "o": {
            "a": "Stadträte",
            "b": "Landräte",
            "c": "Gemeinden",
            "d": "Bezirksämter"
        },
        "to": {
            "a": "city councilors",
            "b": "district administrators",
            "c": "municipalities",
            "d": "district offices"
        },
        "a": "c",
        "r": "The correct answer is 'Gemeinden' because the lowest political level in Germany's administrative structure is the municipalities (Gemeinden)."
    },
    {
        "qNum": 70,
        "image": "70.png",
        "q": "Was gehört zu den Aufgaben der deutschen Bundespräsidentin/des deutschen Bundespräsidenten?",
        "tq": "What are the tasks of the German Federal President?",
        "o": {
            "a": "Sie/Er führt die Regierungsgeschäfte.",
            "b": "Sie/Er kontrolliert die Regierungspartei.",
            "c": "Sie/Er wählt die Ministerinnen/Minister aus.",
            "d": "Sie/Er schlägt die Kanzlerin/den Kanzler zur Wahl vor."
        },
        "to": {
            "a": "She/He conducts government business.",
            "b": "She/He controls the governing party.",
            "c": "She/He selects the ministers.",
            "d": "She/He proposes the Chancellor for election."
        },
        "a": "d",
        "r": "The correct answer is 'Sie/Er schlägt die Kanzlerin/den Kanzler zur Wahl vor.' because the Federal President proposes the Chancellor for election to the Bundestag."
    },
    {
        "qNum": 71,
        "q": "Wo hält sich die deutsche Bundeskanzlerin/der deutsche Bundeskanzler am häufigsten auf?",
        "tq": "Where does the German Federal Chancellor spend most of their time?",
        "o": {
            "a": "in Bonn, weil sich dort das Bundeskanzleramt und der Bundestag befinden.",
            "b": "auf Schloss Meseberg, dem Gästehaus der Bundesregierung, um Staatsgäste zu empfangen.",
            "c": "auf Schloss Bellevue, dem Amtssitz der Bundespräsidentin/des Bundespräsidenten, um Staatsgäste zu empfangen.",
            "d": "in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden."
        },
        "to": {
            "a": "in Bonn, because the Federal Chancellery and the Bundestag are located there.",
            "b": "at Schloss Meseberg, the Federal Government's guesthouse, to receive state guests.",
            "c": "at Schloss Bellevue, the official residence of the Federal President, to receive state guests.",
            "d": "in Berlin, because the Federal Chancellery and the Bundestag are located there."
        },
        "a": "d",
        "r": "The correct answer is 'in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden.' because the Federal Chancellery and the Bundestag are located in Berlin, making it the center of the Chancellor's work."
    },
    {
        "qNum": 72,
        "q": "Wie heißt die jetzige Bundeskanzlerin/der jetzige Bundeskanzler von Deutschland?",
        "tq": "What is the name of the current Federal Chancellor of Germany?",
        "o": {
            "a": "Gerhard Schröder",
            "b": "Angela Merkel",
            "c": "Franziska Giffey",
            "d": "Olaf Scholz"
        },
        "to": {
            "a": "Gerhard Schröder",
            "b": "Angela Merkel",
            "c": "Franziska Giffey",
            "d": "Olaf Scholz"
        },
        "a": "d",
        "r": "The correct answer is 'Olaf Scholz' because Olaf Scholz is the current Federal Chancellor of Germany."
    },
    {
        "qNum": 73,
        "q": "Die beiden größten Fraktionen im Deutschen Bundestag heißen zurzeit ....",
        "tq": "The two largest parliamentary groups in the German Bundestag are currently ....",
        "o": {
            "a": "CDU/CSU und SPD.",
            "b": "Die Linke und Bündnis 90/Die Grünen.",
            "c": "FDP und SPD.",
            "d": "Die Linke und FDP."
        },
        "to": {
            "a": "CDU/CSU and SPD.",
            "b": "The Left and Alliance 90/The Greens.",
            "c": "FDP and SPD.",
            "d": "The Left and FDP."
        },
        "a": "a",
        "r": "The correct answer is 'CDU/CSU und SPD.' because CDU/CSU and SPD are typically among the largest parliamentary groups in the German Bundestag."
    },
    {
        "qNum": 74,
        "q": "Wie heißt das Parlament für ganz Deutschland?",
        "tq": "What is the name of the parliament for all of Germany?",
        "o": {
            "a": "Bundesversammlung",
            "b": "Volkskammer",
            "c": "Bundestag",
            "d": "Bundesgerichtshof"
        },
        "to": {
            "a": "Federal Assembly",
            "b": "People's Chamber",
            "c": "Bundestag",
            "d": "Federal Court of Justice"
        },
        "a": "c",
        "r": "The correct answer is 'Bundestag' because the parliament for all of Germany is called the Bundestag."
    },
    {
        "qNum": 75,
        "q": "Wie heißt Deutschlands heutiges Staatsoberhaupt?",
        "tq": "What is the name of Germany's current head of state?",
        "o": {
            "a": "Frank-Walter Steinmeier",
            "b": "Bärbel Bas",
            "c": "Bodo Ramelow",
            "d": "Joachim Gauck"
        },
        "to": {
            "a": "Frank-Walter Steinmeier",
            "b": "Bärbel Bas",
            "c": "Bodo Ramelow",
            "d": "Joachim Gauck"
        },
        "a": "a",
        "r": "The correct answer is 'Frank-Walter Steinmeier' because Frank-Walter Steinmeier is the current head of state (Federal President) of Germany."
    },
    {
        "qNum": 76,
        "q": "Was bedeutet die Abkürzung CDU in Deutschland?",
        "tq": "What does the abbreviation CDU mean in Germany?",
        "o": {
            "a": "Christliche Deutsche Union",
            "b": "Club Deutscher Unternehmer",
            "c": "Christlicher Deutscher Umweltschutz",
            "d": "Christlich Demokratische Union"
        },
        "to": {
            "a": "Christian German Union",
            "b": "Club of German Entrepreneurs",
            "c": "Christian German Environmental Protection",
            "d": "Christian Democratic Union"
        },
        "a": "d",
        "r": "The correct answer is 'Christlich Demokratische Union' because CDU stands for Christlich Demokratische Union (Christian Democratic Union)."
    },
    {
        "qNum": 77,
        "q": "Was ist die Bundeswehr?",
        "tq": "What is the Bundeswehr?",
        "o": {
            "a": "die deutsche Polizei",
            "b": "ein deutscher Hafen",
            "c": "eine deutsche Bürgerinitiative",
            "d": "die deutsche Armee"
        },
        "to": {
            "a": "the German police",
            "b": "a German port",
            "c": "a German citizens' initiative",
            "d": "the German army"
        },
        "a": "d",
        "r": "The correct answer is 'die deutsche Armee' because the Bundeswehr is the unified armed forces of Germany."
    },
    {
        "qNum": 78,
        "q": "Was bedeutet die Abkürzung SPD?",
        "tq": "What does the abbreviation SPD mean?",
        "o": {
            "a": "Sozialistische Partei Deutschlands",
            "b": "Sozialpolitische Partei Deutschlands",
            "c": "Sozialdemokratische Partei Deutschlands",
            "d": "Sozialgerechte Partei Deutschlands"
        },
        "to": {
            "a": "Socialist Party of Germany",
            "b": "Social Political Party of Germany",
            "c": "Social Democratic Party of Germany",
            "d": "Social Justice Party of Germany"
        },
        "a": "c",
        "r": "The correct answer is 'Sozialdemokratische Partei Deutschlands' because SPD stands for Sozialdemokratische Partei Deutschlands (Social Democratic Party of Germany)."
    },
    {
        "qNum": 79,
        "q": "Was bedeutet die Abkürzung FDP in Deutschland?",
        "tq": "What does the abbreviation FDP mean in Germany?",
        "o": {
            "a": "Friedliche Demonstrative Partei",
            "b": "Freie Deutschland Partei",
            "c": "Führende Demokratische Partei",
            "d": "Freie Demokratische Partei"
        },
        "to": {
            "a": "Peaceful Demonstrative Party",
            "b": "Free Germany Party",
            "c": "Leading Democratic Party",
            "d": "Free Democratic Party"
        },
        "a": "d",
        "r": "The correct answer is 'Freie Demokratische Partei' because FDP stands for Freie Demokratische Partei (Free Democratic Party)."
    },
    {
        "qNum": 80,
        "q": "Welches Gericht in Deutschland ist zuständig für die Auslegung des Grundgesetzes?",
        "tq": "Which court in Germany is responsible for interpreting the Basic Law?",
        "o": {
            "a": "Oberlandesgericht",
            "b": "Amtsgericht",
            "c": "Bundesverfassungsgericht",
            "d": "Verwaltungsgericht"
        },
        "to": {
            "a": "Higher Regional Court",
            "b": "Local Court",
            "c": "Federal Constitutional Court",
            "d": "Administrative Court"
        },
        "a": "c",
        "r": "The correct answer is 'Bundesverfassungsgericht' because the Bundesverfassungsgericht (Federal Constitutional Court) is the court responsible for interpreting the German Basic Law."
    },
    {
        "qNum": 81,
        "q": "Wer wählt die Bundeskanzlerin/den Bundeskanzler in Deutschland?",
        "tq": "Who elects the Federal Chancellor in Germany?",
        "o": {
            "a": "der Bundesrat",
            "b": "die Bundesversammlung",
            "c": "das Volk",
            "d": "der Bundestag"
        },
        "to": {
            "a": "the Bundesrat",
            "b": "the Federal Assembly",
            "c": "the people",
            "d": "the Bundestag"
        },
        "a": "d",
        "r": "The correct answer is 'der Bundestag' because the Federal Chancellor is elected by the members of the Bundestag."
    },
    {
        "qNum": 82,
        "q": "Wer leitet das deutsche Bundeskabinett?",
        "tq": "Who heads the German Federal Cabinet?",
        "o": {
            "a": "die Bundestagspräsidentin/der Bundestagspräsident",
            "b": "die Bundespräsidentin/der Bundespräsident",
            "c": "die Bundesratspräsidentin/der Bundesratspräsident",
            "d": "die Bundeskanzlerin/der Bundeskanzler"
        },
        "to": {
            "a": "the President of the Bundestag",
            "b": "the Federal President",
            "c": "the President of the Bundesrat",
            "d": "the Federal Chancellor"
        },
        "a": "d",
        "r": "The correct answer is 'die Bundeskanzlerin/der Bundeskanzler' because the Federal Chancellor heads the German Federal Cabinet."
    },
    {
        "qNum": 83,
        "q": "Wer wählt die deutsche Bundeskanzlerin/den deutschen Bundeskanzler?",
        "tq": "Who elects the German Federal Chancellor?",
        "o": {
            "a": "das Volk",
            "b": "die Bundesversammlung",
            "c": "der Bundestag",
            "d": "die Bundesregierung"
        },
        "to": {
            "a": "the people",
            "b": "the Federal Assembly",
            "c": "the Bundestag",
            "d": "the Federal Government"
        },
        "a": "c",
        "r": "The correct answer is 'der Bundestag' because the German Federal Chancellor is elected by the members of the Bundestag."
    },
    {
        "qNum": 84,
        "q": "Welche Hauptaufgabe hat die deutsche Bundespräsidentin/der deutsche Bundespräsident? Sie/Er...",
        "tq": "What is the main task of the German Federal President? She/He...",
        "o": {
            "a": "regiert das Land.",
            "b": "entwirft die Gesetze.",
            "c": "repräsentiert das Land.",
            "d": "überwacht die Einhaltung der Gesetze."
        },
        "to": {
            "a": "governs the country.",
            "b": "drafts the laws.",
            "c": "represents the country.",
            "d": "monitors compliance with the laws."
        },
        "a": "c",
        "r": "The correct answer is 'repräsentiert das Land.' because the main task of the Federal President is to represent Germany internationally and domestically."
    },
    {
        "qNum": 85,
        "q": "Wer bildet den deutschen Bundesrat?",
        "tq": "Who forms the German Bundesrat?",
        "o": {
            "a": "die Abgeordneten des Bundestages",
            "b": "die Ministerinnen und Minister der Bundesregierung",
            "c": "die Regierungsvertreter der Bundesländer",
            "d": "die Parteimitglieder"
        },
        "to": {
            "a": "the members of the Bundestag",
            "b": "the ministers of the Federal Government",
            "c": "the government representatives of the federal states",
            "d": "the party members"
        },
        "a": "c",
        "r": "The correct answer is 'die Regierungsvertreter der Bundesländer' because the German Bundesrat is composed of representatives of the governments of the federal states."
    },
    {
        "qNum": 86,
        "q": "Wer wählt in Deutschland die Bundespräsidentin/den Bundespräsidenten?",
        "tq": "Who elects the Federal President in Germany?",
        "o": {
            "a": "die Bundesversammlung",
            "b": "der Bundesrat",
            "c": "das Bundesparlament",
            "d": "das Bundesverfassungsgericht"
        },
        "to": {
            "a": "the Federal Assembly",
            "b": "the Federal Council",
            "c": "the Federal Parliament",
            "d": "the Federal Constitutional Court"
        },
        "a": "a",
        "r": "The correct answer is 'die Bundesversammlung' because the Federal President is elected by the Bundesversammlung (Federal Assembly), a special body convened for this purpose."
    },
    {
        "qNum": 87,
        "q": "Wer ist das Staatsoberhaupt der Bundesrepublik Deutschland?",
        "tq": "Who is the head of state of the Federal Republic of Germany?",
        "o": {
            "a": "die Bundeskanzlerin/der Bundeskanzler",
            "b": "die Bundespräsidentin/der Bundespräsident",
            "c": "die Bundesratspräsidentin/der Bundesratspräsident",
            "d": "die Bundestagspräsidentin/der Bundestagspräsident"
        },
        "to": {
            "a": "the Federal Chancellor",
            "b": "the Federal President",
            "c": "the President of the Bundesrat",
            "d": "the President of the Bundestag"
        },
        "a": "b",
        "r": "The correct answer is 'die Bundespräsidentin/der Bundespräsident' because the Federal President is the head of state of the Federal Republic of Germany."
    },
    {
        "qNum": 88,
        "q": "Die parlamentarische Opposition im Deutschen Bundestag ...",
        "tq": "The parliamentary opposition in the German Bundestag ...",
        "o": {
            "a": "kontrolliert die Regierung.",
            "b": "entscheidet, wer Bundesministerin/Bundesminister wird.",
            "c": "bestimmt, wer im Bundesrat sitzt.",
            "d": "schlägt die Regierungschefinnen/Regierungschefs der Länder vor."
        },
        "to": {
            "a": "controls the government.",
            "b": "decides who becomes Federal Minister.",
            "c": "determines who sits in the Bundesrat.",
            "d": "proposes the heads of government of the states."
        },
        "a": "a",
        "r": "The correct answer is 'kontrolliert die Regierung.' because the parliamentary opposition's main role is to scrutinize and control the government's actions."
    },
    {
        "qNum": 89,
        "q": "Wie nennt man in Deutschland die Vereinigung von Abgeordneten einer Partei im Parlament?",
        "tq": "What is the association of members of parliament from one party called in Germany?",
        "o": {
            "a": "Verband",
            "b": "Ältestenrat",
            "c": "Fraktion",
            "d": "Opposition"
        },
        "to": {
            "a": "association",
            "b": "council of elders",
            "c": "parliamentary group",
            "d": "opposition"
        },
        "a": "c",
        "r": "The correct answer is 'Fraktion' because the association of members of parliament from one party is called a Fraktion (parliamentary group)."
    },
    {
        "qNum": 90,
        "q": "Die deutschen Bundesländer wirken an der Gesetzgebung des Bundes mit durch ...",
        "tq": "The German federal states participate in federal legislation through ...",
        "o": {
            "a": "den Bundesrat.",
            "b": "die Bundesversammlung.",
            "c": "den Bundestag.",
            "d": "die Bundesregierung."
        },
        "to": {
            "a": "the Bundesrat.",
            "b": "the Federal Assembly.",
            "c": "the Bundestag.",
            "d": "the Federal Government."
        },
        "a": "a",
        "r": "The correct answer is 'den Bundesrat.' because the federal states participate in federal legislation through the Bundesrat (Federal Council)."
    },
    {
        "qNum": 91,
        "q": "In Deutschland kann ein Regierungswechsel in einem Bundesland Auswirkungen auf die Bundespolitik haben. Das Regieren wird ...",
        "tq": "In Germany, a change of government in a federal state can have an impact on federal politics. Governing becomes ...",
        "o": {
            "a": "schwieriger, wenn sich dadurch die Mehrheit im Bundestag ändert.",
            "b": "leichter, wenn dadurch neue Parteien in den Bundesrat kommen.",
            "c": "schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird.",
            "d": "leichter, wenn es sich um ein reiches Bundesland handelt."
        },
        "to": {
            "a": "more difficult if this changes the majority in the Bundestag.",
            "b": "easier if new parties come into the Bundesrat as a result.",
            "c": "more difficult if the majority in the Bundesrat changes as a result.",
            "d": "easier if it is a rich federal state."
        },
        "a": "c",
        "r": "The correct answer is 'schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird.' because a change in the majority in the Bundesrat can affect the passage of federal laws, making governing more difficult."
    },
    {
        "qNum": 92,
        "q": "Was bedeutet die Abkürzung CSU in Deutschland?",
        "tq": "What does the abbreviation CSU mean in Germany?",
        "o": {
            "a": "Christlich Sichere Union",
            "b": "Christlich Süddeutsche Union",
            "c": "Christlich Sozialer Unternehmerverband",
            "d": "Christlich Soziale Union"
        },
        "to": {
            "a": "Christian Secure Union",
            "b": "Christian South German Union",
            "c": "Christian Social Entrepreneurs Association",
            "d": "Christian Social Union"
        },
        "a": "d",
        "r": "The correct answer is 'Christlich Soziale Union' because CSU stands for Christlich Soziale Union (Christian Social Union)."
    },
    {
        "qNum": 93,
        "q": "Je mehr 'Zweitstimmen' eine Partei bei einer Bundestagswahl bekommt, desto ...",
        "tq": "The more 'second votes' a party gets in a federal election, the ...",
        "o": {
            "a": "weniger Erststimmen kann sie haben.",
            "b": "mehr Direktkandidaten der Partei ziehen ins Parlament ein.",
            "c": "größer ist das Risiko, eine Koalition bilden zu müssen.",
            "d": "mehr Sitze erhält die Partei im Parlament."
        },
        "to": {
            "a": "fewer first votes it can have.",
            "b": "more direct candidates from the party enter parliament.",
            "c": "greater the risk of having to form a coalition.",
            "d": "more seats the party gets in parliament."
        },
        "a": "d",
        "r": "The correct answer is 'mehr Sitze erhält die Partei im Parlament.' because the second votes determine the overall distribution of seats a party receives in the Bundestag."
    },
    {
        "qNum": 94,
        "q": "Ab welchem Alter darf man in Deutschland an der Wahl zum Deutschen Bundestag teilnehmen?",
        "tq": "From what age can you participate in the election to the German Bundestag in Germany?",
        "o": {
            "a": "16",
            "b": "18",
            "c": "21",
            "d": "23"
        },
        "to": {
            "a": "16",
            "b": "18",
            "c": "21",
            "d": "23"
        },
        "a": "b",
        "r": "The correct answer is '18' because the voting age for the German Bundestag is 18."
    },
    {
        "qNum": 95,
        "q": "Was gilt für die meisten Kinder in Deutschland?",
        "tq": "What applies to most children in Germany?",
        "o": {
            "a": "Wahlpflicht",
            "b": "Schulpflicht",
            "c": "Schweigepflicht",
            "d": "Religionspflicht"
        },
        "to": {
            "a": "compulsory voting",
            "b": "compulsory education",
            "c": "duty of confidentiality",
            "d": "religious obligation"
        },
        "a": "b",
        "r": "The correct answer is 'Schulpflicht' because Germany has compulsory education, meaning most children are required to attend school."
    },
    {
        "qNum": 96,
        "q": "Wie kann jemand, der den Holocaust leugnet, bestraft werden?",
        "tq": "How can someone who denies the Holocaust be punished?",
        "o": {
            "a": "Kürzung sozialer Leistungen",
            "b": "bis zu 100 Sozialstunden",
            "c": "gar nicht, Holocaustleugnung ist erlaubt",
            "d": "mit Freiheitsstrafe bis zu fünf Jahren oder mit Geldstrafe"
        },
        "to": {
            "a": "reduction of social benefits",
            "b": "up to 100 hours of community service",
            "c": "not at all, Holocaust denial is allowed",
            "d": "with imprisonment for up to five years or a fine"
        },
        "a": "d",
        "r": "The correct answer is 'mit Freiheitsstrafe bis zu fünf Jahren oder mit Geldstrafe' because Holocaust denial is a criminal offense in Germany and can be punished with imprisonment or a fine."
    },
    {
        "qNum": 97,
        "q": "Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?",
        "tq": "What do you automatically pay in Germany if you are permanently employed?",
        "o": {
            "a": "Sozialversicherung",
            "b": "Sozialhilfe",
            "c": "Kindergeld",
            "d": "Wohngeld"
        },
        "to": {
            "a": "social insurance",
            "b": "social welfare",
            "c": "child benefit",
            "d": "housing benefit"
        },
        "a": "a",
        "r": "The correct answer is 'Sozialversicherung' because employees in Germany automatically pay contributions to social insurance, which includes health, pension, unemployment, and long-term care insurance."
    },
    {
        "qNum": 98,
        "q": "Wenn Abgeordnete im Deutschen Bundestag ihre Fraktion wechseln, ...",
        "tq": "If members of parliament in the German Bundestag change their parliamentary group, ...",
        "o": {
            "a": "dürfen sie nicht mehr an den Sitzungen des Parlaments teilnehmen.",
            "b": "kann die Regierung ihre Mehrheit verlieren.",
            "c": "muss die Bundespräsidentin/der Bundespräsident zuvor ihr/sein Einverständnis geben.",
            "d": "dürfen die Wählerinnen/Wähler dieser Abgeordneten noch einmal wählen."
        },
        "to": {
            "a": "they are no longer allowed to participate in parliamentary sessions.",
            "b": "the government may lose its majority.",
            "c": "the Federal President must give his/her prior consent.",
            "d": "the voters of these members of parliament are allowed to vote again."
        },
        "a": "b",
        "r": "The correct answer is 'kann die Regierung ihre Mehrheit verlieren.' because a change in parliamentary group can alter the balance of power in the Bundestag, potentially causing the government to lose its majority."
    },
    {
        "qNum": 99,
        "q": "Wer bezahlt in Deutschland die Sozialversicherungen?",
        "tq": "Who pays for social insurance in Germany?",
        "o": {
            "a": "Arbeitgeberinnen/Arbeitgeber und Arbeitnehmerinnen/Arbeitnehmer",
            "b": "nur Arbeitnehmerinnen/Arbeitnehmer",
            "c": "alle Staatsangehörigen",
            "d": "nur Arbeitgeberinnen/Arbeitgeber"
        },
        "to": {
            "a": "employers and employees",
            "b": "only employees",
            "c": "all citizens",
            "d": "only employers"
        },
        "a": "a",
        "r": "The correct answer is 'Arbeitgeberinnen/Arbeitgeber und Arbeitnehmerinnen/Arbeitnehmer' because social insurance contributions in Germany are typically shared between employers and employees."
    },
    {
        "qNum": 100,
        "q": "Was gehört nicht zur gesetzlichen Sozialversicherung?",
        "tq": "What is not part of the statutory social insurance?",
        "o": {
            "a": "die Lebensversicherung",
            "b": "die gesetzliche Rentenversicherung",
            "c": "die Arbeitslosenversicherung",
            "d": "die Pflegeversicherung"
        },
        "to": {
            "a": "life insurance",
            "b": "the statutory pension insurance",
            "c": "unemployment insurance",
            "d": "long-term care insurance"
        },
        "a": "a",
        "r": "The correct answer is 'die Lebensversicherung' because life insurance is a private insurance, not part of the statutory social insurance system, which includes pension, unemployment, and long-term care insurance."
    },
    {
        "qNum": 101,
        "q": "Gewerkschaften sind Interessenverbände der ...",
        "tq": "Trade unions are interest groups of ...",
        "o": {
            "a": "Jugendlichen.",
            "b": "Arbeitnehmerinnen und Arbeitnehmer.",
            "c": "Rentnerinnen und Rentner.",
            "d": "Arbeitgeberinnen und Arbeitgeber."
        },
        "to": {
            "a": "young people.",
            "b": "employees.",
            "c": "pensioners.",
            "d": "employers."
        },
        "a": "b",
        "r": "The correct answer is 'Arbeitnehmerinnen und Arbeitnehmer.' because trade unions are organizations that represent the interests of employees."
    },
    {
        "qNum": 102,
        "q": "Womit kann man in der Bundesrepublik Deutschland geehrt werden, wenn man auf politischem, wirtschaftlichem, kulturellem, geistigem oder sozialem Gebiet eine besondere Leistung erbracht hat?",
        "tq": "With what can you be honored in the Federal Republic of Germany if you have made a special contribution in the political, economic, cultural, intellectual or social field?",
        "o": {
            "a": "Bundesverdienstkreuz",
            "b": "Bundesadler",
            "c": "Vaterländischen Verdienstorden",
            "d": "Ehrentitel 'Held der Deutschen Demokratischen Republik'"
        },
        "to": {
            "a": "Federal Cross of Merit",
            "b": "Federal Eagle",
            "c": "Patriotic Order of Merit",
            "d": "Honorary title 'Hero of the German Democratic Republic'"
        },
        "a": "a",
        "r": "The correct answer is 'Bundesverdienstkreuz' because the Bundesverdienstkreuz (Federal Cross of Merit) is an order of merit awarded by the Federal Republic of Germany for outstanding achievements."
    },
    {
        "qNum": 103,
        "q": "Was wird in Deutschland als 'Ampelkoalition' bezeichnet?",
        "tq": "What is referred to as a 'traffic light coalition' in Germany?",
        "o": {
            "a": "Die Zusammenarbeit der Bundestagsfraktionen von CDU und CSU",
            "b": "von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung",
            "c": "von CSU, Die LINKE und Bündnis 90/Die Grünen in einer Regierung",
            "d": "der Bundestagsfraktionen von CDU und SPD"
        },
        "to": {
            "a": "The cooperation of the CDU and CSU parliamentary groups",
            "b": "of SPD, FDP and Alliance 90/The Greens in a government",
            "c": "of CSU, The Left and Alliance 90/The Greens in a government",
            "d": "the CDU and SPD parliamentary groups"
        },
        "a": "b",
        "r": "The correct answer is 'von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung' because an 'Ampelkoalition' refers to a government coalition of the SPD (Social Democrats), FDP (Free Democrats), and Bündnis 90/Die Grünen (The Greens), whose party colors correspond to the colors of a traffic light (red, yellow, green)."
    },
    {
        "qNum": 104,
        "q": "Eine Frau in Deutschland verliert ihre Arbeit. Was darf nicht der Grund für diese Entlassung sein?",
        "tq": "A woman in Germany loses her job. What must not be the reason for this dismissal?",
        "o": {
            "a": "Die Frau ist lange krank und arbeitsunfähig.",
            "b": "Die Frau kam oft zu spät zur Arbeit.",
            "c": "Die Frau erledigt private Sachen während der Arbeitszeit.",
            "d": "Die Frau bekommt ein Kind und ihr Chef weiß das."
        },
        "to": {
            "a": "The woman is chronically ill and unable to work.",
            "b": "The woman often came to work late.",
            "c": "The woman does private things during working hours.",
            "d": "The woman is having a child and her boss knows that."
        },
        "a": "d",
        "r": "The correct answer is 'Die Frau bekommt ein Kind und ihr Chef weiß das.' because in Germany, it is illegal to dismiss a woman because she is pregnant or has recently given birth. This is protected by law to prevent discrimination."
    },
    {
        "qNum": 105,
        "q": "Was ist eine Aufgabe von Wahlhelferinnen/Wahlhelfern in Deutschland?",
        "tq": "What is a task of election workers in Germany?",
        "o": {
            "a": "Sie helfen alten Menschen bei der Stimmabgabe in der Wahlkabine.",
            "b": "Sie schreiben die Wahlbenachrichtigungen vor der Wahl.",
            "c": "Sie geben Zwischenergebnisse an die Medien weiter.",
            "d": "Sie zählen die Stimmen nach dem Ende der Wahl."
        },
        "to": {
            "a": "They help elderly people to vote in the polling booth.",
            "b": "They write the election notifications before the election.",
            "c": "They pass on interim results to the media.",
            "d": "They count the votes after the end of the election."
        },
        "a": "d",
        "r": "The correct answer is 'Sie zählen die Stimmen nach dem Ende der Wahl.' because one of the primary tasks of election workers is to count the votes after the polling stations close."
    },
    {
        "qNum": 106,
        "q": "In Deutschland helfen ehrenamtliche Wahlhelferinnen und Wahlhelfer bei den Wahlen. Was ist eine Aufgabe von Wahlhelferinnen/Wahlhelfern?",
        "tq": "In Germany, volunteer election workers help with the elections. What is a task of election workers?",
        "o": {
            "a": "Sie helfen Kindern und alten Menschen beim Wählen.",
            "b": "Sie schreiben Karten und Briefe mit der Angabe des Wahllokals.",
            "c": "Sie geben Zwischenergebnisse an Journalisten weiter.",
            "d": "Sie zählen die Stimmen nach dem Ende der Wahl."
        },
        "to": {
            "a": "They help children and elderly people to vote.",
            "b": "They write cards and letters with the address of the polling station.",
            "c": "They pass on interim results to journalists.",
            "d": "They count the votes after the end of the election."
        },
        "a": "d",
        "r": "The correct answer is 'Sie zählen die Stimmen nach dem Ende der Wahl.' because election workers are responsible for counting the votes to ensure an accurate tally."
    },
    {
        "qNum": 107,
        "q": "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
        "tq": "For how many years is the Bundestag elected in Germany?",
        "o": {
            "a": "2 Jahre",
            "b": "4 Jahre",
            "c": "6 Jahre",
            "d": "8 Jahre"
        },
        "to": {
            "a": "2 years",
            "b": "4 years",
            "c": "6 years",
            "d": "8 years"
        },
        "a": "b",
        "r": "The correct answer is '4 Jahre' because the Bundestag is elected every 4 years."
    },
    {
        "qNum": 108,
        "q": "Bei einer Bundestagswahl in Deutschland darf jede/jeder wählen, die/der ...",
        "tq": "In a federal election in Germany, anyone who ... is allowed to vote.",
        "o": {
            "a": "in der Bundesrepublik Deutschland wohnt und wählen möchte.",
            "b": "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.",
            "c": "seit mindestens 3 Jahren in der Bundesrepublik Deutschland lebt.",
            "d": "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 21 Jahre alt ist."
        },
        "to": {
            "a": "lives in the Federal Republic of Germany and wants to vote.",
            "b": "is a citizen of the Federal Republic of Germany and is at least 18 years old.",
            "c": "has lived in the Federal Republic of Germany for at least 3 years.",
            "d": "is a citizen of the Federal Republic of Germany and is at least 21 years old."
        },
        "a": "b",
        "r": "The correct answer is 'Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.' because to vote in a federal election, you must be a German citizen and at least 18 years old."
    },
    {
        "qNum": 109,
        "q": "Wie oft gibt es normalerweise Bundestagswahlen in Deutschland?",
        "tq": "How often are there usually federal elections in Germany?",
        "o": {
            "a": "alle drei Jahre",
            "b": "alle vier Jahre",
            "c": "alle fünf Jahre",
            "d": "alle sechs Jahre"
        },
        "to": {
            "a": "every three years",
            "b": "every four years",
            "c": "every five years",
            "d": "every six years"
        },
        "a": "b",
        "r": "The correct answer is 'alle vier Jahre' because federal elections in Germany are normally held every four years."
    },
    {
        "qNum": 110,
        "q": "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
        "tq": "For how many years is the Bundestag elected in Germany?",
        "o": {
            "a": "2 Jahre",
            "b": "3 Jahre",
            "c": "4 Jahre",
            "d": "5 Jahre"
        },
        "to": {
            "a": "2 years",
            "b": "3 years",
            "c": "4 years",
            "d": "5 years"
        },
        "a": "c",
        "r": "The correct answer is '4 Jahre' because the Bundestag is elected for a term of 4 years."
    },
    {
        "qNum": 111,
        "q": "Welche Handlungen mit Bezug auf den Staat Israel sind in Deutschland verboten?",
        "tq": "Which actions relating to the State of Israel are prohibited in Germany?",
        "o": {
            "a": "die Politik Israels öffentlich kritisieren",
            "b": "das Aufhängen einer israelischen Flagge auf dem Privatgrundstück",
            "c": "eine Diskussion über die Politik Israels",
            "d": "der öffentliche Aufruf zur Vernichtung Israels"
        },
        "to": {
            "a": "publicly criticizing Israel's policies",
            "b": "hoisting an Israeli flag on private property",
            "c": "a discussion about Israel's policies",
            "d": "the public call for the destruction of Israel"
        },
        "a": "d",
        "r": "The correct answer is 'der öffentliche Aufruf zur Vernichtung Israels' because the public call for the destruction of Israel is considered incitement to hatred and is prohibited in Germany."
    },
    {
        "qNum": 112,
        "q": "Die Wahlen in Deutschland sind...",
        "tq": "Elections in Germany are...",
        "o": {
            "a": "speziell.",
            "b": "geheim.",
            "c": "berufsbezogen.",
            "d": "geschlechtsabhängig."
        },
        "to": {
            "a": "special.",
            "b": "secret.",
            "c": "occupation-related.",
            "d": "gender-dependent."
        },
        "a": "b",
        "r": "The correct answer is 'geheim.' because elections in Germany are secret to ensure that voters can cast their ballot without pressure or fear of repercussions."
    },
    {
        "qNum": 113,
        "q": "Wahlen in Deutschland gewinnt die Partei, die ...",
        "tq": "Elections in Germany are won by the party that ...",
        "o": {
            "a": "die meisten Stimmen bekommt.",
            "b": "die meisten Männer mehrheitlich gewählt haben.",
            "c": "die meisten Stimmen bei den Arbeiterinnen/Arbeitern bekommen hat.",
            "d": "die meisten Erststimmen für ihre Kanzlerkandidatin/ihren Kanzlerkandidaten erhalten hat."
        },
        "to": {
            "a": "gets the most votes.",
            "b": "the majority of men voted for.",
            "c": "received the most votes from workers.",
            "d": "received the most first votes for their chancellor candidate."
        },
        "a": "a",
        "r": "The correct answer is 'die meisten Stimmen bekommt.' because in general, the party that receives the most votes wins an election, although the specifics of forming a government can be more complex due to the electoral system."
    },
    {
        "qNum": 114,
        "q": "An demokratischen Wahlen in Deutschland teilzunehmen ist...",
        "tq": "Participating in democratic elections in Germany is...",
        "o": {
            "a": "eine Pflicht.",
            "b": "ein Recht.",
            "c": "ein Zwang.",
            "d": "eine Last."
        },
        "to": {
            "a": "a duty.",
            "b": "a right.",
            "c": "a compulsion.",
            "d": "a burden."
        },
        "a": "b",
        "r": "The correct answer is 'ein Recht.' because voting in democratic elections is a right of citizens in Germany."
    },
    {
        "qNum": 115,
        "q": "Was bedeutet 'aktives Wahlrecht' in Deutschland?",
        "tq": "What does 'active suffrage' mean in Germany?",
        "o": {
            "a": "Man kann gewählt werden.",
            "b": "Man muss wählen gehen.",
            "c": "Man kann wählen.",
            "d": "Man muss zur Auszählung der Stimmen gehen."
        },
        "to": {
            "a": "You can be elected.",
            "b": "You have to go to vote.",
            "c": "You can vote.",
            "d": "You have to go to count the votes."
        },
        "a": "c",
        "r": "The correct answer is 'Man kann wählen.' because active suffrage is the right to vote in elections."
    },
    {
        "qNum": 116,
        "q": "Wenn Sie bei einer Bundestagswahl in Deutschland wählen dürfen, heißt das ...",
        "tq": "If you are allowed to vote in a federal election in Germany, it means ...",
        "o": {
            "a": "aktive Wahlkampagne.",
            "b": "aktives Wahlverfahren.",
            "c": "aktiver Wahlkampf.",
            "d": "aktives Wahlrecht."
        },
        "to": {
            "a": "active election campaign.",
            "b": "active voting procedure.",
            "c": "active election campaign.",
            "d": "active voting right."
        },
        "a": "d",
        "r": "The correct answer is 'aktives Wahlrecht.' because being allowed to vote means you possess the active voting right."
    },
    {
        "qNum": 117,
        "q": "Wie viel Prozent der Zweitstimmen müssen Parteien mindestens bekommen, um in den Deutschen Bundestag gewählt zu werden?",
        "tq": "What percentage of the second votes do parties have to get at least to be elected to the German Bundestag?",
        "o": {
            "a": "3%",
            "b": "4%",
            "c": "5%",
            "d": "6%"
        },
        "to": {
            "a": "3%",
            "b": "4%",
            "c": "5%",
            "d": "6%"
        },
        "a": "c",
        "r": "The correct answer is '5%' because parties must receive at least 5% of the second votes to enter the Bundestag, a rule known as the '5% hurdle'."
    },
    {
        "qNum": 118,
        "q": "Wer darf bei den rund 40 jüdischen Makkabi-Sportvereinen Mitglied werden?",
        "tq": "Who is allowed to become a member of the approximately 40 Jewish Makkabi sports clubs?",
        "o": {
            "a": "nur Deutsche",
            "b": "nur Israelis",
            "c": "nur religiöse Menschen",
            "d": "alle Menschen"
        },
        "to": {
            "a": "only Germans",
            "b": "only Israelis",
            "c": "only religious people",
            "d": "all people"
        },
        "a": "d",
        "r": "The correct answer is 'alle Menschen' because Makkabi sports clubs are open to all people, regardless of nationality, religion, or background."
    },
    {
        "qNum": 119,
        "q": "Wahlen in Deutschland sind frei. Was bedeutet das?",
        "tq": "Elections in Germany are free. What does that mean?",
        "o": {
            "a": "Alle verurteilten Straftäterinnen/Straftäter dürfen nicht wählen.",
            "b": "Wenn ich wählen gehen möchte, muss meine Arbeitgeberin/mein Arbeitgeber mir frei geben.",
            "c": "Jede Person kann ohne Zwang entscheiden, ob sie wählen möchte und wen sie wählen möchte.",
            "d": "Ich kann frei entscheiden, wo ich wählen gehen möchte."
        },
        "to": {
            "a": "All convicted criminals are not allowed to vote.",
            "b": "If I want to vote, my employer has to give me time off.",
            "c": "Everyone can decide without coercion whether they want to vote and who they want to vote for.",
            "d": "I can freely decide where I want to vote."
        },
        "a": "c",
        "r": "The correct answer is 'Jede Person kann ohne Zwang entscheiden, ob sie wählen möchte und wen sie wählen möchte.' because free elections guarantee the individual's right to vote without any form of coercion."
    },
    {
        "qNum": 120,
        "q": "Das Wahlsystem in Deutschland ist ein",
        "tq": "The electoral system in Germany is a",
        "o": {
            "a": "Zensuswahlrecht.",
            "b": "Dreiklassenwahlrecht.",
            "c": "Mehrheits- und Verhältniswahlrecht.",
            "d": "allgemeines Männerwahlrecht."
        },
        "to": {
            "a": "census voting right.",
            "b": "three-class suffrage.",
            "c": "majority and proportional representation.",
            "d": "general male suffrage."
        },
        "a": "c",
        "r": "The correct answer is 'Mehrheits- und Verhältniswahlrecht.' because the German electoral system combines elements of majority voting and proportional representation."
    },
    {
        "qNum": 121,
        "q": "Eine Partei möchte in den Deutschen Bundestag. Sie muss aber einen Mindestanteil an Wählerstimmen haben. Das heißt ...",
        "tq": "A party wants to enter the German Bundestag. But it has to have a minimum share of votes. This means ...",
        "o": {
            "a": "5%-Hürde.",
            "b": "Zulassungsgrenze.",
            "c": "Basiswert.",
            "d": "Richtlinie."
        },
        "to": {
            "a": "5% hurdle.",
            "b": "admission limit.",
            "c": "base value.",
            "d": "guideline."
        },
        "a": "a",
        "r": "The correct answer is '5%-Hürde.' because the 5% hurdle is the minimum percentage of votes a party must receive to gain seats in the Bundestag."
    },
    {
        "qNum": 122,
        "q": "Welchem Grundsatz unterliegen Wahlen in Deutschland? Wahlen in Deutschland sind...",
        "tq": "Which principle do elections in Germany follow? Elections in Germany are...",
        "o": {
            "a": "frei, gleich, geheim.",
            "b": "offen, sicher, frei.",
            "c": "geschlossen, gleich, sicher.",
            "d": "sicher, offen, freiwillig."
        },
        "to": {
            "a": "free, equal, secret.",
            "b": "open, safe, free.",
            "c": "closed, equal, safe.",
            "d": "safe, open, voluntary."
        },
        "a": "a",
        "r": "The correct answer is 'frei, gleich, geheim.' because elections in Germany are free, equal, and secret, ensuring that every citizen can vote without coercion and that each vote carries the same weight."
    },
    {
        "qNum": 123,
        "q": "Was ist in Deutschland die '5%-Hürde'?",
        "tq": "What is the '5% hurdle' in Germany?",
        "o": {
            "a": "Abstimmungsregelung im Bundestag für kleine Parteien",
            "b": "Anwesenheitskontrolle im Bundestag für Abstimmungen",
            "c": "Mindestanteil an Wählerstimmen, um ins Parlament zu kommen",
            "d": "Anwesenheitskontrolle im Bundesrat für Abstimmungen"
        },
        "to": {
            "a": "voting rule in the Bundestag for small parties",
            "b": "attendance control in the Bundestag for votes",
            "c": "minimum share of votes to get into parliament",
            "d": "attendance control in the Bundesrat for votes"
        },
        "a": "c",
        "r": "The correct answer is 'Mindestanteil an Wählerstimmen, um ins Parlament zu kommen' because the 5% hurdle is the minimum percentage of votes a party must receive to be represented in the Bundestag."
    },
    {
        "qNum": 124,
        "q": "Die Bundestagswahl in Deutschland ist die Wahl...",
        "tq": "The federal election in Germany is the election of...",
        "o": {
            "a": "der Bundeskanzlerin/des Bundeskanzlers.",
            "b": "der Parlamente der Länder.",
            "c": "des Parlaments für Deutschland.",
            "d": "der Bundespräsidentin/des Bundespräsidenten."
        },
        "to": {
            "a": "the Federal Chancellor.",
            "b": "the parliaments of the states.",
            "c": "the parliament for Germany.",
            "d": "the Federal President."
        },
        "a": "c",
        "r": "The correct answer is 'des Parlaments für Deutschland.' because the Bundestagswahl is the election of the parliament (Bundestag) for Germany."
    },
    {
        "qNum": 125,
        "q": "In einer Demokratie ist eine Funktion von regelmäßigen Wahlen, ...",
        "tq": "In a democracy, a function of regular elections is, ...",
        "o": {
            "a": "die Bürgerinnen und Bürger zu zwingen, ihre Stimme abzugeben.",
            "b": "nach dem Willen der Wählermehrheit den Wechsel der Regierung zu ermöglichen.",
            "c": "im Land bestehende Gesetze beizubehalten.",
            "d": "den Armen mehr Macht zu geben."
        },
        "to": {
            "a": "to force citizens to cast their votes.",
            "b": "to enable a change of government according to the will of the majority of voters.",
            "c": "to maintain existing laws in the country.",
            "d": "to give more power to the poor."
        },
        "a": "b",
        "r": "The correct answer is 'nach dem Willen der Wählermehrheit den Wechsel der Regierung zu ermöglichen.' because regular elections allow for the change of government based on the will of the majority, which is a fundamental principle of democracy."
    },
    {
        "qNum": 126,
        "q": "Was bekommen wahlberechtigte Bürgerinnen und Bürger in Deutschland vor einer Wahl?",
        "tq": "What do eligible citizens in Germany receive before an election?",
        "o": {
            "a": "eine Wahlbenachrichtigung von der Gemeinde",
            "b": "eine Wahlerlaubnis von der Bundespräsidentin/von dem Bundespräsidenten",
            "c": "eine Benachrichtigung von der Bundesversammlung",
            "d": "eine Benachrichtigung vom Pfarramt"
        },
        "to": {
            "a": "a notification of election from the municipality",
            "b": "a voting permit from the Federal President",
            "c": "a notification from the Federal Assembly",
            "d": "a notification from the parish office"
        },
        "a": "a",
        "r": "The correct answer is 'eine Wahlbenachrichtigung von der Gemeinde' because eligible voters in Germany receive a notification of election (Wahlbenachrichtigung) from their municipality, informing them of the election details."
    },
    {
        "qNum": 127,
        "q": "Warum gibt es die 5%-Hürde im Wahlgesetz der Bundesrepublik Deutschland? Es gibt sie, weil ...",
        "tq": "Why is there a 5% hurdle in the election law of the Federal Republic of Germany? It exists because ...",
        "o": {
            "a": "die Programme von vielen kleinen Parteien viele Gemeinsamkeiten haben.",
            "b": "die Bürgerinnen und Bürger bei vielen kleinen Parteien die Orientierung verlieren können.",
            "c": "viele kleine Parteien die Regierungsbildung erschweren.",
            "d": "die kleinen Parteien nicht so viel Geld haben, um die Politikerinnen und Politiker zu bezahlen."
        },
        "to": {
            "a": "the programs of many small parties have many things in common.",
            "b": "citizens can lose their bearings with many small parties.",
            "c": "many small parties make it difficult to form a government.",
            "d": "the small parties do not have enough money to pay the politicians."
        },
        "a": "c",
        "r": "The correct answer is 'viele kleine Parteien die Regierungsbildung erschweren.' because the 5% hurdle is intended to prevent fragmentation of the parliament and make it easier to form a stable government."
    },
    {
        "qNum": 128,
        "q": "Parlamentsmitglieder, die von den Bürgerinnen und Bürgern gewählt werden, nennt man ...",
        "tq": "Members of parliament who are elected by the citizens are called ...",
        "o": {
            "a": "Abgeordnete.",
            "b": "Kanzlerinnen/Kanzler.",
            "c": "Botschafterinnen/Botschafter.",
            "d": "Ministerpräsidentinnen/Ministerpräsidenten."
        },
        "to": {
            "a": "members of parliament.",
            "b": "chancellors.",
            "c": "ambassadors.",
            "d": "minister-presidents."
        },
        "a": "a",
        "r": "The correct answer is 'Abgeordnete.' because members of parliament elected by the people are called Abgeordnete (members of parliament)."
    },
    {
        "qNum": 129,
        "q": "Vom Volk gewählt wird in Deutschland...",
        "tq": "Elected by the people in Germany is...",
        "o": {
            "a": "die Bundeskanzlerin/der Bundeskanzler.",
            "b": "die Ministerpräsidentin/der Ministerpräsident eines Bundeslandes.",
            "c": "der Bundestag.",
            "d": "die Bundespräsidentin/der Bundespräsident."
        },
        "to": {
            "a": "the Federal Chancellor.",
            "b": "the Minister-President of a federal state.",
            "c": "the Bundestag.",
            "d": "the Federal President."
        },
        "a": "c",
        "r": "The correct answer is 'der Bundestag.' because the Bundestag, the German parliament, is elected by the people."
    },
    {
        "qNum": 130,
        "image": "130.png",
        "q": "Welcher Stimmzettel wäre bei einer Bundestagswahl gültig?",
        "tq": "Which ballot paper would be valid in a federal election?",
        "o": {
            "a": "1",
            "b": "2",
            "c": "3",
            "d": "4"
        },
        "to": {
            "a": "1",
            "b": "2",
            "c": "3",
            "d": "4"
        },
        "a": "a",
        "r": "The correct answer is '1' because ballot paper 1 is marked correctly with one cross in each column, indicating a valid vote for both the first and second vote."
    },
    {
        "qNum": 131,
        "q": "In Deutschland ist eine Bürgermeisterin/ein Bürgermeister ...",
        "tq": "In Germany, a mayor is ...",
        "o": {
            "a": "die Leiterin/der Leiter einer Schule.",
            "b": "die Chefin/der Chef einer Bank.",
            "c": "das Oberhaupt einer Gemeinde.",
            "d": "die/der Vorsitzende einer Partei."
        },
        "to": {
            "a": "the head of a school.",
            "b": "the boss of a bank.",
            "c": "the head of a municipality.",
            "d": "the chairman of a party."
        },
        "a": "c",
        "r": "The correct answer is 'das Oberhaupt einer Gemeinde.' because a mayor is the head of a municipality, responsible for its administration."
    },
    {
        "qNum": 132,
        "q": "Viele Menschen in Deutschland arbeiten in ihrer Freizeit ehrenamtlich. Was bedeutet das?",
        "tq": "Many people in Germany work voluntarily in their free time. What does that mean?",
        "o": {
            "a": "Sie arbeiten als Soldatinnen/Soldaten.",
            "b": "Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden.",
            "c": "Sie arbeiten in der Bundesregierung.",
            "d": "Sie arbeiten in einem Krankenhaus und verdienen dabei Geld."
        },
        "to": {
            "a": "They work as soldiers.",
            "b": "They work voluntarily and unpaid in clubs and associations.",
            "c": "They work in the federal government.",
            "d": "They work in a hospital and earn money."
        },
        "a": "b",
        "r": "The correct answer is 'Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden.' because 'ehrenamtlich' means working voluntarily and without pay, typically in clubs and associations."
    },
    {
        "qNum": 133,
        "q": "Was ist bei Bundestags- und Landtagswahlen in Deutschland erlaubt?",
        "tq": "What is allowed in federal and state elections in Germany?",
        "o": {
            "a": "Der Ehemann wählt für seine Frau mit.",
            "b": "Man kann durch Briefwahl seine Stimme abgeben.",
            "c": "Man kann am Wahltag telefonisch seine Stimme abgeben.",
            "d": "Kinder ab dem Alter von 14 Jahren dürfen wählen."
        },
        "to": {
            "a": "The husband votes for his wife.",
            "b": "You can cast your vote by postal vote.",
            "c": "You can cast your vote by phone on election day.",
            "d": "Children from the age of 14 are allowed to vote."
        },
        "a": "b",
        "r": "The correct answer is 'Man kann durch Briefwahl seine Stimme abgeben.' because postal voting (Briefwahl) is a legal and common way to cast a vote in Germany."
    },
    {
        "qNum": 134,
        "q": "Man will die Buslinie abschaffen, mit der Sie immer zur Arbeit fahren. Was können Sie machen, um die Buslinie zu erhalten?",
        "tq": "They want to abolish the bus line that you always take to work. What can you do to keep the bus line?",
        "o": {
            "a": "Ich beteilige mich an einer Bürgerinitiative für die Erhaltung der Buslinie oder gründe selber eine Initiative.",
            "b": "Ich werde Mitglied in einem Sportverein und trainiere Radfahren.",
            "c": "Ich wende mich an das Finanzamt, weil ich als Steuerzahlerin/Steuerzahler ein Recht auf die Buslinie habe.",
            "d": "Ich schreibe einen Brief an das Forstamt der Gemeinde."
        },
        "to": {
            "a": "I participate in a citizens' initiative to maintain the bus line or start my own initiative.",
            "b": "I join a sports club and train cycling.",
            "c": "I contact the tax office because as a taxpayer I have a right to the bus line.",
            "d": "I write a letter to the community's forestry office."
        },
        "a": "a",
        "r": "The correct answer is 'Ich beteilige mich an einer Bürgerinitiative für die Erhaltung der Buslinie oder gründe selber eine Initiative.' because a citizens' initiative is a common way for citizens to advocate for local issues and influence decisions."
    },
    {
        "qNum": 135,
        "q": "Wen vertreten die Gewerkschaften in Deutschland?",
        "tq": "Who do trade unions represent in Germany?",
        "o": {
            "a": "große Unternehmen",
            "b": "kleine Unternehmen",
            "c": "Selbstständige",
            "d": "Arbeitnehmerinnen und Arbeitnehmer"
        },
        "to": {
            "a": "large companies",
            "b": "small businesses",
            "c": "self-employed people",
            "d": "employees"
        },
        "a": "d",
        "r": "The correct answer is 'Arbeitnehmerinnen und Arbeitnehmer' because trade unions represent the interests of employees."
    },
    {
        "qNum": 136,
        "q": "Sie gehen in Deutschland zum Arbeitsgericht bei...",
        "tq": "In Germany you go to the labor court for...",
        "o": {
            "a": "falscher Nebenkostenabrechnung.",
            "b": "ungerechtfertigter Kündigung durch Ihre Chefin/Ihren Chef.",
            "c": "Problemen mit den Nachbarinnen/Nachbarn.",
            "d": "Schwierigkeiten nach einem Verkehrsunfall."
        },
        "to": {
            "a": "incorrect utility bill.",
            "b": "unjustified dismissal by your boss.",
            "c": "problems with neighbors.",
            "d": "difficulties after a traffic accident."
        },
        "a": "b",
        "r": "The correct answer is 'ungerechtfertigter Kündigung durch Ihre Chefin/Ihren Chef.' because labor courts handle disputes between employers and employees, such as wrongful dismissals."
    },
    {
        "qNum": 137,
        "q": "Welches Gericht ist in Deutschland bei Konflikten in der Arbeitswelt zuständig?",
        "tq": "Which court in Germany is responsible for conflicts in the working world?",
        "o": {
            "a": "das Familiengericht",
            "b": "das Strafgericht",
            "c": "das Arbeitsgericht",
            "d": "das Amtsgericht"
        },
        "to": {
            "a": "the family court",
            "b": "the criminal court",
            "c": "the labor court",
            "d": "the local court"
        },
        "a": "c",
        "r": "The correct answer is 'das Arbeitsgericht' because the Arbeitsgericht (labor court) is the specialized court for employment disputes."
    },
    {
        "qNum": 138,
        "q": "Was kann ich in Deutschland machen, wenn mir meine Arbeitgeberin/mein Arbeitgeber zu Unrecht gekündigt hat?",
        "tq": "What can I do in Germany if my employer has unfairly dismissed me?",
        "o": {
            "a": "weiterarbeiten und freundlich zur Chefin/zum Chef sein",
            "b": "ein Mahnverfahren gegen die Arbeitgeberin/den Arbeitgeber führen",
            "c": "Kündigungsschutzklage erheben",
            "d": "die Arbeitgeberin/den Arbeitgeber bei der Polizei anzeigen"
        },
        "to": {
            "a": "continue working and be friendly to the boss",
            "b": "initiate a dunning procedure against the employer",
            "c": "file a lawsuit for protection against dismissal",
            "d": "report the employer to the police"
        },
        "a": "c",
        "r": "The correct answer is 'Kündigungsschutzklage erheben' because you can file a lawsuit for protection against dismissal (Kündigungsschutzklage) at the labor court to challenge an unfair dismissal."
    },
    {
        "qNum": 139,
        "q": "Wann kommt es in Deutschland zu einem Prozess vor Gericht? Wenn jemand ...",
        "tq": "When does a trial take place in Germany? When someone ...",
        "o": {
            "a": "zu einer anderen Religion übertritt.",
            "b": "eine Straftat begangen hat und angeklagt wird.",
            "c": "eine andere Meinung als die der Regierung vertritt.",
            "d": "sein Auto falsch geparkt hat und es abgeschleppt wird."
        },
        "to": {
            "a": "converts to another religion.",
            "b": "has committed a crime and is charged.",
            "c": "has a different opinion than the government.",
            "d": "parked his car incorrectly and it is towed away."
        },
        "a": "b",
        "r": "The correct answer is 'eine Straftat begangen hat und angeklagt wird.' because a trial occurs when someone is accused of committing a crime and is formally charged."
    },
    {
        "qNum": 140,
        "q": "Was macht eine Schöffin/ein Schöffe in Deutschland?",
        "tq": "What does a lay judge do in Germany?",
        "o": {
            "a": "Sie/Er entscheidet mit Richterinnen/Richtern über Schuld und Strafe.",
            "b": "Sie/Er gibt Bürgerinnen/Bürgern rechtlichen Rat.",
            "c": "Sie/Er stellt Urkunden aus.",
            "d": "Sie/Er verteidigt die Angeklagte/den Angeklagten."
        },
        "to": {
            "a": "She/He decides on guilt and punishment with judges.",
            "b": "She/He gives citizens legal advice.",
            "c": "She/He issues certificates.",
            "d": "She/He defends the accused."
        },
        "a": "a",
        "r": "The correct answer is 'Sie/Er entscheidet mit Richterinnen/Richtern über Schuld und Strafe.' because lay judges participate in court decisions alongside professional judges, determining guilt and sentencing."
    },
    {
        "qNum": 141,
        "q": "Wer berät in Deutschland Personen bei Rechtsfragen und vertritt sie vor Gericht?",
        "tq": "Who advises people on legal issues and represents them in court in Germany?",
        "o": {
            "a": "eine Rechtsanwältin/ein Rechtsanwalt",
            "b": "eine Richterin/ein Richter",
            "c": "eine Schöffin/ein Schöffe",
            "d": "eine Staatsanwältin/ein Staatsanwalt"
        },
        "to": {
            "a": "a lawyer",
            "b": "a judge",
            "c": "a lay judge",
            "d": "a public prosecutor"
        },
        "a": "a",
        "r": "The correct answer is 'eine Rechtsanwältin/ein Rechtsanwalt' because lawyers provide legal advice and represent clients in court."
    },
    {
        "qNum": 142,
        "q": "Was ist die Hauptaufgabe einer Richterin/eines Richters in Deutschland?",
        "tq": "What is the main task of a judge in Germany?",
        "o": {
            "a": "Eine Richterin/ein Richter vertritt Bürgerinnen und Bürger vor einem Gericht.",
            "b": "Eine Richterin/ein Richter arbeitet an einem Gericht und spricht Urteile.",
            "c": "Eine Richterin/ein Richter ändert Gesetze.",
            "d": "Eine Richterin/ein Richter betreut Jugendliche vor Gericht."
        },
        "to": {
            "a": "A judge represents citizens in court.",
            "b": "A judge works in court and passes judgments.",
            "c": "A judge changes laws.",
            "d": "A judge looks after young people in court."
        },
        "a": "b",
        "r": "The correct answer is 'Eine Richterin/ein Richter arbeitet an einem Gericht und spricht Urteile.' because the main task of a judge is to preside over court cases and deliver verdicts."
    },
    {
        "qNum": 143,
        "q": "Eine Richterin/ein Richter in Deutschland gehört zur …",
        "tq": "A judge in Germany belongs to the …",
        "o": {
            "a": "Judikative.",
            "b": "Exekutive.",
            "c": "Operative.",
            "d": "Legislative."
        },
        "to": {
            "a": "Judiciary.",
            "b": "Executive.",
            "c": "Operative.",
            "d": "Legislative."
        },
        "a": "a",
        "r": "The correct answer is 'Judikative.' because judges are part of the judiciary, the branch of government that interprets and applies the law."
    },
    {
        "qNum": 144,
        "q": "Eine Richterin/ein Richter gehört in Deutschland zur …",
        "tq": "A judge in Germany belongs to the …",
        "o": {
            "a": "vollziehenden Gewalt.",
            "b": "rechtsprechenden Gewalt.",
            "c": "planenden Gewalt.",
            "d": "gesetzgebenden Gewalt."
        },
        "to": {
            "a": "executive power.",
            "b": "judicial power.",
            "c": "planning power.",
            "d": "legislative power."
        },
        "a": "b",
        "r": "The correct answer is 'rechtsprechenden Gewalt.' because judges belong to the judicial power, which is responsible for administering justice."
    },
    {
        "qNum": 145,
        "q": "In Deutschland wird die Staatsgewalt geteilt. Für welche Staatsgewalt arbeitet eine Richterin/ein Richter?",
        "tq": "In Germany, state power is divided. For which branch of government does a judge work?",
        "o": {
            "a": "Judikative",
            "b": "Exekutive",
            "c": "Presse",
            "d": "Legislative"
        },
        "to": {
            "a": "Judiciary",
            "b": "Executive",
            "c": "Press",
            "d": "Legislative"
        },
        "a": "a",
        "r": "The correct answer is 'Judikative' because judges are part of the judiciary, which is separate from the executive (Exekutive) and legislative (Legislative) branches."
    },
    {
        "qNum": 146,
        "q": "Wie nennt man in Deutschland ein Verfahren vor einem Gericht?",
        "tq": "What is a procedure before a court called in Germany?",
        "o": {
            "a": "Programm",
            "b": "Prozedur",
            "c": "Protokoll",
            "d": "Prozess"
        },
        "to": {
            "a": "program",
            "b": "procedure",
            "c": "protocol",
            "d": "trial"
        },
        "a": "d",
        "r": "The correct answer is 'Prozess' because a legal procedure before a court is called a Prozess (trial)."
    },
    {
        "qNum": 147,
        "q": "Was ist die Arbeit einer Richterin/eines Richters in Deutschland?",
        "tq": "What is the job of a judge in Germany?",
        "o": {
            "a": "Deutschland regieren",
            "b": "Recht sprechen",
            "c": "Pläne erstellen",
            "d": "Gesetze erlassen"
        },
        "to": {
            "a": "to govern Germany",
            "b": "to administer justice",
            "c": "to make plans",
            "d": "to enact laws"
        },
        "a": "b",
        "r": "The correct answer is 'Recht sprechen' because the primary role of a judge is to administer justice by interpreting and applying the law."
    },
    {
        "qNum": 148,
        "q": "Was ist eine Aufgabe der Polizei in Deutschland?",
        "tq": "What is a task of the police in Germany?",
        "o": {
            "a": "das Land zu verteidigen",
            "b": "die Bürgerinnen und Bürger abzuhören",
            "c": "die Gesetze zu beschließen",
            "d": "die Einhaltung von Gesetzen zu überwachen"
        },
        "to": {
            "a": "to defend the country",
            "b": "to eavesdrop on citizens",
            "c": "to pass laws",
            "d": "to monitor compliance with laws"
        },
        "a": "d",
        "r": "The correct answer is 'die Einhaltung von Gesetzen zu überwachen' because the police are responsible for monitoring and enforcing laws."
    },
    {
        "qNum": 149,
        "q": "Was ist ein Beispiel für antisemitisches Verhalten?",
        "tq": "What is an example of anti-Semitic behavior?",
        "o": {
            "a": "ein jüdisches Fest besuchen",
            "b": "die israelische Regierung kritisieren",
            "c": "den Holocaust leugnen",
            "d": "gegen Juden Fußball spielen."
        },
        "to": {
            "a": "attending a Jewish festival",
            "b": "criticizing the Israeli government",
            "c": "denying the Holocaust",
            "d": "playing football against Jews."
        },
        "a": "c",
        "r": "The correct answer is 'den Holocaust leugnen' because denying the Holocaust is a form of anti-Semitism."
    },
    {
        "qNum": 150,
        "q": "Eine Gerichtsschöffin/ein Gerichtsschöffe in Deutschland ist …",
        "tq": "A lay judge in Germany is …",
        "o": {
            "a": "die Stellvertreterin/der Stellvertreter des Stadtoberhaupts.",
            "b": "eine ehrenamtliche Richterin/ein ehrenamtlicher Richter.",
            "c": "ein Mitglied eines Gemeinderats.",
            "d": "eine Person, die Jura studiert hat."
        },
        "to": {
            "a": "the deputy of the head of the city.",
            "b": "an honorary judge.",
            "c": "a member of a municipal council.",
            "d": "a person who has studied law."
        },
        "a": "b",
        "r": "The correct answer is 'eine ehrenamtliche Richterin/ein ehrenamtlicher Richter.' because a lay judge is a non-professional, honorary judge who participates in court decisions."
    },
    {
        "qNum": 151,
        "q": "Wer baute die Mauer in Berlin?",
        "tq": "Who built the Berlin Wall?",
        "o": {
            "a": "Großbritannien",
            "b": "die DDR",
            "c": "die Bundesrepublik Deutschland",
            "d": "die USA"
        },
        "to": {
            "a": "Great Britain",
            "b": "the GDR",
            "c": "the Federal Republic of Germany",
            "d": "the USA"
        },
        "a": "b",
        "r": "The correct answer is 'die DDR' because the German Democratic Republic (GDR) built the Berlin Wall."
    },
    {
        "qNum": 152,
        "q": "Wann waren die Nationalsozialisten mit Adolf Hitler in Deutschland an der Macht?",
        "tq": "When were the National Socialists with Adolf Hitler in power in Germany?",
        "o": {
            "a": "1918 bis 1923",
            "b": "1932 bis 1950",
            "c": "1933 bis 1945",
            "d": "1945 bis 1989"
        },
        "to": {
            "a": "1918 to 1923",
            "b": "1932 to 1950",
            "c": "1933 to 1945",
            "d": "1945 to 1989"
        },
        "a": "c",
        "r": "The correct answer is '1933 bis 1945' because the National Socialists, led by Adolf Hitler, were in power in Germany from 1933 to 1945."
    },
    {
        "qNum": 153,
        "q": "Was war am 8. Mai 1945?",
        "tq": "What was on May 8, 1945?",
        "o": {
            "a": "Tod Adolf Hitlers",
            "b": "Beginn des Berliner Mauerbaus",
            "c": "Wahl von Konrad Adenauer zum Bundeskanzler",
            "d": "Ende des Zweiten Weltkriegs in Europa"
        },
        "to": {
            "a": "Death of Adolf Hitler",
            "b": "Beginning of the construction of the Berlin Wall",
            "c": "Election of Konrad Adenauer as Federal Chancellor",
            "d": "End of World War II in Europe"
        },
        "a": "d",
        "r": "The correct answer is 'Ende des Zweiten Weltkriegs in Europa' because May 8, 1945, marks the end of World War II in Europe."
    },
    {
        "qNum": 154,
        "q": "Wann war der Zweite Weltkrieg zu Ende?",
        "tq": "When did World War II end?",
        "o": {
            "a": "1933",
            "b": "1945",
            "c": "1949",
            "d": "1961"
        },
        "to": {
            "a": "1933",
            "b": "1945",
            "c": "1949",
            "d": "1961"
        },
        "a": "b",
        "r": "The correct answer is '1945' because World War II ended in 1945."
    },
    {
        "qNum": 155,
        "q": "Wann waren die Nationalsozialisten in Deutschland an der Macht?",
        "tq": "When were the National Socialists in power in Germany?",
        "o": {
            "a": "1888 bis 1918",
            "b": "1921 bis 1934",
            "c": "1933 bis 1945",
            "d": "1949 bis 1963"
        },
        "to": {
            "a": "1888 to 1918",
            "b": "1921 to 1934",
            "c": "1933 to 1945",
            "d": "1949 to 1963"
        },
        "a": "c",
        "r": "The correct answer is '1933 bis 1945' because the National Socialists were in power in Germany from 1933 to 1945."
    },
    {
        "qNum": 156,
        "q": "In welchem Jahr wurde Hitler Reichskanzler?",
        "tq": "In which year did Hitler become Reich Chancellor?",
        "o": {
            "a": "1923",
            "b": "1927",
            "c": "1933",
            "d": "1936"
        },
        "to": {
            "a": "1923",
            "b": "1927",
            "c": "1933",
            "d": "1936"
        },
        "a": "c",
        "r": "The correct answer is '1933' because Hitler became Reich Chancellor in 1933."
    },
    {
        "qNum": 157,
        "q": "Die Nationalsozialisten mit Adolf Hitler errichteten 1933 in Deutschland …",
        "tq": "In 1933, the National Socialists with Adolf Hitler established a ... in Germany.",
        "o": {
            "a": "eine Diktatur.",
            "b": "einen demokratischen Staat.",
            "c": "eine Monarchie.",
            "d": "ein Fürstentum."
        },
        "to": {
            "a": "dictatorship.",
            "b": "democratic state.",
            "c": "monarchy.",
            "d": "principality."
        },
        "a": "a",
        "r": "The correct answer is 'eine Diktatur.' because the National Socialists established a dictatorship in Germany in 1933."
    },
    {
        "qNum": 158,
        "q": "Das 'Dritte Reich' war eine …",
        "tq": "The 'Third Reich' was a …",
        "o": {
            "a": "Diktatur.",
            "b": "Demokratie.",
            "c": "Monarchie.",
            "d": "Räterepublik."
        },
        "to": {
            "a": "dictatorship.",
            "b": "democracy.",
            "c": "monarchy.",
            "d": "soviet republic."
        },
        "a": "a",
        "r": "The correct answer is 'Diktatur.' because the 'Third Reich' was a dictatorship."
    },
    {
        "qNum": 159,
        "q": "Was gab es in Deutschland nicht während der Zeit des Nationalsozialismus?",
        "tq": "What did not exist in Germany during the time of National Socialism?",
        "o": {
            "a": "freie Wahlen",
            "b": "Pressezensur",
            "c": "willkürliche Verhaftungen",
            "d": "Verfolgung von Juden"
        },
        "to": {
            "a": "free elections",
            "b": "press censorship",
            "c": "arbitrary arrests",
            "d": "persecution of Jews"
        },
        "a": "a",
        "r": "The correct answer is 'freie Wahlen' because free elections did not exist during the National Socialist regime. Instead, there was press censorship, arbitrary arrests, and persecution of Jews."
    },
    {
        "qNum": 160,
        "q": "Welcher Krieg dauerte von 1939 bis 1945?",
        "tq": "Which war lasted from 1939 to 1945?",
        "o": {
            "a": "der Erste Weltkrieg",
            "b": "der Zweite Weltkrieg",
            "c": "der Vietnamkrieg",
            "d": "der Golfkrieg"
        },
        "to": {
            "a": "World War I",
            "b": "World War II",
            "c": "the Vietnam War",
            "d": "the Gulf War"
        },
        "a": "b",
        "r": "The correct answer is 'der Zweite Weltkrieg' because World War II lasted from 1939 to 1945."
    },
    {
        "qNum": 161,
        "q": "Was kennzeichnete den NS-Staat? Eine Politik …",
        "tq": "What characterized the Nazi state? A policy of …",
        "o": {
            "a": "des staatlichen Rassismus",
            "b": "der Meinungsfreiheit",
            "c": "der allgemeinen Religionsfreiheit",
            "d": "der Entwicklung der Demokratie"
        },
        "to": {
            "a": "state racism",
            "b": "freedom of expression",
            "c": "general freedom of religion",
            "d": "the development of democracy"
        },
        "a": "a",
        "r": "The correct answer is 'des staatlichen Rassismus' because the Nazi state was characterized by state-sponsored racism."
    },
    {
        "qNum": 162,
        "q": "Claus Schenk Graf von Stauffenberg wurde bekannt durch …",
        "tq": "Claus Schenk Graf von Stauffenberg became famous for …",
        "o": {
            "a": "eine Goldmedaille bei den Olympischen Spielen 1936.",
            "b": "den Bau des Reichstagsgebäudes.",
            "c": "den Aufbau der Wehrmacht.",
            "d": "das Attentat auf Hitler am 20. Juli 1944."
        },
        "to": {
            "a": "a gold medal at the 1936 Olympic Games.",
            "b": "the construction of the Reichstag building.",
            "c": "the establishment of the Wehrmacht.",
            "d": "the assassination attempt on Hitler on July 20, 1944."
        },
        "a": "d",
        "r": "The correct answer is 'das Attentat auf Hitler am 20. Juli 1944.' because Claus Schenk Graf von Stauffenberg is known for his assassination attempt on Hitler."
    },
    {
        "qNum": 163,
        "q": "In welchem Jahr zerstörten die Nationalsozialisten Synagogen und jüdische Geschäfte in Deutschland?",
        "tq": "In which year did the National Socialists destroy synagogues and Jewish businesses in Germany?",
        "o": {
            "a": "1925",
            "b": "1930",
            "c": "1938",
            "d": "1945"
        },
        "to": {
            "a": "1925",
            "b": "1930",
            "c": "1938",
            "d": "1945"
        },
        "a": "c",
        "r": "The correct answer is '1938' because the National Socialists destroyed synagogues and Jewish businesses in Germany in 1938 during the Kristallnacht (Night of Broken Glass)."
    },
    {
        "qNum": 164,
        "q": "Was passierte am 9. November 1938 in Deutschland?",
        "tq": "What happened on November 9, 1938 in Germany?",
        "o": {
            "a": "Mit dem Angriff auf Polen beginnt der Zweite Weltkrieg.",
            "b": "Die Nationalsozialisten verlieren eine Wahl und lösen den Reichstag auf.",
            "c": "Jüdische Geschäfte und Synagogen werden durch Nationalsozialisten und ihre Anhänger zerstört.",
            "d": "Hitler wird Reichspräsident und lässt alle Parteien verbieten."
        },
        "to": {
            "a": "The Second World War begins with the attack on Poland.",
            "b": "The National Socialists lose an election and dissolve the Reichstag.",
            "c": "Jewish shops and synagogues are destroyed by National Socialists and their supporters.",
            "d": "Hitler becomes Reich President and bans all parties."
        },
        "a": "c",
        "r": "The correct answer is 'Jüdische Geschäfte und Synagogen werden durch Nationalsozialisten und ihre Anhänger zerstört.' because on November 9, 1938, the Kristallnacht (Night of Broken Glass) took place, during which National Socialists and their supporters destroyed Jewish businesses and synagogues."
    },
    {
        "qNum": 165,
        "q": "Wie hieß der erste Bundeskanzler der Bundesrepublik Deutschland?",
        "tq": "What was the name of the first Federal Chancellor of the Federal Republic of Germany?",
        "o": {
            "a": "Konrad Adenauer",
            "b": "Kurt Georg Kiesinger",
            "c": "Helmut Schmidt",
            "d": "Willy Brandt"
        },
        "to": {
            "a": "Konrad Adenauer",
            "b": "Kurt Georg Kiesinger",
            "c": "Helmut Schmidt",
            "d": "Willy Brandt"
        },
        "a": "a",
        "r": "The correct answer is 'Konrad Adenauer' because Konrad Adenauer was the first Federal Chancellor of the Federal Republic of Germany."
    },
    {
        "qNum": 166,
        "q": "Bei welchen Demonstrationen in Deutschland riefen die Menschen 'Wir sind das Volk'?",
        "tq": "During which demonstrations in Germany did people shout 'We are the people'?",
        "o": {
            "a": "beim Arbeiteraufstand 1953 in der DDR",
            "b": "bei den Demonstrationen 1968 in der Bundesrepublik Deutschland",
            "c": "bei den Anti-Atomkraft-Demonstrationen 1985 in der Bundesrepublik Deutschland",
            "d": "bei den Montagsdemonstrationen 1989 in der DDR"
        },
        "to": {
            "a": "during the workers' uprising in the GDR in 1953",
            "b": "during the 1968 demonstrations in the Federal Republic of Germany",
            "c": "during the anti-nuclear power demonstrations in the Federal Republic of Germany in 1985",
            "d": "during the Monday demonstrations in the GDR in 1989"
        },
        "a": "d",
        "r": "The correct answer is 'bei den Montagsdemonstrationen 1989 in der DDR' because the slogan 'Wir sind das Volk' (We are the people) was famously used during the Monday demonstrations in the GDR in 1989."
    },
    {
        "qNum": 167,
        "q": "Welche Länder wurden nach dem Zweiten Weltkrieg in Deutschland als 'Alliierte Besatzungsmächte' bezeichnet?",
        "tq": "Which countries were referred to as the 'Allied occupying powers' in Germany after the Second World War?",
        "o": {
            "a": "Sowjetunion, Großbritannien, Polen, Schweden",
            "b": "Frankreich, Sowjetunion, Italien, Japan",
            "c": "USA, Sowjetunion, Spanien, Portugal",
            "d": "USA, Sowjetunion, Großbritannien, Frankreich"
        },
        "to": {
            "a": "Soviet Union, Great Britain, Poland, Sweden",
            "b": "France, Soviet Union, Italy, Japan",
            "c": "USA, Soviet Union, Spain, Portugal",
            "d": "USA, Soviet Union, Great Britain, France"
        },
        "a": "d",
        "r": "The correct answer is 'USA, Sowjetunion, Großbritannien, Frankreich' because the USA, Soviet Union, Great Britain, and France were the four Allied occupying powers in Germany after World War II."
    },
    {
        "qNum": 168,
        "q": "Welches Land war keine 'Alliierte Besatzungsmacht' in Deutschland?",
        "tq": "Which country was not an 'Allied occupying power' in Germany?",
        "o": {
            "a": "USA",
            "b": "Sowjetunion",
            "c": "Frankreich",
            "d": "Japan"
        },
        "to": {
            "a": "USA",
            "b": "Soviet Union",
            "c": "France",
            "d": "Japan"
        },
        "a": "d",
        "r": "The correct answer is 'Japan' because Japan was not one of the Allied occupying powers in Germany. The occupying powers were the USA, Soviet Union, France, and Great Britain."
    },
    {
        "qNum": 169,
        "q": "Wann wurde die Bundesrepublik Deutschland gegründet?",
        "tq": "When was the Federal Republic of Germany founded?",
        "o": {
            "a": "1939",
            "b": "1945",
            "c": "1949",
            "d": "1951"
        },
        "to": {
            "a": "1939",
            "b": "1945",
            "c": "1949",
            "d": "1951"
        },
        "a": "c",
        "r": "The correct answer is '1949' because the Federal Republic of Germany was founded in 1949."
    },
    {
        "qNum": 170,
        "q": "Was gab es während der Zeit des Nationalsozialismus in Deutschland?",
        "tq": "What existed in Germany during the time of National Socialism?",
        "o": {
            "a": "das Verbot von Parteien",
            "b": "das Recht zur freien Entfaltung der Persönlichkeit",
            "c": "Pressefreiheit",
            "d": "den Schutz der Menschenwürde"
        },
        "to": {
            "a": "the prohibition of parties",
            "b": "the right to free development of personality",
            "c": "freedom of the press",
            "d": "the protection of human dignity"
        },
        "a": "a",
        "r": "The correct answer is 'das Verbot von Parteien' because the National Socialists banned other political parties. The other options represent rights and freedoms that were suppressed during that period."
    },
    {
        "qNum": 171,
        "q": "Soziale Marktwirtschaft bedeutet, die Wirtschaft …",
        "tq": "The social market economy means that the economy …",
        "o": {
            "a": "steuert sich allein nach Angebot und Nachfrage.",
            "b": "wird vom Staat geplant und gesteuert, Angebot und Nachfrage werden nicht berücksichtigt.",
            "c": "richtet sich nach der Nachfrage im Ausland.",
            "d": "richtet sich nach Angebot und Nachfrage, aber der Staat sorgt für einen sozialen Ausgleich."
        },
        "to": {
            "a": "is controlled solely by supply and demand.",
            "b": "is planned and controlled by the state, supply and demand are not taken into account.",
            "c": "is based on demand from abroad.",
            "d": "is based on supply and demand, but the state ensures social balance."
        },
        "a": "d",
        "r": "The correct answer is 'richtet sich nach Angebot und Nachfrage, aber der Staat sorgt für einen sozialen Ausgleich.' because the social market economy in Germany combines a free market with social policies to balance economic efficiency and social welfare."
    },
    {
        "qNum": 172,
        "q": "In welcher Besatzungszone wurde die DDR gegründet? In der …",
        "tq": "In which occupation zone was the GDR founded? In the …",
        "o": {
            "a": "amerikanischen Besatzungszone",
            "b": "französischen Besatzungszone",
            "c": "britischen Besatzungszone",
            "d": "sowjetischen Besatzungszone"
        },
        "to": {
            "a": "American occupation zone",
            "b": "French occupation zone",
            "c": "British occupation zone",
            "d": "Soviet occupation zone"
        },
        "a": "d",
        "r": "The correct answer is 'sowjetischen Besatzungszone' because the German Democratic Republic (GDR) was founded in the Soviet occupation zone of Germany after World War II."
    },
    {
        "qNum": 173,
        "q": "Die Bundesrepublik Deutschland ist ein Gründungsmitglied …",
        "tq": "The Federal Republic of Germany is a founding member of …",
        "o": {
            "a": "des Nordatlantikpakts (NATO).",
            "b": "der Vereinten Nationen (VN).",
            "c": "der Europäischen Union (EU).",
            "d": "des Warschauer Pakts."
        },
        "to": {
            "a": "the North Atlantic Treaty Organization (NATO).",
            "b": "the United Nations (UN).",
            "c": "the European Union (EU).",
            "d": "the Warsaw Pact."
        },
        "a": "b",
        "r": "The correct answer is 'der Vereinten Nationen (VN).' because the Federal Republic of Germany is a founding member of the United Nations (UN)."
    },
    {
        "qNum": 174,
        "q": "Wann wurde die DDR gegründet?",
        "tq": "When was the GDR founded?",
        "o": {
            "a": "1947",
            "b": "1949",
            "c": "1953",
            "d": "1956"
        },
        "to": {
            "a": "1947",
            "b": "1949",
            "c": "1953",
            "d": "1956"
        },
        "a": "b",
        "r": "The correct answer is '1949' because the German Democratic Republic (GDR) was founded in 1949."
    },
    {
        "qNum": 175,
        "q": "Wie viele Besatzungszonen gab es in Deutschland nach dem Zweiten Weltkrieg?",
        "tq": "How many occupation zones were there in Germany after the Second World War?",
        "o": {
            "a": "3",
            "b": "4",
            "c": "5",
            "d": "6"
        },
        "to": {
            "a": "3",
            "b": "4",
            "c": "5",
            "d": "6"
        },
        "a": "b",
        "r": "The correct answer is '4' because after World War II, Germany was divided into four occupation zones."
    },
    {
        "qNum": 176,
        "q": "Wie waren die Besatzungszonen Deutschlands nach 1945 verteilt?",
        "tq": "How were Germany's occupation zones distributed after 1945?",
        "o": {
            "a": "1=Großbritannien, 2=Sowjetunion, 3=Frankreich, 4=USA",
            "b": "1=Sowjetunion, 2=Großbritannien, 3=USA, 4=Frankreich",
            "c": "1=Großbritannien, 2=Sowjetunion, 3=USA, 4=Frankreich",
            "d": "1=Großbritannien, 2=USA, 3=Sowjetunion, 4=Frankreich"
        },
        "to": {
            "a": "1=Great Britain, 2=Soviet Union, 3=France, 4=USA",
            "b": "1=Soviet Union, 2=Great Britain, 3=USA, 4=France",
            "c": "1=Great Britain, 2=Soviet Union, 3=USA, 4=France",
            "d": "1=Great Britain, 2=USA, 3=Soviet Union, 4=France"
        },
        "a": "d",
        "r": "The correct answer is '1=Großbritannien, 2=USA, 3=Sowjetunion, 4=Frankreich' because the occupation zones were distributed as follows: 1=Great Britain, 2=USA, 3=Soviet Union, 4=France."
    },
    {
        "qNum": 177,
        "q": "Welche deutsche Stadt wurde nach dem Zweiten Weltkrieg in vier Sektoren aufgeteilt?",
        "tq": "Which German city was divided into four sectors after the Second World War?",
        "o": {
            "a": "München",
            "b": "Berlin",
            "c": "Dresden",
            "d": "Frankfurt/Oder"
        },
        "to": {
            "a": "Munich",
            "b": "Berlin",
            "c": "Dresden",
            "d": "Frankfurt/Oder"
        },
        "a": "b",
        "r": "The correct answer is 'Berlin' because after World War II, Berlin was divided into four sectors, controlled by the USA, Soviet Union, Great Britain, and France."
    },
    {
        "qNum": 178,
        "q": "Vom Juni 1948 bis zum Mai 1949 wurden die Bürgerinnen und Bürger von West-Berlin durch eine Luftbrücke versorgt. Welcher Umstand war dafür verantwortlich?",
        "tq": "From June 1948 to May 1949, the citizens of West Berlin were supplied by an airlift. What circumstance was responsible for this?",
        "o": {
            "a": "Für Frankreich war eine Versorgung der West-Berliner Bevölkerung mit dem Flugzeug kostengünstiger.",
            "b": "Die amerikanischen Soldatinnen und Soldaten hatten beim Landtransport Angst vor Überfällen.",
            "c": "Für Großbritannien war die Versorgung über die Luftbrücke schneller.",
            "d": "Die Sowjetunion unterbrach den gesamten Verkehr auf dem Landwege."
        },
        "to": {
            "a": "For France, supplying the West Berlin population by plane was cheaper.",
            "b": "The American soldiers were afraid of attacks during land transport.",
            "c": "For Great Britain, supplying via the airlift was faster.",
            "d": "The Soviet Union interrupted all traffic on the land routes."
        },
        "a": "d",
        "r": "The correct answer is 'Die Sowjetunion unterbrach den gesamten Verkehr auf dem Landwege.' because the Soviet Union's blockade of land routes to West Berlin led to the Berlin Airlift."
    },
    {
        "qNum": 179,
        "q": "Wie endete der Zweite Weltkrieg in Europa offiziell?",
        "tq": "How did the Second World War in Europe officially end?",
        "o": {
            "a": "mit dem Tod Adolf Hitlers",
            "b": "durch die bedingungslose Kapitulation Deutschlands",
            "c": "mit dem Rückzug der Deutschen aus den besetzten Gebieten",
            "d": "durch eine Revolution in Deutschland"
        },
        "to": {
            "a": "with the death of Adolf Hitler",
            "b": "through the unconditional surrender of Germany",
            "c": "with the withdrawal of the Germans from the occupied territories",
            "d": "through a revolution in Germany"
        },
        "a": "b",
        "r": "The correct answer is 'durch die bedingungslose Kapitulation Deutschlands' because the Second World War in Europe officially ended with the unconditional surrender of Germany."
    },
    {
        "qNum": 180,
        "q": "Der erste Bundeskanzler der Bundesrepublik Deutschland war …",
        "tq": "The first Federal Chancellor of the Federal Republic of Germany was …",
        "o": {
            "a": "Ludwig Erhard.",
            "b": "Willy Brandt.",
            "c": "Konrad Adenauer.",
            "d": "Gerhard Schröder."
        },
        "to": {
            "a": "Ludwig Erhard.",
            "b": "Willy Brandt.",
            "c": "Konrad Adenauer.",
            "d": "Gerhard Schröder."
        },
        "a": "c",
        "r": "The correct answer is 'Konrad Adenauer.' because Konrad Adenauer was the first Federal Chancellor of the Federal Republic of Germany."
    },
    {
        "qNum": 181,
        "q": "Was wollte Willy Brandt mit seinem Kniefall 1970 im ehemaligen jüdischen Ghetto in Warschau ausdrücken?",
        "tq": "What did Willy Brandt want to express with his kneeling in the former Jewish ghetto in Warsaw in 1970?",
        "o": {
            "a": "Er hat sich den ehemaligen Alliierten unterworfen.",
            "b": "Er bat Polen und die polnischen Juden um Vergebung.",
            "c": "Er zeigte seine Demut vor dem Warschauer Pakt.",
            "d": "Er sprach ein Gebet am Grab des Unbekannten Soldaten."
        },
        "to": {
            "a": "He submitted to the former Allies.",
            "b": "He asked Poland and the Polish Jews for forgiveness.",
            "c": "He showed his humility to the Warsaw Pact.",
            "d": "He said a prayer at the Tomb of the Unknown Soldier."
        },
        "a": "b",
        "r": "The correct answer is 'Er bat Polen und die polnischen Juden um Vergebung.' because Willy Brandt's kneeling was a gesture of humility and a plea for forgiveness for Germany's actions during World War II."
    },
    {
        "qNum": 182,
        "q": "Wie heißt das jüdische Gebetshaus?",
        "tq": "What is the Jewish house of prayer called?",
        "o": {
            "a": "Basilika",
            "b": "Moschee",
            "c": "Synagoge",
            "d": "Kirche"
        },
        "to": {
            "a": "basilica",
            "b": "mosque",
            "c": "synagogue",
            "d": "church"
        },
        "a": "c",
        "r": "The correct answer is 'Synagoge' because the Jewish house of prayer is called a synagogue."
    },
    {
        "qNum": 183,
        "q": "Wann war in der Bundesrepublik Deutschland das 'Wirtschaftswunder'?",
        "tq": "When was the 'economic miracle' in the Federal Republic of Germany?",
        "o": {
            "a": "40er Jahre",
            "b": "50er Jahre",
            "c": "70er Jahre",
            "d": "80er Jahre"
        },
        "to": {
            "a": "40s",
            "b": "50s",
            "c": "70s",
            "d": "80s"
        },
        "a": "b",
        "r": "The correct answer is '50er Jahre' because the 'Wirtschaftswunder,' a period of rapid economic growth, occurred in the Federal Republic of Germany in the 1950s."
    },
    {
        "qNum": 184,
        "q": "184. Auf welcher rechtlichen Grundlage wurde der Staat Israel gegründet?",
        "tq": "184. On what legal basis was the State of Israel founded?",
        "o": {
            "a": "eine Resolution der Vereinten Nationen",
            "b": "ein Beschluss des Zionistenkongresses",
            "c": "ein Vorschlag der Bundesregierung",
            "d": "ein Vorschlag der UdSSR"
        },
        "to": {
            "a": "a resolution of the United Nations",
            "b": "a decision of the Zionist Congress",
            "c": "a proposal by the federal government",
            "d": "a proposal by the USSR"
        },
        "a": "a",
        "r": "The correct answer is 'eine Resolution der Vereinten Nationen' because the State of Israel was founded on the basis of a resolution of the United Nations."
    },
    {
        "qNum": 185,
        "q": "Wofür stand der Ausdruck 'Eiserner Vorhang'?",
        "tq": "What did the expression 'Iron Curtain' stand for?",
        "o": {
            "a": "Für die Abschottung des Warschauer Pakts gegen den Westen",
            "b": "Norddeutschlands gegen Süddeutschland",
            "c": "Nazi-Deutschlands gegen die Alliierten",
            "d": "Europas gegen die USA"
        },
        "to": {
            "a": "For the isolation of the Warsaw Pact against the West",
            "b": "Northern Germany against Southern Germany",
            "c": "Nazi Germany against the Allies",
            "d": "Europe against the USA"
        },
        "a": "a",
        "r": "The correct answer is 'Für die Abschottung des Warschauer Pakts gegen den Westen' because the Iron Curtain symbolized the ideological and physical boundary dividing Europe into two separate areas from the end of World War II until the end of the Cold War."
    },
    {
        "qNum": 186,
        "q": "Im Jahr 1953 gab es in der DDR einen Aufstand, an den lange Zeit in der Bundesrepublik Deutschland ein Feiertag erinnerte. Wann war das?",
        "tq": "In 1953 there was an uprising in the GDR, which a holiday in the Federal Republic of Germany commemorated for a long time. When was that?",
        "o": {
            "a": "1. Mai",
            "b": "17. Juni",
            "c": "20. Juli",
            "d": "9. November"
        },
        "to": {
            "a": "May 1st",
            "b": "June 17th",
            "c": "July 20th",
            "d": "November 9th"
        },
        "a": "b",
        "r": "The correct answer is '17. Juni' because the uprising in the GDR in 1953, which was commemorated as a holiday in the Federal Republic of Germany, took place on June 17th."
    },
    {
        "qNum": 187,
        "q": "Welcher deutsche Staat hatte eine schwarz-rot-goldene Flagge mit Hammer, Zirkel und Ährenkranz?",
        "tq": "Which German state had a black-red-gold flag with hammer, compass and wreath of corn?",
        "o": {
            "a": "Preußen",
            "b": "Bundesrepublik Deutschland",
            "c": "\"Drittes Reich\"",
            "d": "DDR"
        },
        "to": {
            "a": "Prussia",
            "b": "Federal Republic of Germany",
            "c": "\"Third Reich\"",
            "d": "GDR"
        },
        "a": "d",
        "r": "The correct answer is 'DDR' because the German Democratic Republic (DDR) had a black-red-gold flag with hammer, compass, and wreath of corn as its emblem."
    },
    {
        "qNum": 188,
        "q": "In welchem Jahr wurde die Mauer in Berlin gebaut?",
        "tq": "In which year was the Berlin Wall built?",
        "o": {
            "a": "1953",
            "b": "1956",
            "c": "1959",
            "d": "1961"
        },
        "to": {
            "a": "1953",
            "b": "1956",
            "c": "1959",
            "d": "1961"
        },
        "a": "d",
        "r": "The correct answer is '1961' because the Berlin Wall was built in 1961."
    },
    {
        "qNum": 189,
        "q": "Wann baute die DDR die Mauer in Berlin?",
        "tq": "When did the GDR build the wall in Berlin?",
        "o": {
            "a": "1919",
            "b": "1933",
            "c": "1961",
            "d": "1990"
        },
        "to": {
            "a": "1919",
            "b": "1933",
            "c": "1961",
            "d": "1990"
        },
        "a": "c",
        "r": "The correct answer is '1961' because the GDR built the Berlin Wall in 1961."
    },
    {
        "qNum": 190,
        "q": "Was bedeutet die Abkürzung DDR?",
        "tq": "What does the abbreviation GDR mean?",
        "o": {
            "a": "Dritter Deutscher Rundfunk",
            "b": "Die Deutsche Republik",
            "c": "Dritte Deutsche Republik",
            "d": "Deutsche Demokratische Republik"
        },
        "to": {
            "a": "Third German Broadcasting",
            "b": "The German Republic",
            "c": "Third German Republic",
            "d": "German Democratic Republic"
        },
        "a": "d",
        "r": "The correct answer is 'Deutsche Demokratische Republik' because DDR stands for Deutsche Demokratische Republik (German Democratic Republic)."
    },
    {
        "qNum": 191,
        "q": "Wann wurde die Mauer in Berlin für alle geöffnet?",
        "tq": "When was the Berlin Wall opened for everyone?",
        "o": {
            "a": "1987",
            "b": "1989",
            "c": "1992",
            "d": "1995"
        },
        "to": {
            "a": "1987",
            "b": "1989",
            "c": "1992",
            "d": "1995"
        },
        "a": "b",
        "r": "The correct answer is '1989' because the Berlin Wall was opened for everyone on November 9, 1989."
    },
    {
        "qNum": 192,
        "q": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
        "tq": "Which of today's German federal states used to belong to the territory of the GDR?",
        "o": {
            "a": "Brandenburg",
            "b": "Bayern",
            "c": "Saarland",
            "d": "Hessen"
        },
        "to": {
            "a": "Brandenburg",
            "b": "Bavaria",
            "c": "Saarland",
            "d": "Hesse"
        },
        "a": "a",
        "r": "The correct answer is 'Brandenburg' because Brandenburg was part of the German Democratic Republic (GDR)."
    },
    {
        "qNum": 193,
        "q": "Von 1961 bis 1989 war Berlin …",
        "tq": "From 1961 to 1989, Berlin was …",
        "o": {
            "a": "ohne Bürgermeister.",
            "b": "ein eigener Staat.",
            "c": "durch eine Mauer geteilt.",
            "d": "nur mit dem Flugzeug erreichbar."
        },
        "to": {
            "a": "without a mayor.",
            "b": "its own state.",
            "c": "divided by a wall.",
            "d": "only accessible by plane."
        },
        "a": "c",
        "r": "The correct answer is 'durch eine Mauer geteilt.' because from 1961 to 1989, Berlin was divided by the Berlin Wall."
    },
    {
        "qNum": 194,
        "q": "Am 3. Oktober feiert man in Deutschland den Tag der Deutschen …",
        "tq": "On October 3rd, Germany celebrates the Day of German …",
        "o": {
            "a": "Einheit.",
            "b": "Nation.",
            "c": "Bundesländer.",
            "d": "Städte."
        },
        "to": {
            "a": "Unity.",
            "b": "Nation.",
            "c": "Federal States.",
            "d": "Cities."
        },
        "a": "a",
        "r": "The correct answer is 'Einheit.' because October 3rd is celebrated as the Day of German Unity, commemorating the reunification of Germany."
    },
    {
        "qNum": 195,
        "q": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
        "tq": "Which of today's German federal states used to belong to the territory of the GDR?",
        "o": {
            "a": "Hessen",
            "b": "Sachsen-Anhalt",
            "c": "Nordrhein-Westfalen",
            "d": "Saarland"
        },
        "to": {
            "a": "Hesse",
            "b": "Saxony-Anhalt",
            "c": "North Rhine-Westphalia",
            "d": "Saarland"
        },
        "a": "b",
        "r": "The correct answer is 'Sachsen-Anhalt' because Saxony-Anhalt was part of the German Democratic Republic (GDR)."
    },
    {
        "qNum": 196,
        "q": "Warum nennt man die Zeit im Herbst 1989 in der DDR 'Die Wende'?",
        "tq": "Why is the period in autumn 1989 in the GDR called 'Die Wende'?",
        "o": {
            "a": "In dieser Zeit veränderte sich die DDR politisch … von einer Diktatur zur Demokratie.",
            "b": "von einer liberalen Marktwirtschaft zum Sozialismus.",
            "c": "von einer Monarchie zur Sozialdemokratie.",
            "d": "von einem religiösen Staat zu einem kommunistischen Staat."
        },
        "to": {
            "a": "During this time the GDR changed politically … from a dictatorship to a democracy.",
            "b": "from a liberal market economy to socialism.",
            "c": "from a monarchy to social democracy.",
            "d": "from a religious state to a communist state."
        },
        "a": "a",
        "r": "The correct answer is 'In dieser Zeit veränderte sich die DDR politisch … von einer Diktatur zur Demokratie.' because 'Die Wende' refers to the political transformation of the GDR from a dictatorship to a more democratic system."
    },
    {
        "qNum": 197,
        "q": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
        "tq": "Which of today's German federal states used to belong to the territory of the GDR?",
        "o": {
            "a": "Thüringen",
            "b": "Hessen",
            "c": "Bayern",
            "d": "Bremen"
        },
        "to": {
            "a": "Thuringia",
            "b": "Hesse",
            "c": "Bavaria",
            "d": "Bremen"
        },
        "a": "a",
        "r": "The correct answer is 'Thüringen' because Thuringia was part of the German Democratic Republic (GDR)."
    },
    {
        "qNum": 198,
        "q": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
        "tq": "Which of today's German federal states used to belong to the territory of the GDR?",
        "o": {
            "a": "Bayern",
            "b": "Niedersachsen",
            "c": "Sachsen",
            "d": "Baden-Württemberg"
        },
        "to": {
            "a": "Bavaria",
            "b": "Lower Saxony",
            "c": "Saxony",
            "d": "Baden-Württemberg"
        },
        "a": "c",
        "r": "The correct answer is 'Sachsen' because Saxony was part of the German Democratic Republic (GDR)."
    },
    {
        "qNum": 199,
        "q": "Mit der Abkürzung 'Stasi' meinte man in der DDR …",
        "tq": "In the GDR, the abbreviation 'Stasi' meant …",
        "o": {
            "a": "das Parlament.",
            "b": "das Ministerium für Staatssicherheit.",
            "c": "eine regierende Partei.",
            "d": "das Ministerium für Volksbildung."
        },
        "to": {
            "a": "the parliament.",
            "b": "the Ministry for State Security.",
            "c": "a ruling party.",
            "d": "the Ministry for People's Education."
        },
        "a": "b",
        "r": "The correct answer is 'das Ministerium für Staatssicherheit.' because 'Stasi' was the colloquial term for the Ministerium für Staatssicherheit (Ministry for State Security), the secret police of the GDR."
    },
    {
        "qNum": 200,
        "q": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
        "tq": "Which of today's German federal states used to belong to the territory of the GDR?",
        "o": {
            "a": "Hessen",
            "b": "Schleswig-Holstein",
            "c": "Mecklenburg-Vorpommern",
            "d": "Saarland"
        },
        "to": {
            "a": "Hesse",
            "b": "Schleswig-Holstein",
            "c": "Mecklenburg-Western Pomerania",
            "d": "Saarland"
        },
        "a": "c",
        "r": "The correct answer is 'Mecklenburg-Vorpommern' because Mecklenburg-Western Pomerania was part of the German Democratic Republic (GDR)."
    },
    {
        "qNum": 201,
        "q": "Welche der folgenden Auflistungen enthält nur Bundesländer, die zum Gebiet der früheren DDR gehörten?",
        "tq": "Which of the following lists contains only federal states that belonged to the former GDR?",
        "o": {
            "a": "Niedersachsen, Nordrhein-Westfalen, Hessen, Schleswig-Holstein, Brandenburg",
            "b": "Mecklenburg-Vorpommern, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen",
            "c": "Bayern, Baden-Württemberg, Rheinland-Pfalz, Thüringen, Sachsen",
            "d": "Sachsen, Thüringen, Hessen, Niedersachen, Brandenburg"
        },
        "to": {
            "a": "Lower Saxony, North Rhine-Westphalia, Hesse, Schleswig-Holstein, Brandenburg",
            "b": "Mecklenburg-Western Pomerania, Brandenburg, Saxony, Saxony-Anhalt, Thuringia",
            "c": "Bavaria, Baden-Württemberg, Rhineland-Palatinate, Thuringia, Saxony",
            "d": "Saxony, Thuringia, Hesse, Lower Saxony, Brandenburg"
        },
        "a": "b",
        "r": "The correct answer is 'Mecklenburg-Vorpommern, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen' because all states listed in option b were part of the former GDR."
    },
    {
        "qNum": 202,
        "q": "Zu wem gehörte die DDR im 'Kalten Krieg'?",
        "tq": "To whom did the GDR belong in the 'Cold War'?",
        "o": {
            "a": "zu den Westmächten",
            "b": "zum Warschauer Pakt",
            "c": "zur NATO",
            "d": "zu den blockfreien Staaten"
        },
        "to": {
            "a": "to the Western powers",
            "b": "to the Warsaw Pact",
            "c": "to NATO",
            "d": "to the non-aligned states"
        },
        "a": "b",
        "r": "The correct answer is 'zum Warschauer Pakt' because the GDR was a member of the Warsaw Pact, the military alliance of Eastern Bloc countries led by the Soviet Union."
    },
    {
        "qNum": 203,
        "q": "Wie hieß das Wirtschaftssystem der DDR?",
        "tq": "What was the economic system of the GDR called?",
        "o": {
            "a": "Marktwirtschaft",
            "b": "Planwirtschaft",
            "c": "Angebot und Nachfrage",
            "d": "Kapitalismus"
        },
        "to": {
            "a": "market economy",
            "b": "planned economy",
            "c": "supply and demand",
            "d": "capitalism"
        },
        "a": "b",
        "r": "The correct answer is 'Planwirtschaft' because the GDR had a planned economy, where the state controlled production and distribution."
    },
    {
        "qNum": 204,
        "q": "Wie wurden die Bundesrepublik Deutschland und die DDR zu einem Staat?",
        "tq": "How did the Federal Republic of Germany and the GDR become one state?",
        "o": {
            "a": "Die Bundesrepublik hat die DDR besetzt.",
            "b": "Die heutigen fünf östlichen Bundesländer sind der Bundesrepublik Deutschland beigetreten.",
            "c": "Die westlichen Bundesländer sind der DDR beigetreten.",
            "d": "Die DDR hat die Bundesrepublik Deutschland besetzt."
        },
        "to": {
            "a": "The Federal Republic occupied the GDR.",
            "b": "Today's five eastern federal states joined the Federal Republic of Germany.",
            "c": "The western federal states joined the GDR.",
            "d": "The GDR occupied the Federal Republic of Germany."
        },
        "a": "b",
        "r": "The correct answer is 'Die heutigen fünf östlichen Bundesländer sind der Bundesrepublik Deutschland beigetreten.' because the reunification of Germany occurred when the eastern states of the GDR joined the Federal Republic of Germany."
    },
    {
        "qNum": 205,
        "q": "Mit dem Beitritt der DDR zur Bundesrepublik Deutschland gehören die neuen Bundesländer nun auch …",
        "tq": "With the accession of the GDR to the Federal Republic of Germany, the new federal states now also belong to …",
        "o": {
            "a": "zur Europäischen Union.",
            "b": "zum Warschauer Pakt.",
            "c": "zur OPEC.",
            "d": "zur Europäischen Verteidigungsgemeinschaft."
        },
        "to": {
            "a": "the European Union.",
            "b": "the Warsaw Pact.",
            "c": "OPEC.",
            "d": "the European Defence Community."
        },
        "a": "a",
        "r": "The correct answer is 'zur Europäischen Union.' because when the GDR joined the Federal Republic of Germany, the new federal states also became part of the European Union."
    },
    {
        "qNum": 206,
        "q": "206. Woran erinnern die sogenannten „Stolpersteine“ in Deutschland?",
        "tq": "206. What do the so-called 'stumbling stones' in Germany commemorate?",
        "o": {
            "a": "an berühmte deutsche Politikerinnen und Politiker",
            "b": "an die Opfer des Nationalsozialismus",
            "c": "an Verkehrstote",
            "d": "an bekannte jüdische Musiker"
        },
        "to": {
            "a": "famous German politicians",
            "b": "the victims of National Socialism",
            "c": "traffic fatalities",
            "d": "well-known Jewish musicians"
        },
        "a": "b",
        "r": "The correct answer is 'an die Opfer des Nationalsozialismus' because Stolpersteine (stumbling stones) are small, cobblestone-sized memorials placed in front of the former homes of victims of Nazi persecution."
    },
    {
        "qNum": 207,
        "q": "In welchem Militärbündnis war die DDR Mitglied?",
        "tq": "In which military alliance was the GDR a member?",
        "o": {
            "a": "in der NATO",
            "b": "im Rheinbund",
            "c": "im Warschauer Pakt",
            "d": "im Europabündnis"
        },
        "to": {
            "a": "in NATO",
            "b": "in the Confederation of the Rhine",
            "c": "in the Warsaw Pact",
            "d": "in the European Alliance"
        },
        "a": "c",
        "r": "The correct answer is 'im Warschauer Pakt' because the GDR was a member of the Warsaw Pact."
    },
    {
        "qNum": 208,
        "q": "Was war die 'Stasi'?",
        "tq": "What was the 'Stasi'?",
        "o": {
            "a": "der Geheimdienst im 'Dritten Reich'",
            "b": "eine berühmte deutsche Gedenkstätte",
            "c": "der Geheimdienst der DDR",
            "d": "ein deutscher Sportverein während des Zweiten Weltkrieges"
        },
        "to": {
            "a": "the secret service in the 'Third Reich'",
            "b": "a famous German memorial",
            "c": "the secret service of the GDR",
            "d": "a German sports club during the Second World War"
        },
        "a": "c",
        "r": "The correct answer is 'der Geheimdienst der DDR' because the Stasi was the colloquial term for the Ministry for State Security, the secret police of the GDR."
    },
    {
        "qNum": 209,
        "q": "Welches war das Wappen der Deutschen Demokratischen Republik?",
        "tq": "What was the coat of arms of the German Democratic Republic?",
        "o": {
            "a": "Bild 1",
            "b": "Bild 2",
            "c": "Bild 3",
            "d": "Bild 4"
        },
        "to": {
            "a": "Image 1",
            "b": "Image 2",
            "c": "Image 3",
            "d": "Image 4"
        },
        "a": "d",
        "r": "The correct answer is 'Bild 4' because Image 4 shows the coat of arms of the German Democratic Republic."
    },
    {
        "qNum": 210,
        "q": "Was ereignete sich am 17. Juni 1953 in der DDR?",
        "tq": "What happened on June 17, 1953 in the GDR?",
        "o": {
            "a": "der feierliche Beitritt zum Warschauer Pakt",
            "b": "landesweite Streiks und ein Volksaufstand",
            "c": "der 1. SED-Parteitag",
            "d": "der erste Besuch Fidel Castros"
        },
        "to": {
            "a": "the ceremonial accession to the Warsaw Pact",
            "b": "nationwide strikes and a popular uprising",
            "c": "the 1st SED party congress",
            "d": "the first visit of Fidel Castro"
        },
        "a": "b",
        "r": "The correct answer is 'landesweite Streiks und ein Volksaufstand' because on June 17, 1953, there were widespread strikes and a popular uprising in the GDR."
    },
    {
        "qNum": 211,
        "q": "Welcher Politiker steht für die 'Ostverträge'?",
        "tq": "Which politician stands for the 'Eastern Treaties'?",
        "o": {
            "a": "Helmut Kohl",
            "b": "Willy Brandt",
            "c": "Michail Gorbatschow",
            "d": "Ludwig Erhard"
        },
        "to": {
            "a": "Helmut Kohl",
            "b": "Willy Brandt",
            "c": "Mikhail Gorbachev",
            "d": "Ludwig Erhard"
        },
        "a": "b",
        "r": "The correct answer is 'Willy Brandt' because Willy Brandt's Ostpolitik (Eastern Policy) led to the 'Ostverträge' (Eastern Treaties) with Eastern European countries."
    },
    {
        "qNum": 212,
        "q": "Wie heißt Deutschland mit vollem Namen?",
        "tq": "What is Germany's full name?",
        "o": {
            "a": "Bundesstaat Deutschland",
            "b": "Bundesländer Deutschland",
            "c": "Bundesrepublik Deutschland",
            "d": "Bundesbezirk Deutschland"
        },
        "to": {
            "a": "Federal State Germany",
            "b": "Federal States Germany",
            "c": "Federal Republic of Germany",
            "d": "Federal District Germany"
        },
        "a": "c",
        "r": "The correct answer is 'Bundesrepublik Deutschland' because Germany's full name is Bundesrepublik Deutschland (Federal Republic of Germany)."
    },
    {
        "qNum": 213,
        "q": "Wie viele Einwohner hat Deutschland?",
        "tq": "How many inhabitants does Germany have?",
        "o": {
            "a": "70 Millionen",
            "b": "78 Millionen",
            "c": "84 Millionen",
            "d": "90 Millionen"
        },
        "to": {
            "a": "70 million",
            "b": "78 million",
            "c": "84 million",
            "d": "90 million"
        },
        "a": "c",
        "r": "The correct answer is '84 Millionen' because Germany has approximately 84 million inhabitants."
    },
    {
        "qNum": 214,
        "q": "Welche Farben hat die deutsche Flagge?",
        "tq": "What colors are in the German flag?",
        "o": {
            "a": "schwarz-rot-gold",
            "b": "rot-weiß-schwarz",
            "c": "schwarz-rot-grün",
            "d": "schwarz-gelb-rot"
        },
        "to": {
            "a": "black-red-gold",
            "b": "red-white-black",
            "c": "black-red-green",
            "d": "black-yellow-red"
        },
        "a": "a",
        "r": "The correct answer is 'schwarz-rot-gold' because the German flag consists of the colors black, red, and gold."
    },
    {
        "qNum": 215,
        "q": "Wer wird als 'Kanzler der Deutschen Einheit' bezeichnet?",
        "tq": "Who is referred to as the 'Chancellor of German Unity'?",
        "o": {
            "a": "Gerhard Schröder",
            "b": "Helmut Kohl",
            "c": "Konrad Adenauer",
            "d": "Helmut Schmidt"
        },
        "to": {
            "a": "Gerhard Schröder",
            "b": "Helmut Kohl",
            "c": "Konrad Adenauer",
            "d": "Helmut Schmidt"
        },
        "a": "b",
        "r": "The correct answer is 'Helmut Kohl' because Helmut Kohl is known as the 'Chancellor of German Unity' for his role in the reunification of Germany."
    },
    {
        "qNum": 216,
        "image": "216.png",
        "q": "Welches Symbol ist im Plenarsaal des Deutschen Bundestages zu sehen?",
        "tq": "Which symbol can be seen in the plenary hall of the German Bundestag?",
        "o": {
            "a": "der Bundesadler",
            "b": "die Fahne der Stadt Berlin",
            "c": "der Reichsadler",
            "d": "die Reichskrone"
        },
        "to": {
            "a": "the Federal Eagle",
            "b": "the flag of the city of Berlin",
            "c": "the Imperial Eagle",
            "d": "the Imperial Crown"
        },
        "a": "a",
        "r": "The correct answer is 'der Bundesadler' because the Federal Eagle is displayed in the plenary hall of the German Bundestag as a symbol of German sovereignty."
    },
    {
        "qNum": 217,
        "q": "In welchem Zeitraum gab es die Deutsche Demokratische Republik (DDR)?",
        "tq": "During which period did the German Democratic Republic (GDR) exist?",
        "o": {
            "a": "1919 bis 1927",
            "b": "1933 bis 1945",
            "c": "1945 bis 1961",
            "d": "1949 bis 1990"
        },
        "to": {
            "a": "1919 to 1927",
            "b": "1933 to 1945",
            "c": "1945 to 1961",
            "d": "1949 to 1990"
        },
        "a": "d",
        "r": "The correct answer is '1949 bis 1990' because the German Democratic Republic (DDR) existed from 1949 to 1990."
    },
    {
        "qNum": 218,
        "q": "Wie viele Bundesländer kamen bei der Wiedervereinigung 1990 zur Bundesrepublik Deutschland hinzu?",
        "tq": "How many federal states were added to the Federal Republic of Germany during reunification in 1990?",
        "o": {
            "a": "4",
            "b": "5",
            "c": "6",
            "d": "7"
        },
        "to": {
            "a": "4",
            "b": "5",
            "c": "6",
            "d": "7"
        },
        "a": "b",
        "r": "The correct answer is '5' because five new federal states were formed on the territory of the former GDR and joined the Federal Republic of Germany in 1990."
    },
    {
        "qNum": 219,
        "q": "Die Bundesrepublik Deutschland hat die Grenzen von heute seit …",
        "tq": "The Federal Republic of Germany has had its current borders since …",
        "o": {
            "a": "1933",
            "b": "1949",
            "c": "1971",
            "d": "1990"
        },
        "to": {
            "a": "1933",
            "b": "1949",
            "c": "1971",
            "d": "1990"
        },
        "a": "d",
        "r": "The correct answer is '1990' because Germany's current borders were established after the reunification in 1990."
    },
    {
        "qNum": 220,
        "q": "Der 27. Januar ist in Deutschland ein offizieller Gedenktag. Woran erinnert dieser Tag?",
        "tq": "January 27th is an official memorial day in Germany. What does this day commemorate?",
        "o": {
            "a": "an das Ende des Zweiten Weltkrieges",
            "b": "an die Verabschiedung des Grundgesetzes",
            "c": "an die Wiedervereinigung Deutschlands",
            "d": "an die Opfer des Nationalsozialismus (Tag der Befreiung des Vernichtungslagers Auschwitz)"
        },
        "to": {
            "a": "the end of the Second World War",
            "b": "the adoption of the Basic Law",
            "c": "the reunification of Germany",
            "d": "the victims of National Socialism (Day of the Liberation of the Auschwitz extermination camp)"
        },
        "a": "d",
        "r": "The correct answer is 'an die Opfer des Nationalsozialismus (Tag der Befreiung des Vernichtungslagers Auschwitz)' because January 27th is the day of commemoration for the victims of National Socialism, marking the liberation of the Auschwitz extermination camp."
    },
    {
        "qNum": 221,
        "q": "Deutschland ist Mitglied des Schengener Abkommens. Was bedeutet das?",
        "tq": "Germany is a member of the Schengen Agreement. What does that mean?",
        "o": {
            "a": "Deutsche können in viele Länder Europas ohne Passkontrolle reisen.",
            "b": "Alle Menschen können ohne Personenkontrolle in Deutschland einreisen.",
            "c": "Deutsche können ohne Passkontrolle in jedes Land reisen.",
            "d": "Deutsche können in jedem Land mit dem Euro bezahlen."
        },
        "to": {
            "a": "Germans can travel to many European countries without passport control.",
            "b": "All people can enter Germany without identity checks.",
            "c": "Germans can travel to any country without passport control.",
            "d": "Germans can pay with the euro in any country."
        },
        "a": "a",
        "r": "The correct answer is 'Deutsche können in viele Länder Europas ohne Passkontrolle reisen.' because the Schengen Agreement allows for the free movement of people between participating European countries without passport control."
    },
    {
        "qNum": 222,
        "q": "Welches Land ist ein Nachbarland von Deutschland?",
        "tq": "Which country is a neighboring country of Germany?",
        "o": {
            "a": "Ungarn",
            "b": "Portugal",
            "c": "Spanien",
            "d": "Schweiz"
        },
        "to": {
            "a": "Hungary",
            "b": "Portugal",
            "c": "Spain",
            "d": "Switzerland"
        },
        "a": "d",
        "r": "The correct answer is 'Schweiz' because Switzerland is a neighboring country of Germany."
    },
    {
        "qNum": 223,
        "q": "Welches Land ist ein Nachbarland von Deutschland?",
        "tq": "Which country is a neighboring country of Germany?",
        "o": {
            "a": "Rumänien",
            "b": "Bulgarien",
            "c": "Polen",
            "d": "Griechenland"
        },
        "to": {
            "a": "Romania",
            "b": "Bulgaria",
            "c": "Poland",
            "d": "Greece"
        },
        "a": "c",
        "r": "The correct answer is 'Polen' because Poland is a neighboring country of Germany."
    },
    {
        "qNum": 224,
        "q": "Was bedeutet die Abkürzung EU?",
        "tq": "What does the abbreviation EU mean?",
        "o": {
            "a": "Europäische Unternehmen",
            "b": "Europäische Union",
            "c": "Einheitliche Union",
            "d": "Euro Union"
        },
        "to": {
            "a": "European companies",
            "b": "European Union",
            "c": "Uniform Union",
            "d": "Euro Union"
        },
        "a": "b",
        "r": "The correct answer is 'Europäische Union' because EU stands for Europäische Union (European Union)."
    },
    {
        "qNum": 225,
        "q": "In welchem anderen Land gibt es eine große deutschsprachige Bevölkerung?",
        "tq": "In which other country is there a large German-speaking population?",
        "o": {
            "a": "Tschechien",
            "b": "Norwegen",
            "c": "Spanien",
            "d": "Österreich"
        },
        "to": {
            "a": "Czech Republic",
            "b": "Norway",
            "c": "Spain",
            "d": "Austria"
        },
        "a": "d",
        "r": "The correct answer is 'Österreich' because Austria has a large German-speaking population; German is the official language of Austria."
    },
    {
        "qNum": 226,
        "image": "226.png",
        "q": "Welche ist die Flagge der Europäischen Union?",
        "tq": "Which is the flag of the European Union?",
        "o": {
            "a": "Bild 1",
            "b": "Bild 2",
            "c": "Bild 3",
            "d": "Bild 4"
        },
        "to": {
            "a": "Image 1",
            "b": "Image 2",
            "c": "Image 3",
            "d": "Image 4"
        },
        "a": "b",
        "r": "The correct answer is 'Bild 2' because Image 2 shows the flag of the European Union, which consists of a circle of 12 golden stars on a blue background."
    },
    {
        "qNum": 227,
        "q": "Welches Land ist ein Nachbarland von Deutschland?",
        "tq": "Which country is a neighboring country of Germany?",
        "o": {
            "a": "Finnland",
            "b": "Dänemark",
            "c": "Norwegen",
            "d": "Schweden"
        },
        "to": {
            "a": "Finland",
            "b": "Denmark",
            "c": "Norway",
            "d": "Sweden"
        },
        "a": "b",
        "r": "The correct answer is 'Dänemark' because Denmark is a neighboring country of Germany."
    },
    {
        "qNum": 228,
        "q": "Wie wird der Beitritt der DDR zur Bundesrepublik Deutschland im Jahr 1990 allgemein genannt?",
        "tq": "What is the accession of the GDR to the Federal Republic of Germany in 1990 commonly called?",
        "o": {
            "a": "NATO-Osterweiterung",
            "b": "EU-Osterweiterung",
            "c": "Deutsche Wiedervereinigung",
            "d": "Europäische Gemeinschaft"
        },
        "to": {
            "a": "NATO Eastern Enlargement",
            "b": "EU Eastern Enlargement",
            "c": "German Reunification",
            "d": "European Community"
        },
        "a": "c",
        "r": "The correct answer is 'Deutsche Wiedervereinigung' because the event is commonly known as German Reunification."
    },
    {
        "qNum": 229,
        "q": "Welches Land ist ein Nachbarland von Deutschland?",
        "tq": "Which country is a neighboring country of Germany?",
        "o": {
            "a": "Spanien",
            "b": "Bulgarien",
            "c": "Norwegen",
            "d": "Luxemburg"
        },
        "to": {
            "a": "Spain",
            "b": "Bulgaria",
            "c": "Norway",
            "d": "Luxembourg"
        },
        "a": "d",
        "r": "The correct answer is 'Luxemburg' because Luxembourg is a neighboring country of Germany."
    },
    {
        "qNum": 230,
        "q": "Das Europäische Parlament wird regelmäßig gewählt, nämlich alle …",
        "tq": "The European Parliament is elected regularly, namely every …",
        "o": {
            "a": "5 Jahre.",
            "b": "6 Jahre.",
            "c": "7 Jahre.",
            "d": "8 Jahre."
        },
        "to": {
            "a": "5 years.",
            "b": "6 years.",
            "c": "7 years.",
            "d": "8 years."
        },
        "a": "a",
        "r": "The correct answer is '5 Jahre.' because elections to the European Parliament are held every 5 years."
    },
    {
        "qNum": 231,
        "q": "Was bedeutet der Begriff 'europäische Integration'?",
        "tq": "What does the term 'European integration' mean?",
        "o": {
            "a": "Damit sind amerikanische Einwanderinnen und Einwanderer in Europa gemeint.",
            "b": "Der Begriff meint den Einwanderungsstopp nach Europa.",
            "c": "Damit sind europäische Auswanderinnen und Auswanderer in den USA gemeint.",
            "d": "Der Begriff meint den Zusammenschluss europäischer Staaten zur EU."
        },
        "to": {
            "a": "This refers to American immigrants in Europe.",
            "b": "The term means the immigration stop to Europe.",
            "c": "This refers to European emigrants in the USA.",
            "d": "The term means the merger of European states to form the EU."
        },
        "a": "d",
        "r": "The correct answer is 'Der Begriff meint den Zusammenschluss europäischer Staaten zur EU.' because European integration refers to the process of European states coming together to form the European Union (EU)."
    },
    {
        "qNum": 232,
        "q": "Wer wird bei der Europawahl gewählt?",
        "tq": "Who is elected in the European elections?",
        "o": {
            "a": "die Europäische Kommission",
            "b": "die Länder, die in die EU eintreten dürfen",
            "c": "die Abgeordneten des Europäischen Parlaments",
            "d": "die europäische Verfassung"
        },
        "to": {
            "a": "the European Commission",
            "b": "the countries that are allowed to join the EU",
            "c": "the members of the European Parliament",
            "d": "the European constitution"
        },
        "a": "c",
        "r": "The correct answer is 'die Abgeordneten des Europäischen Parlaments' because the European elections are held to elect the members of the European Parliament."
    },
    {
        "qNum": 233,
        "q": "Welches Land ist ein Nachbarland von Deutschland?",
        "tq": "Which country is a neighboring country of Germany?",
        "o": {
            "a": "Tschechien",
            "b": "Bulgarien",
            "c": "Griechenland",
            "d": "Portugal"
        },
        "to": {
            "a": "Czech Republic",
            "b": "Bulgaria",
            "c": "Greece",
            "d": "Portugal"
        },
        "a": "a",
        "r": "The correct answer is 'Tschechien' because the Czech Republic is a neighboring country of Germany."
    },
    {
        "qNum": 234,
        "q": "Wo ist ein Sitz des Europäischen Parlaments?",
        "tq": "Where is a seat of the European Parliament?",
        "o": {
            "a": "London",
            "b": "Paris",
            "c": "Berlin",
            "d": "Straßburg"
        },
        "to": {
            "a": "London",
            "b": "Paris",
            "c": "Berlin",
            "d": "Strasbourg"
        },
        "a": "d",
        "r": "The correct answer is 'Straßburg' because Strasbourg, France, is one of the official seats of the European Parliament."
    },
    {
        "qNum": 235,
        "q": "Der damalige französische Staatspräsident François Mitterrand und der damalige deutsche Bundeskanzler Helmut Kohl gedenken in Verdun gemeinsam der Toten beider Weltkriege. Welches Ziel der Europäischen Union wird bei diesem Treffen deutlich?",
        "tq": "The then French President François Mitterrand and the then German Chancellor Helmut Kohl commemorate the dead of both world wars together in Verdun. Which goal of the European Union becomes clear at this meeting?",
        "o": {
            "a": "Freundschaft zwischen England und Deutschland",
            "b": "Reisefreiheit in alle Länder der EU",
            "c": "Frieden und Sicherheit in den Ländern der EU",
            "d": "einheitliche Feiertage in den Ländern der EU"
        },
        "to": {
            "a": "Friendship between England and Germany",
            "b": "Freedom to travel to all EU countries",
            "c": "Peace and security in the EU countries",
            "d": "Uniform public holidays in the EU countries"
        },
        "a": "c",
        "r": "The correct answer is 'Frieden und Sicherheit in den Ländern der EU' because the meeting in Verdun symbolized the EU's goal of fostering peace and security among European nations."
    },
    {
        "qNum": 236,
        "q": "Wie viele Mitgliedstaaten hat die EU heute?",
        "tq": "How many member states does the EU have today?",
        "o": {
            "a": "21",
            "b": "23",
            "c": "25",
            "d": "27"
        },
        "to": {
            "a": "21",
            "b": "23",
            "c": "25",
            "d": "27"
        },
        "a": "d",
        "r": "The correct answer is '27' because the EU currently has 27 member states."
    },
    {
        "qNum": 237,
        "q": "2007 wurde das 50-jährige Jubiläum der 'Römischen Verträge' gefeiert. Was war der Inhalt der Verträge?",
        "tq": "In 2007 the 50th anniversary of the 'Treaties of Rome' was celebrated. What was the content of the treaties?",
        "o": {
            "a": "Beitritt Deutschlands zur NATO",
            "b": "Gründung der Europäischen Wirtschaftsgemeinschaft (EWG)",
            "c": "Verpflichtung Deutschlands zu Reparationsleistungen",
            "d": "Festlegung der Oder-Neiße-Linie als Ostgrenze"
        },
        "to": {
            "a": "Germany's accession to NATO",
            "b": "Establishment of the European Economic Community (EEC)",
            "c": "Germany's commitment to reparations",
            "d": "Determination of the Oder-Neisse line as the eastern border"
        },
        "a": "b",
        "r": "The correct answer is 'Gründung der Europäischen Wirtschaftsgemeinschaft (EWG)' because the Treaties of Rome established the European Economic Community (EWG), a predecessor to the European Union."
    },
    {
        "qNum": 238,
        "q": "An welchen Orten arbeitet das Europäische Parlament?",
        "tq": "In which places does the European Parliament work?",
        "o": {
            "a": "Paris, London und Den Haag",
            "b": "Straßburg, Luxemburg und Brüssel",
            "c": "Rom, Bern und Wien",
            "d": "Bonn, Zürich und Mailand"
        },
        "to": {
            "a": "Paris, London and The Hague",
            "b": "Strasbourg, Luxembourg and Brussels",
            "c": "Rome, Bern and Vienna",
            "d": "Bonn, Zurich and Milan"
        },
        "a": "b",
        "r": "The correct answer is 'Straßburg, Luxemburg und Brüssel' because the European Parliament has its official seats in Strasbourg (France), Luxembourg, and Brussels (Belgium)."
    },
    {
        "qNum": 239,
        "q": "Durch welche Verträge schloss sich die Bundesrepublik Deutschland mit anderen Staaten zur Europäischen Wirtschaftsgemeinschaft zusammen?",
        "tq": "Through which treaties did the Federal Republic of Germany unite with other states to form the European Economic Community?",
        "o": {
            "a": "durch die 'Hamburger Verträge'",
            "b": "durch die 'Römischen Verträge'",
            "c": "durch die 'Pariser Verträge'",
            "d": "durch die 'Londoner Verträge'"
        },
        "to": {
            "a": "through the 'Hamburg Treaties'",
            "b": "through the 'Treaties of Rome'",
            "c": "through the 'Paris Treaties'",
            "d": "through the 'London Treaties'"
        },
        "a": "b",
        "r": "The correct answer is 'durch die 'Römischen Verträge'' because the Federal Republic of Germany and other states formed the European Economic Community (EWG) through the Treaties of Rome."
    },
    {
        "qNum": 240,
        "q": "Seit wann bezahlt man in Deutschland mit dem Euro in bar?",
        "tq": "Since when has the euro been used as cash in Germany?",
        "o": {
            "a": "1995",
            "b": "1998",
            "c": "2002",
            "d": "2005"
        },
        "to": {
            "a": "1995",
            "b": "1998",
            "c": "2002",
            "d": "2005"
        },
        "a": "c",
        "r": "The correct answer is '2002' because the euro was introduced as cash in Germany in 2002."
    },
    {
        "qNum": 241,
        "q": "Frau Seger bekommt ein Kind. Was muss sie tun, um Elterngeld zu erhalten?",
        "tq": "Ms. Seger is having a child. What does she have to do to receive parental allowance?",
        "o": {
            "a": "Sie muss an ihre Krankenkasse schreiben.",
            "b": "Sie muss einen Antrag bei der Elterngeldstelle stellen.",
            "c": "Sie muss nichts tun, denn sie bekommt automatisch Elterngeld.",
            "d": "Sie muss das Arbeitsamt um Erlaubnis bitten."
        },
        "to": {
            "a": "She has to write to her health insurance company.",
            "b": "She has to apply to the parental allowance office.",
            "c": "She doesn't have to do anything because she automatically receives parental allowance.",
            "d": "She has to ask the employment office for permission."
        },
        "a": "b",
        "r": "The correct answer is 'Sie muss einen Antrag bei der Elterngeldstelle stellen.' because to receive parental allowance, you have to submit an application to the Elterngeldstelle (parental allowance office)."
    },
    {
        "qNum": 242,
        "q": "Wer entscheidet, ob ein Kind in Deutschland in den Kindergarten geht?",
        "tq": "Who decides whether a child in Germany goes to kindergarten?",
        "o": {
            "a": "der Staat",
            "b": "die Bundesländer",
            "c": "die Eltern/die Erziehungsberechtigten",
            "d": "die Schulen"
        },
        "to": {
            "a": "the state",
            "b": "the federal states",
            "c": "the parents/guardians",
            "d": "the schools"
        },
        "a": "c",
        "r": "The correct answer is 'die Eltern/die Erziehungsberechtigten' because in Germany, the decision of whether a child attends kindergarten is primarily made by the parents or guardians."
    },
    {
        "qNum": 243,
        "q": "Maik und Sybille wollen mit Freunden an ihrem deutschen Wohnort eine Demonstration auf der Straße abhalten. Was müssen sie vorher tun?",
        "tq": "Maik and Sybille want to hold a demonstration on the street with friends in their German hometown. What do they have to do beforehand?",
        "o": {
            "a": "Sie müssen die Demonstration anmelden.",
            "b": "Sie müssen nichts tun. Man darf in Deutschland jederzeit überall demonstrieren.",
            "c": "Sie können gar nichts tun, denn Demonstrationen sind in Deutschland grundsätzlich verboten.",
            "d": "Maik und Sybille müssen einen neuen Verein gründen, weil nur Vereine demonstrieren dürfen."
        },
        "to": {
            "a": "They have to register the demonstration.",
            "b": "They don't have to do anything. You can demonstrate anywhere in Germany at any time.",
            "c": "They can't do anything because demonstrations are fundamentally prohibited in Germany.",
            "d": "Maik and Sybille have to found a new association because only associations are allowed to demonstrate."
        },
        "a": "a",
        "r": "The correct answer is 'Sie müssen die Demonstration anmelden.' because in Germany, demonstrations must be registered with the authorities in advance."
    },
    {
        "qNum": 244,
        "q": "Welchen Schulabschluss braucht man normalerweise, um an einer Universität in Deutschland ein Studium zu beginnen?",
        "tq": "What school leaving certificate do you normally need to start studying at a university in Germany?",
        "o": {
            "a": "das Abitur",
            "b": "ein Diplom",
            "c": "die Prokura",
            "d": "eine Gesellenprüfung"
        },
        "to": {
            "a": "the Abitur",
            "b": "a diploma",
            "c": "the Prokura",
            "d": "a journeyman's examination"
        },
        "a": "a",
        "r": "The correct answer is 'das Abitur' because the Abitur (general higher education entrance qualification) is the school leaving certificate typically required to begin studies at a university in Germany."
    },
    {
        "qNum": 245,
        "q": "Wer darf in Deutschland nicht als Paar zusammenleben?",
        "tq": "Who is not allowed to live together as a couple in Germany?",
        "o": {
            "a": "Hans (20 Jahre) und Marie (19 Jahre)",
            "b": "Tom (20 Jahre) und Klaus (45 Jahre)",
            "c": "Sofie (35 Jahre) und Lisa (40 Jahre)",
            "d": "Anne (13 Jahre) und Tim (25 Jahre)"
        },
        "to": {
            "a": "Hans (20 years) and Marie (19 years)",
            "b": "Tom (20 years) and Klaus (45 years)",
            "c": "Sofie (35 years) and Lisa (40 years)",
            "d": "Anne (13 years) and Tim (25 years)"
        },
        "a": "d",
        "r": "The correct answer is 'Anne (13 Jahre) und Tim (25 Jahre)' because in Germany, relationships where one person is under the age of 16 are illegal due to laws protecting minors."
    },
    {
        "qNum": 246,
        "q": "Ab welchem Alter ist man in Deutschland volljährig?",
        "tq": "From what age are you considered an adult in Germany?",
        "o": {
            "a": "16",
            "b": "18",
            "c": "19",
            "d": "21"
        },
        "to": {
            "a": "16",
            "b": "18",
            "c": "19",
            "d": "21"
        },
        "a": "b",
        "r": "The correct answer is '18' because you are considered an adult (volljährig) in Germany from the age of 18."
    },
    {
        "qNum": 247,
        "q": "Eine Frau ist schwanger. Sie ist kurz vor und nach der Geburt ihres Kindes vom Gesetz besonders beschützt. Wie heißt dieser Schutz?",
        "tq": "A woman is pregnant. She is particularly protected by law shortly before and after the birth of her child. What is this protection called?",
        "o": {
            "a": "Elternzeit",
            "b": "Mutterschutz",
            "c": "Geburtsvorbereitung",
            "d": "Wochenbett"
        },
        "to": {
            "a": "parental leave",
            "b": "maternity protection",
            "c": "childbirth preparation",
            "d": "postpartum period"
        },
        "a": "b",
        "r": "The correct answer is 'Mutterschutz' because Mutterschutz (maternity protection) is the legal protection for pregnant women and new mothers in Germany."
    },
    {
        "qNum": 248,
        "q": "Die Erziehung der Kinder ist in Deutschland ist vor allem Aufgabe …",
        "tq": "The upbringing of children in Germany is primarily the responsibility of …",
        "o": {
            "a": "des Staates.",
            "b": "der Eltern.",
            "c": "der Großeltern.",
            "d": "der Schulen."
        },
        "to": {
            "a": "the state.",
            "b": "the parents.",
            "c": "the grandparents.",
            "d": "the schools."
        },
        "a": "b",
        "r": "The correct answer is 'der Eltern.' because in Germany, the upbringing of children is primarily the responsibility of the parents."
    },
    {
        "qNum": 249,
        "q": "Wer ist in Deutschland hauptsächlich verantwortlich für die Kindererziehung?",
        "tq": "Who is mainly responsible for raising children in Germany?",
        "o": {
            "a": "der Staat",
            "b": "die Eltern",
            "c": "die Verwandten",
            "d": "die Schulen"
        },
        "to": {
            "a": "the state",
            "b": "the parents",
            "c": "the relatives",
            "d": "the schools"
        },
        "a": "b",
        "r": "The correct answer is 'die Eltern' because parents are primarily responsible for raising children in Germany."
    },
    {
        "qNum": 250,
        "q": "In Deutschland hat man die besten Chancen auf einen gut bezahlten Arbeitsplatz, wenn man …",
        "tq": "In Germany, you have the best chance of getting a well-paid job if you …",
        "o": {
            "a": "katholisch ist.",
            "b": "gut ausgebildet ist.",
            "c": "eine Frau ist.",
            "d": "Mitglied einer Partei ist."
        },
        "to": {
            "a": "is Catholic.",
            "b": "is well-educated.",
            "c": "is a woman.",
            "d": "is a member of a party."
        },
        "a": "b",
        "r": "The correct answer is 'gut ausgebildet ist.' because in Germany, good education and qualifications significantly increase the chances of securing a well-paid job."
    },
    {
        "qNum": 251,
        "q": "Wenn man in Deutschland ein Kind schlägt, …",
        "tq": "If you hit a child in Germany, …",
        "o": {
            "a": "geht das niemanden etwas an.",
            "b": "geht das nur die Familie etwas an.",
            "c": "kann man dafür nicht bestraft werden.",
            "d": "kann man dafür bestraft werden."
        },
        "to": {
            "a": "it's nobody's business.",
            "b": "it's only the family's business.",
            "c": "you cannot be punished for it.",
            "d": "you can be punished for it."
        },
        "a": "d",
        "r": "The correct answer is 'kann man dafür bestraft werden.' because physical punishment of children is illegal in Germany and can lead to legal consequences."
    },
    {
        "qNum": 252,
        "q": "In Deutschland …",
        "tq": "In Germany …",
        "o": {
            "a": "darf man zur gleichen Zeit nur mit einer Partnerin/einem Partner verheiratet sein.",
            "b": "kann man mehrere Ehepartnerinnen/Ehepartner gleichzeitig haben.",
            "c": "darf man nicht wieder heiraten, wenn man einmal verheiratet war.",
            "d": "darf eine Frau nicht wieder heiraten, wenn ihr Mann gestorben ist."
        },
        "to": {
            "a": "you can only be married to one partner at a time.",
            "b": "you can have several spouses at the same time.",
            "c": "you are not allowed to marry again if you have been married once.",
            "d": "a woman is not allowed to marry again if her husband has died."
        },
        "a": "a",
        "r": "The correct answer is 'darf man zur gleichen Zeit nur mit einer Partnerin/einem Partner verheiratet sein.' because monogamy is the only legally recognized form of marriage in Germany."
    },
    {
        "qNum": 253,
        "q": "Wo müssen Sie sich anmelden, wenn Sie in Deutschland umziehen?",
        "tq": "Where do you have to register if you move in Germany?",
        "o": {
            "a": "beim Einwohnermeldeamt",
            "b": "beim Standesamt",
            "c": "beim Ordnungsamt",
            "d": "beim Gewerbeamt"
        },
        "to": {
            "a": "at the registration office",
            "b": "at the registry office",
            "c": "at the public order office",
            "d": "at the trade office"
        },
        "a": "a",
        "r": "The correct answer is 'beim Einwohnermeldeamt' because you have to register your new address at the Einwohnermeldeamt (residents' registration office) when you move in Germany."
    },
    {
        "qNum": 254,
        "q": "In Deutschland dürfen Ehepaare sich scheiden lassen. Meistens müssen sie dazu das 'Trennungsjahr' einhalten. Was bedeutet das?",
        "tq": "In Germany, married couples are allowed to divorce. Usually, they have to observe the 'year of separation.' What does that mean?",
        "o": {
            "a": "Der Scheidungsprozess dauert ein Jahr.",
            "b": "Die Ehegatten sind ein Jahr verheiratet, dann ist die Scheidung möglich.",
            "c": "Das Besuchsrecht für die Kinder gilt ein Jahr.",
            "d": "Die Ehegatten führen mindestens ein Jahr getrennt ihr eigenes Leben. Danach ist die Scheidung möglich."
        },
        "to": {
            "a": "The divorce process takes a year.",
            "b": "The spouses are married for one year, then divorce is possible.",
            "c": "The right of access to the children applies for one year.",
            "d": "The spouses live separately for at least one year. Divorce is possible after that."
        },
        "a": "d",
        "r": "The correct answer is 'Die Ehegatten führen mindestens ein Jahr getrennt ihr eigenes Leben. Danach ist die Scheidung möglich.' because the Trennungsjahr (year of separation) is a mandatory period of separate living before a divorce can be finalized in Germany."
    },
    {
        "qNum": 255,
        "q": "Bei Erziehungsproblemen können Eltern in Deutschland Hilfe erhalten vom …",
        "tq": "In Germany, parents can get help with parenting problems from the …",
        "o": {
            "a": "Ordnungsamt.",
            "b": "Schulamt.",
            "c": "Jugendamt.",
            "d": "Gesundheitsamt."
        },
        "to": {
            "a": "public order office.",
            "b": "school authority.",
            "c": "youth welfare office.",
            "d": "health department."
        },
        "a": "c",
        "r": "The correct answer is 'Jugendamt.' because the Jugendamt (youth welfare office) provides support and assistance to parents with parenting problems."
    },
    {
        "qNum": 256,
        "q": "Ein Ehepaar möchte in Deutschland ein Restaurant eröffnen. Was braucht es dazu unbedingt?",
        "tq": "A married couple wants to open a restaurant in Germany. What do they absolutely need for this?",
        "o": {
            "a": "eine Erlaubnis der Polizei",
            "b": "eine Genehmigung einer Partei",
            "c": "eine Genehmigung des Einwohnermeldeamts",
            "d": "eine Gaststättenerlaubnis von der zuständigen Behörde"
        },
        "to": {
            "a": "a permit from the police",
            "b": "approval from a party",
            "c": "approval from the residents' registration office",
            "d": "a restaurant permit from the responsible authority"
        },
        "a": "d",
        "r": "The correct answer is 'eine Gaststättenerlaubnis von der zuständigen Behörde' because a Gaststättenerlaubnis (restaurant permit) from the relevant authority is mandatory to open a restaurant in Germany."
    },
    {
        "qNum": 257,
        "q": "Eine erwachsene Frau möchte in Deutschland das Abitur nachholen. Das kann sie an …",
        "tq": "An adult woman wants to get her Abitur in Germany. She can do that at a/an …",
        "o": {
            "a": "einer Hochschule.",
            "b": "einem Abendgymnasium.",
            "c": "einer Hauptschule.",
            "d": "einer Privatuniversität."
        },
        "to": {
            "a": "university.",
            "b": "evening grammar school.",
            "c": "secondary school.",
            "d": "private university."
        },
        "a": "b",
        "r": "The correct answer is 'einem Abendgymnasium.' because an Abendgymnasium (evening grammar school) is a common institution where adults can obtain their Abitur."
    },
    {
        "qNum": 258,
        "q": "Was darf das Jugendamt in Deutschland?",
        "tq": "What is the youth welfare office allowed to do in Germany?",
        "o": {
            "a": "Es entscheidet, welche Schule das Kind besucht.",
            "b": "Es kann ein Kind, das geschlagen wird oder hungern muss, aus der Familie nehmen.",
            "c": "Es bezahlt das Kindergeld an die Eltern.",
            "d": "Es kontrolliert, ob das Kind einen Kindergarten besucht."
        },
        "to": {
            "a": "It decides which school the child attends.",
            "b": "It can take a child who is beaten or starving out of the family.",
            "c": "It pays the child benefit to the parents.",
            "d": "It checks whether the child attends a kindergarten."
        },
        "a": "b",
        "r": "The correct answer is 'Es kann ein Kind, das geschlagen wird oder hungern muss, aus der Familie nehmen.' because the Jugendamt (youth welfare office) is authorized to remove a child from a family in cases of abuse or neglect to ensure the child's safety and well-being."
    },
    {
        "qNum": 259,
        "q": "Das Berufsinformationszentrum BIZ bei der Bundesagentur für Arbeit in Deutschland hilft bei der …",
        "tq": "The BIZ (career information center) at the Federal Employment Agency in Germany helps with …",
        "o": {
            "a": "Rentenberechnung.",
            "b": "Lehrstellensuche.",
            "c": "Steuererklärung.",
            "d": "Krankenversicherung."
        },
        "to": {
            "a": "pension calculation.",
            "b": "apprenticeship search.",
            "c": "tax return.",
            "d": "health insurance."
        },
        "a": "b",
        "r": "The correct answer is 'Lehrstellensuche.' because the BIZ (Berufsinformationszentrum) assists with career information and job/apprenticeship search."
    },
    {
        "qNum": 260,
        "q": "In Deutschland hat ein Kind in der Schule …",
        "tq": "In Germany, a child has … in school",
        "o": {
            "a": "Recht auf unbegrenzte Freizeit.",
            "b": "Wahlfreiheit für alle Fächer.",
            "c": "Anspruch auf Schulgeld.",
            "d": "Anwesenheitspflicht."
        },
        "to": {
            "a": "right to unlimited free time.",
            "b": "freedom of choice for all subjects.",
            "c": "entitlement to school fees.",
            "d": "compulsory attendance."
        },
        "a": "d",
        "r": "The correct answer is 'Anwesenheitspflicht.' because there is compulsory school attendance in Germany."
    },
    {
        "qNum": 261,
        "q": "Ein Mann möchte mit 30 Jahren in Deutschland sein Abitur nachholen. Wo kann er das tun?",
        "tq": "A man wants to get his Abitur at the age of 30 in Germany. Where can he do that?",
        "o": {
            "a": "An … einer Hochschule.",
            "b": "einem Abendgymnasium.",
            "c": "einer Hauptschule.",
            "d": "einer Privatuniversität."
        },
        "to": {
            "a": "At a … university.",
            "b": "evening grammar school.",
            "c": "secondary school.",
            "d": "private university."
        },
        "a": "b",
        "r": "The correct answer is 'einem Abendgymnasium.' because an Abendgymnasium is designed for adults to obtain the Abitur."
    },
    {
        "qNum": 262,
        "q": "Was bedeutet in Deutschland der Grundsatz der Gleichbehandlung?",
        "tq": "What does the principle of equal treatment mean in Germany?",
        "o": {
            "a": "Niemand darf z.B. wegen einer Behinderung benachteiligt werden.",
            "b": "Man darf andere Personen benachteiligen, wenn ausreichende persönliche Gründe hierfür vorliegen.",
            "c": "Niemand darf gegen Personen klagen, wenn sie benachteiligt wurden.",
            "d": "Es ist für alle Gesetz, benachteiligten Gruppen jährlich Geld zu spenden."
        },
        "to": {
            "a": "No one may be disadvantaged, e.g. because of a disability.",
            "b": "You may discriminate against other people if there are sufficient personal reasons for doing so.",
            "c": "No one is allowed to sue people if they have been discriminated against.",
            "d": "It is a law for everyone to donate money to disadvantaged groups every year."
        },
        "a": "a",
        "r": "The correct answer is 'Niemand darf z.B. wegen einer Behinderung benachteiligt werden.' because the principle of equal treatment prohibits discrimination based on factors like disability, gender, race, etc."
    },
    {
        "qNum": 263,
        "q": "In Deutschland sind Jugendliche ab 14 Jahren strafmündig. Das bedeutet: Jugendliche, die 14 Jahre und älter sind und gegen Strafgesetze verstoßen, …",
        "tq": "In Germany, young people are criminally responsible from the age of 14. This means: young people who are 14 years and older and violate criminal laws, …",
        "o": {
            "a": "werden bestraft.",
            "b": "werden wie Erwachsene behandelt.",
            "c": "teilen die Strafe mit ihren Eltern.",
            "d": "werden nicht bestraft."
        },
        "to": {
            "a": "are punished.",
            "b": "are treated like adults.",
            "c": "share the punishment with their parents.",
            "d": "are not punished."
        },
        "a": "a",
        "r": "The correct answer is 'werden bestraft.' because young people aged 14 and older are criminally responsible and can be punished according to juvenile law."
    },
    {
        "qNum": 264,
        "q": "Zu welchem Fest tragen Menschen in Deutschland bunte Kostüme und Masken?",
        "tq": "At which festival do people in Germany wear colorful costumes and masks?",
        "o": {
            "a": "am Rosenmontag",
            "b": "am Maifeiertag",
            "c": "beim Oktoberfest",
            "d": "an Pfingsten"
        },
        "to": {
            "a": "on Rose Monday",
            "b": "on May Day",
            "c": "at the Oktoberfest",
            "d": "at Pentecost"
        },
        "a": "a",
        "r": "The correct answer is 'am Rosenmontag' because people wear colorful costumes and masks during Carnival, with Rose Monday being a significant day of celebration."
    },
    {
        "qNum": 265,
        "q": "Wohin muss man in Deutschland zuerst gehen, wenn man heiraten möchte?",
        "tq": "Where do you first have to go in Germany if you want to get married?",
        "o": {
            "a": "zum Einwohnermeldeamt",
            "b": "zum Ordnungsamt",
            "c": "zur Agentur für Arbeit",
            "d": "zum Standesamt"
        },
        "to": {
            "a": "to the residents' registration office",
            "b": "to the public order office",
            "c": "to the employment agency",
            "d": "to the registry office"
        },
        "a": "d",
        "r": "The correct answer is 'zum Standesamt' because you must first go to the Standesamt (registry office) to register your marriage in Germany."
    },
    {
        "qNum": 266,
        "q": "Wann beginnt die gesetzliche Nachtruhe in Deutschland?",
        "tq": "When does the legal night's rest begin in Germany?",
        "o": {
            "a": "wenn die Sonne untergeht",
            "b": "wenn die Nachbarn schlafen gehen",
            "c": "um 0 Uhr, Mitternacht",
            "d": "um 22 Uhr"
        },
        "to": {
            "a": "when the sun goes down",
            "b": "when the neighbors go to sleep",
            "c": "at 0 a.m., midnight",
            "d": "at 10 p.m."
        },
        "a": "d",
        "r": "The correct answer is 'um 22 Uhr' because the legal night's rest (Nachtruhe) in Germany typically begins at 10 p.m."
    },
    {
        "qNum": 267,
        "q": "Eine junge Frau in Deutschland, 22 Jahre alt, lebt mit ihrem Freund zusammen. Die Eltern der Frau finden das nicht gut, weil ihnen der Freund nicht gefällt. Was können die Eltern tun?",
        "tq": "A young woman in Germany, 22 years old, lives with her boyfriend. The woman's parents don't like this because they don't like the boyfriend. What can the parents do?",
        "o": {
            "a": "Sie müssen die Entscheidung der volljährigen Tochter respektieren.",
            "b": "Sie haben das Recht, die Tochter in die elterliche Wohnung zurückzuholen.",
            "c": "Sie können zur Polizei gehen und die Tochter anzeigen.",
            "d": "Sie suchen einen anderen Mann für die Tochter."
        },
        "to": {
            "a": "They have to respect the decision of their adult daughter.",
            "b": "They have the right to bring their daughter back to the parental home.",
            "c": "They can go to the police and report their daughter.",
            "d": "They are looking for another man for their daughter."
        },
        "a": "a",
        "r": "The correct answer is 'Sie müssen die Entscheidung der volljährigen Tochter respektieren.' because in Germany, adults have the right to make their own decisions about their personal relationships."
    },
    {
        "qNum": 268,
        "q": "Eine junge Frau will den Führerschein machen. Sie hat Angst vor der Prüfung, weil ihre Muttersprache nicht Deutsch ist. Was ist richtig?",
        "tq": "A young woman wants to get her driver's license. She is afraid of the test because her native language is not German. What is correct?",
        "o": {
            "a": "Sie muss mindestens zehn Jahre in Deutschland leben, bevor sie den Führerschein machen kann.",
            "b": "Wenn sie kein Deutsch kann, darf sie keinen Führerschein haben.",
            "c": "Sie muss den Führerschein in dem Land machen, in dem man ihre Sprache spricht.",
            "d": "Sie kann die Theorie-Prüfung vielleicht in ihrer Muttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl."
        },
        "to": {
            "a": "She has to live in Germany for at least ten years before she can get her driver's license.",
            "b": "If she can't speak German, she's not allowed to have a driver's license.",
            "c": "She has to get her driver's license in the country where her language is spoken.",
            "d": "She may be able to take the theory test in her native language. There are more than ten languages to choose from."
        },
        "a": "d",
        "r": "The correct answer is 'Sie kann die Theorie-Prüfung vielleicht in ihrer Muttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl.' because in Germany, it is possible to take the theory test for a driver's license in several languages other than German."
    },
    {
        "qNum": 269,
        "q": "In Deutschland haben Kinder ab dem Alter von drei Jahren bis zur Ersteinschulung einen Anspruch auf …",
        "tq": "In Germany, children from the age of three until they start school have a right to …",
        "o": {
            "a": "monatliches Taschengeld.",
            "b": "einen Platz in einem Sportverein.",
            "c": "einen Kindergartenplatz.",
            "d": "einen Ferienpass."
        },
        "to": {
            "a": "monthly pocket money.",
            "b": "a place in a sports club.",
            "c": "a place in kindergarten.",
            "d": "a holiday pass."
        },
        "a": "c",
        "r": "The correct answer is 'einen Kindergartenplatz.' because in Germany, children have a legal right to a place in a kindergarten from the age of three until they start school."
    },
    {
        "qNum": 270,
        "q": "Die Volkshochschule in Deutschland ist eine Einrichtung …",
        "tq": "The Volkshochschule in Germany is an institution …",
        "o": {
            "a": "für den Religionsunterricht.",
            "b": "nur für Jugendliche.",
            "c": "zur Weiterbildung.",
            "d": "nur für Rentnerinnen und Rentner."
        },
        "to": {
            "a": "for religious instruction.",
            "b": "only for young people.",
            "c": "for further education.",
            "d": "only for pensioners."
        },
        "a": "c",
        "r": "The correct answer is 'zur Weiterbildung.' because the Volkshochschule is an adult education center that offers courses for further education."
    },
    {
        "qNum": 271,
        "q": "Was ist in Deutschland ein Brauch zu Weihnachten?",
        "tq": "What is a custom at Christmas in Germany?",
        "o": {
            "a": "bunte Eier verstecken",
            "b": "einen Tannenbaum schmücken",
            "c": "sich mit Masken und Kostümen verkleiden",
            "d": "Kürbisse vor die Tür stellen"
        },
        "to": {
            "a": "to hide colored eggs",
            "b": "to decorate a Christmas tree",
            "c": "to dress up in masks and costumes",
            "d": "to put pumpkins in front of the door"
        },
        "a": "b",
        "r": "The correct answer is 'einen Tannenbaum schmücken.' because decorating a Christmas tree is a common Christmas custom in Germany."
    },
    {
        "qNum": 272,
        "q": "Welche Lebensform ist in Deutschland nicht erlaubt?",
        "tq": "Which way of life is not allowed in Germany?",
        "o": {
            "a": "Mann und Frau sind geschieden und leben mit neuen Partnern zusammen.",
            "b": "Zwei Frauen leben zusammen.",
            "c": "Ein alleinerziehender Vater lebt mit seinen zwei Kindern zusammen.",
            "d": "Ein Mann ist mit zwei Frauen zur selben Zeit verheiratet."
        },
        "to": {
            "a": "A man and woman are divorced and live together with new partners.",
            "b": "Two women live together.",
            "c": "A single father lives with his two children.",
            "d": "A man is married to two women at the same time."
        },
        "a": "d",
        "r": "The correct answer is 'Ein Mann ist mit zwei Frauen zur selben Zeit verheiratet.' because polygamy is not allowed in Germany."
    },
    {
        "qNum": 273,
        "q": "Bei Erziehungsproblemen gehen Sie in Deutschland …",
        "tq": "In Germany you go to … if you have parenting problems.",
        "o": {
            "a": "zur Ärztin/zum Arzt.",
            "b": "zum Gesundheitsamt.",
            "c": "zum Einwohnermeldeamt.",
            "d": "zum Jugendamt."
        },
        "to": {
            "a": "a doctor.",
            "b": "the health department.",
            "c": "the residents' registration office.",
            "d": "the youth welfare office."
        },
        "a": "d",
        "r": "The correct answer is 'zum Jugendamt.' because the Jugendamt (youth welfare office) is the primary agency for assisting with parenting problems."
    },
    {
        "qNum": 274,
        "q": "Sie haben in Deutschland absichtlich einen Brief geöffnet, der an eine andere Person adressiert ist. Was haben Sie nicht beachtet?",
        "tq": "In Germany you have deliberately opened a letter addressed to another person. What have you not paid attention to?",
        "o": {
            "a": "das Schweigerecht",
            "b": "das Briefgeheimnis",
            "c": "die Schweigepflicht",
            "d": "die Meinungsfreiheit"
        },
        "to": {
            "a": "the right to remain silent",
            "b": "the privacy of correspondence",
            "c": "the duty of confidentiality",
            "d": "the freedom of expression"
        },
        "a": "b",
        "r": "The correct answer is 'das Briefgeheimnis.' because opening someone else's mail violates the privacy of correspondence (Briefgeheimnis), which is protected by law."
    },
    {
        "qNum": 275,
        "q": "Was braucht man in Deutschland für eine Ehescheidung?",
        "tq": "What do you need for a divorce in Germany?",
        "o": {
            "a": "die Einwilligung der Eltern",
            "b": "ein Attest einer Ärztin/eines Arztes",
            "c": "die Einwilligung der Kinder",
            "d": "die Unterstützung einer Anwältin/eines Anwalts"
        },
        "to": {
            "a": "the consent of the parents",
            "b": "a doctor's certificate",
            "c": "the consent of the children",
            "d": "the support of a lawyer"
        },
        "a": "d",
        "r": "The correct answer is 'die Unterstützung einer Anwältin/eines Anwalts.' because legal representation by a lawyer is generally required for divorce proceedings in Germany."
    },
    {
        "qNum": 276,
        "q": "Was sollten Sie tun, wenn Sie von Ihrer Ansprechpartnerin/Ihrem Ansprechpartner in einer deutschen Behörde schlecht behandelt werden?",
        "tq": "What should you do if you are treated badly by your contact person in a German authority?",
        "o": {
            "a": "Ich kann nichts tun.",
            "b": "Ich muss mir diese Behandlung gefallen lassen.",
            "c": "Ich drohe der Person.",
            "d": "Ich kann mich bei der Behördenleiterin/beim Behördenleiter beschweren."
        },
        "to": {
            "a": "I can't do anything.",
            "b": "I have to put up with this treatment.",
            "c": "I threaten the person.",
            "d": "I can complain to the head of the authority."
        },
        "a": "d",
        "r": "The correct answer is 'Ich kann mich bei der Behördenleiterin/beim Behördenleiter beschweren.' because you have the right to complain to the supervisor or head of the authority about mistreatment."
    },
    {
        "qNum": 277,
        "q": "Eine Frau, die ein zweijähriges Kind hat, bewirbt sich in Deutschland um eine Stelle. Was ist ein Beispiel für Diskriminierung? Sie bekommt die Stelle nur deshalb nicht, weil sie …",
        "tq": "A woman who has a two-year-old child applies for a job in Germany. What is an example of discrimination? She doesn't get the job just because she is …",
        "o": {
            "a": "kein Englisch spricht.",
            "b": "zu hohe Gehaltsvorstellungen hat.",
            "c": "keine Erfahrungen in diesem Beruf hat.",
            "d": "Mutter ist."
        },
        "to": {
            "a": "doesn't speak English.",
            "b": "has too high salary expectations.",
            "c": "has no experience in this profession.",
            "d": "is a mother."
        },
        "a": "d",
        "r": "The correct answer is 'Mutter ist.' because denying someone a job solely because they are a mother is a form of discrimination."
    },
    {
        "qNum": 278,
        "q": "Ein Mann im Rollstuhl hat sich auf eine Stelle als Buchhalter beworben. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil er …",
        "tq": "A man in a wheelchair has applied for a job as an accountant. What is an example of discrimination? He doesn't get the job just because he …",
        "o": {
            "a": "im Rollstuhl sitzt.",
            "b": "keine Erfahrung hat.",
            "c": "zu hohe Gehaltsvorstellungen hat.",
            "d": "kein Englisch spricht."
        },
        "to": {
            "a": "is in a wheelchair.",
            "b": "has no experience.",
            "c": "has too high salary expectations.",
            "d": "doesn't speak English."
        },
        "a": "a",
        "r": "The correct answer is 'im Rollstuhl sitzt.' because denying someone a job solely because of their disability (being in a wheelchair) is a form of discrimination."
    },
    {
        "qNum": 279,
        "q": "In den meisten Mietshäusern in Deutschland gibt es eine 'Hausordnung'. Was steht in einer solchen 'Hausordnung'?",
        "tq": "Most apartment buildings in Germany have a 'house rules'. What is in such 'house rules'?",
        "o": {
            "a": "Sie nennt Regeln für die Benutzung öffentlicher Verkehrsmittel.",
            "b": "alle Mieterinnen und Mieter im Haus.",
            "c": "Regeln, an die sich alle Bewohnerinnen und Bewohner halten müssen.",
            "d": "die Adresse des nächsten Ordnungsamtes."
        },
        "to": {
            "a": "It states rules for the use of public transport.",
            "b": "all tenants in the building.",
            "c": "Rules that all residents must adhere to.",
            "d": "the address of the nearest public order office."
        },
        "a": "c",
        "r": "The correct answer is 'Regeln, an die sich alle Bewohnerinnen und Bewohner halten müssen.' because a 'Hausordnung' (house rules) contains rules that all residents must follow to ensure peaceful coexistence."
    },
    {
        "qNum": 280,
        "q": "Wenn Sie sich in Deutschland gegen einen falschen Steuerbescheid wehren wollen, müssen Sie …",
        "tq": "If you want to object to an incorrect tax assessment in Germany, you have to …",
        "o": {
            "a": "nichts machen.",
            "b": "den Bescheid wegwerfen.",
            "c": "Einspruch einlegen.",
            "d": "warten, bis ein anderer Bescheid kommt."
        },
        "to": {
            "a": "do nothing.",
            "b": "throw away the assessment.",
            "c": "lodge an appeal.",
            "d": "wait until another assessment comes."
        },
        "a": "c",
        "r": "The correct answer is 'Einspruch einlegen.' because you must lodge an appeal (Einspruch einlegen) with the tax office to challenge an incorrect tax assessment."
    },
    {
        "qNum": 281,
        "q": "Zwei Freunde wollen in ein öffentliches Schwimmbad in Deutschland. Beide haben eine dunkle Hautfarbe und werden deshalb nicht hineingelassen. Welches Recht wird in dieser Situation verletzt?",
        "tq": "Two friends want to go to a public swimming pool in Germany. Both have dark skin and are therefore not allowed to enter. Which right is violated in this situation?",
        "o": {
            "a": "Das Recht auf Meinungsfreiheit",
            "b": "Gleichbehandlung",
            "c": "Versammlungsfreiheit",
            "d": "Freizügigkeit"
        },
        "to": {
            "a": "The right to freedom of expression",
            "b": "Equal treatment",
            "c": "Freedom of assembly",
            "d": "Freedom of movement"
        },
        "a": "b",
        "r": "The correct answer is 'Gleichbehandlung'. The scenario describes discrimination based on skin color, which directly violates the right to equal treatment."
    },{
        "qNum": 282,
        "q": "Welches Ehrenamt müssen deutsche Staatsbürgerinnen und Staatsbürger übernehmen, wenn sie dazu aufgefordert werden?",
        "tq": "Which voluntary office must German citizens take on if they are asked to do so?",
        "o": {
            "a": "Vereinstrainerin/Vereinstrainer",
            "b": "Wahlhelferin/Wahlhelfer",
            "c": "Bibliotheksaufsicht",
            "d": "Lehrerin/Lehrer"
        },
        "to": {
            "a": "club trainer",
            "b": "election worker",
            "c": "library supervisor",
            "d": "teacher"
        },
        "a": "b",
        "r": "The correct answer is 'Wahlhelferin/Wahlhelfer.' because German citizens may be required to serve as election workers (Wahlhelfer) during elections."
    },
    {
        "qNum": 283,
        "q": "Was tun Sie, wenn Sie eine falsche Rechnung von einer deutschen Behörde bekommen?",
        "tq": "What do you do if you receive an incorrect bill from a German authority?",
        "o": {
            "a": "Ich lasse die Rechnung liegen.",
            "b": "Ich lege Widerspruch bei der Behörde ein.",
            "c": "Ich schicke die Rechnung an die Behörde zurück.",
            "d": "Ich gehe mit der Rechnung zum Finanzamt."
        },
        "to": {
            "a": "I ignore the bill.",
            "b": "I file an objection with the authority.",
            "c": "I send the bill back to the authority.",
            "d": "I go to the tax office with the bill."
        },
        "a": "b",
        "r": "The correct answer is 'Ich lege Widerspruch bei der Behörde ein.' because you should file an objection (Widerspruch einlegen) with the issuing authority if you receive an incorrect bill."
    },
    {
        "qNum": 284,
        "q": "Was man für die Arbeit können muss, ändert sich in Zukunft sehr schnell. Was kann man tun?",
        "tq": "What you need to be able to do for work changes very quickly in the future. What can you do?",
        "o": {
            "a": "Es ist egal, was man lernt.",
            "b": "Erwachsene müssen auch nach der Ausbildung immer weiter lernen.",
            "c": "Kinder lernen in der Schule alles, was im Beruf wichtig ist. Nach der Schule muss man nicht weiter lernen.",
            "d": "Alle müssen früher aufhören zu arbeiten, weil sich alles ändert."
        },
        "to": {
            "a": "It doesn't matter what you learn.",
            "b": "Adults must continue learning even after their training.",
            "c": "Children learn everything that is important in their job at school. You don't have to continue learning after school.",
            "d": "Everyone has to stop working earlier because everything is changing."
        },
        "a": "b",
        "r": "The correct answer is 'Erwachsene müssen auch nach der Ausbildung immer weiter lernen.' because lifelong learning is essential to keep up with rapid changes in the workplace."
    },
    {
        "qNum": 285,
        "q": "Frau Frost arbeitet als fest angestellte Mitarbeiterin in einem Büro. Was muss sie nicht von ihrem Gehalt bezahlen?",
        "tq": "Ms. Frost works as a permanent employee in an office. What does she not have to pay from her salary?",
        "o": {
            "a": "Lohnsteuer",
            "b": "Beiträge zur Arbeitslosenversicherung",
            "c": "Beiträge zur Renten- und Krankenversicherung",
            "d": "Umsatzsteuer"
        },
        "to": {
            "a": "income tax",
            "b": "unemployment insurance contributions",
            "c": "pension and health insurance contributions",
            "d": "sales tax"
        },
        "a": "d",
        "r": "The correct answer is 'Umsatzsteuer' because Umsatzsteuer (sales tax) is paid on goods and services, not directly from an employee's salary. The other options are deductions from her pay."
    },
    {
        "qNum": 286,
        "q": "Welche Organisation in einer Firma hilft den Arbeitnehmerinnen und Arbeitnehmern bei Problemen mit der Arbeitgeberin/dem Arbeitgeber?",
        "tq": "Which organization in a company helps employees with problems with their employer?",
        "o": {
            "a": "der Betriebsrat",
            "b": "die Betriebsprüferin/der Betriebsprüfer",
            "c": "die Betriebsgruppe",
            "d": "das Betriebsmanagement"
        },
        "to": {
            "a": "the works council",
            "b": "the company auditor",
            "c": "the company group",
            "d": "the company management"
        },
        "a": "a",
        "r": "The correct answer is 'der Betriebsrat' because the Betriebsrat (works council) represents the interests of employees within a company and helps resolve issues with the employer."
    },
    {
        "qNum": 287,
        "q": "Sie möchten bei einer Firma in Deutschland ihr Arbeitsverhältnis beenden. Was müssen Sie beachten?",
        "tq": "You want to terminate your employment with a company in Germany. What do you have to consider?",
        "o": {
            "a": "die Gehaltszahlungen",
            "b": "die Arbeitszeit",
            "c": "die Kündigungsfrist",
            "d": "die Versicherungspflicht"
        },
        "to": {
            "a": "the salary payments",
            "b": "the working hours",
            "c": "the notice period",
            "d": "the insurance obligation"
        },
        "a": "c",
        "r": "The correct answer is 'die Kündigungsfrist' because you must adhere to the Kündigungsfrist (notice period) when terminating employment, as specified in your contract or by law."
    },
    {
        "qNum": 288,
        "q": "Woraus begründet sich Deutschlands besondere Verantwortung für Israel?",
        "tq": "What is the basis for Germany's special responsibility for Israel?",
        "o": {
            "a": "aus der Mitgliedschaft in der Europäischen Union (EU)",
            "b": "aus den nationalsozialistischen Verbrechen gegen Juden",
            "c": "aus dem Grundgesetz der Bundesrepublik Deutschland",
            "d": "aus der christlichen Tradition"
        },
        "to": {
            "a": "from membership in the European Union (EU)",
            "b": "from the National Socialist crimes against Jews",
            "c": "from the Basic Law of the Federal Republic of Germany",
            "d": "from the Christian tradition"
        },
        "a": "b",
        "r": "The correct answer is 'aus den nationalsozialistischen Verbrechen gegen Juden' because Germany's special responsibility for Israel stems from the historical crimes committed against Jewish people during the National Socialist era."
    },
    {
        "qNum": 289,
        "q": "Ein Mann mit dunkler Hautfarbe bewirbt sich um eine Stelle als Kellner in einem Restaurant in Deutschland. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil …",
        "tq": "A man with dark skin applies for a job as a waiter in a restaurant in Germany. What is an example of discrimination? He doesn't get the job just because …",
        "o": {
            "a": "seine Deutschkenntnisse zu gering sind.",
            "b": "er zu hohe Gehaltsvorstellungen hat.",
            "c": "er eine dunkle Haut hat.",
            "d": "er keine Erfahrungen im Beruf hat."
        },
        "to": {
            "a": "his German language skills are too poor.",
            "b": "he has too high salary expectations.",
            "c": "he has dark skin.",
            "d": "he has no experience in the profession."
        },
        "a": "c",
        "r": "The correct answer is 'er eine dunkle Haut hat.' because denying someone a job solely based on their skin color is a clear example of racial discrimination."
    },
    {
        "qNum": 290,
        "q": "Sie haben in Deutschland einen Fernseher gekauft. Zu Hause packen Sie den Fernseher aus, doch er funktioniert nicht. Der Fernseher ist kaputt. Was können Sie machen?",
        "tq": "You bought a television in Germany. At home you unpack the television, but it doesn't work. The television is broken. What can you do?",
        "o": {
            "a": "eine Anzeige schreiben",
            "b": "den Fernseher reklamieren",
            "c": "das Gerät ungefragt austauschen",
            "d": "die Garantie verlängern"
        },
        "to": {
            "a": "write an advertisement",
            "b": "complain about the television",
            "c": "exchange the device without being asked",
            "d": "extend the warranty"
        },
        "a": "b",
        "r": "The correct answer is 'den Fernseher reklamieren' because you should reklamieren (make a complaint) about the defective television to the seller."
    },
    {
        "qNum": 291,
        "q": "Warum muss man in Deutschland bei der Steuererklärung aufschreiben, ob man zu einer Kirche gehört oder nicht?",
        "tq": "Why do you have to write on your tax return in Germany whether you belong to a church or not?",
        "o": {
            "a": "Weil … es eine Kirchensteuer gibt, die an die Einkommen- und Lohnsteuer geknüpft ist.",
            "b": "das für die Statistik in Deutschland wichtig ist.",
            "c": "man mehr Steuern zahlen muss, wenn man nicht zu einer Kirche gehört.",
            "d": "die Kirche für die Steuererklärung verantwortlich ist."
        },
        "to": {
            "a": "Because … there is a church tax that is linked to income and wage tax.",
            "b": "this is important for statistics in Germany.",
            "c": "you have to pay more taxes if you don't belong to a church.",
            "d": "the church is responsible for the tax return."
        },
        "a": "a",
        "r": "The correct answer is 'Weil … es eine Kirchensteuer gibt, die an die Einkommen- und Lohnsteuer geknüpft ist.' because in Germany, there is a church tax (Kirchensteuer) that is levied on members of certain religious communities and is collected along with income tax."
    },
    {
        "qNum": 292,
        "q": "Die Menschen in Deutschland leben nach dem Grundsatz der religiösen Toleranz. Was bedeutet das?",
        "tq": "People in Germany live according to the principle of religious tolerance. What does that mean?",
        "o": {
            "a": "Es dürfen keine Moscheen gebaut werden.",
            "b": "Alle Menschen glauben an Gott.",
            "c": "Jeder kann glauben, was er möchte.",
            "d": "Der Staat entscheidet, an welchen Gott die Menschen glauben."
        },
        "to": {
            "a": "No mosques may be built.",
            "b": "All people believe in God.",
            "c": "Everyone can believe what they want.",
            "d": "The state decides which God people believe in."
        },
        "a": "c",
        "r": "The correct answer is 'Jeder kann glauben, was er möchte.' because religious tolerance in Germany means that everyone is free to practice the religion of their choice or to not have a religion."
    },
    {
        "qNum": 293,
        "q": "Was ist in Deutschland ein Brauch zu Ostern?",
        "tq": "What is a custom at Easter in Germany?",
        "o": {
            "a": "Kürbisse vor die Tür stellen",
            "b": "einen Tannenbaum schmücken",
            "c": "Eier bemalen",
            "d": "Raketen in die Luft schießen"
        },
        "to": {
            "a": "to put pumpkins in front of the door",
            "b": "to decorate a Christmas tree",
            "c": "to paint eggs",
            "d": "to shoot rockets into the air"
        },
        "a": "c",
        "r": "The correct answer is 'Eier bemalen' because painting eggs is a traditional Easter custom in Germany."
    },
    {
        "qNum": 294,
        "q": "Pfingsten ist ein …",
        "tq": "Pentecost is a …",
        "o": {
            "a": "christlicher Feiertag.",
            "b": "deutscher Gedenktag.",
            "c": "internationaler Trauertag.",
            "d": "bayerischer Brauch."
        },
        "to": {
            "a": "Christian holiday.",
            "b": "German memorial day.",
            "c": "international day of mourning.",
            "d": "Bavarian custom."
        },
        "a": "a",
        "r": "The correct answer is 'christlicher Feiertag.' because Pentecost is a Christian holiday."
    },
    {
        "qNum": 295,
        "q": "Welche Religion hat die europäische und deutsche Kultur geprägt?",
        "tq": "Which religion has shaped European and German culture?",
        "o": {
            "a": "der Hinduismus",
            "b": "das Christentum",
            "c": "der Buddhismus",
            "d": "der Islam"
        },
        "to": {
            "a": "Hinduism",
            "b": "Christianity",
            "c": "Buddhism",
            "d": "Islam"
        },
        "a": "b",
        "r": "The correct answer is 'das Christentum' because Christianity has historically been a major influence on European and German culture."
    },
    {
        "qNum": 296,
        "q": "In Deutschland nennt man die letzten vier Wochen vor Weihnachten …",
        "tq": "In Germany, the last four weeks before Christmas are called …",
        "o": {
            "a": "den Buß- und Bettag.",
            "b": "das Erntedankfest.",
            "c": "die Adventszeit.",
            "d": "Allerheiligen."
        },
        "to": {
            "a": "the Day of Repentance and Prayer.",
            "b": "Thanksgiving.",
            "c": "the Advent season.",
            "d": "All Saints' Day."
        },
        "a": "c",
        "r": "The correct answer is 'die Adventszeit.' because the four weeks leading up to Christmas are known as the Adventszeit (Advent season) in Germany."
    },
    {
        "qNum": 297,
        "q": "Aus welchem Land sind die meisten Migrantinnen und Migranten nach Deutschland gekommen?",
        "tq": "From which country did most migrants come to Germany?",
        "o": {
            "a": "Italien",
            "b": "Polen",
            "c": "Marokko",
            "d": "Türkei"
        },
        "to": {
            "a": "Italy",
            "b": "Poland",
            "c": "Morocco",
            "d": "Turkey"
        },
        "a": "d",
        "r": "The correct answer is 'Türkei' because the largest group of migrants in Germany has historically come from Turkey."
    },
    {
        "qNum": 298,
        "q": "In der DDR lebten vor allem Migrantinnen und Migranten aus …",
        "tq": "In the GDR, migrants mainly came from …",
        "o": {
            "a": "Vietnam, Polen, Mosambik.",
            "b": "Frankreich, Rumänien, Somalia.",
            "c": "Chile, Ungarn, Simbabwe.",
            "d": "Nordkorea, Mexiko, Ägypten."
        },
        "to": {
            "a": "Vietnam, Poland, Mozambique.",
            "b": "France, Romania, Somalia.",
            "c": "Chile, Hungary, Zimbabwe.",
            "d": "North Korea, Mexico, Egypt."
        },
        "a": "a",
        "r": "The correct answer is 'Vietnam, Polen, Mosambik.' because the GDR had guest worker programs with Vietnam, Poland, and Mozambique."
    },
    {
        "qNum": 299,
        "q": "Ausländische Arbeitnehmerinnen und Arbeitnehmer, die in den 50er und 60er Jahren von der Bundesrepublik Deutschland angeworben wurden, nannte man …",
        "tq": "Foreign workers who were recruited by the Federal Republic of Germany in the 1950s and 1960s were called …",
        "o": {
            "a": "Schwarzarbeiterinnen/Schwarzarbeiter.",
            "b": "Gastarbeiterinnen/Gastarbeiter.",
            "c": "Zeitarbeiterinnen/Zeitarbeiter.",
            "d": "Schichtarbeiterinnen/Schichtarbeiter."
        },
        "to": {
            "a": "illegal workers.",
            "b": "guest workers.",
            "c": "temporary workers.",
            "d": "shift workers."
        },
        "a": "b",
        "r": "The correct answer is 'Gastarbeiterinnen/Gastarbeiter.' because the term Gastarbeiter (guest worker) was used for foreign workers recruited to work in West Germany during that period."
    },
    {
        "qNum": 300,
        "q": "Aus welchem Land kamen die ersten Gastarbeiterinnen und Gastarbeiter in die Bundesrepublik Deutschland?",
        "tq": "From which country did the first guest workers come to the Federal Republic of Germany?",
        "o": {
            "a": "Italien",
            "b": "Spanien",
            "c": "Portugal",
            "d": "Türkei"
        },
        "to": {
            "a": "Italy",
            "b": "Spain",
            "c": "Portugal",
            "d": "Turkey"
        },
        "a": "a",
        "r": "The correct answer is 'Italien' because Italy was one of the first countries to send Gastarbeiter (guest workers) to West Germany in the 1950s."
    }
]