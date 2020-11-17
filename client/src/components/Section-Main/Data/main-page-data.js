const data = {
    0.1: {
        photo: 'day1.svg',
        childInfo: 'Plemnik wnika do komórki jajowej, a ta tworzy barierę nieprzepuszczalną dla innych plemników. Materiał genetyczny ojca łączy się z materiałem genetycznym matki.',
    },
    0.2: {
        photo: 'day2.svg',
        childInfo: 'Zapłodniona komórka wędruje przez jajowód do macicy dzieląc się cały czas.',
    },
    0.3: {
        photo: 'day3.svg',
        childInfo: 'Trzeciego dnia jest 9 komórek. Z każdym kolejnym dniem ta liczba rośnie.',
    },
    0.4: {
        photo: 'day4.svg',
        childInfo: 'Czwartego dnia jest 16 komórek. Podział będzie dokonywał się jeszcze wiele milionów razy.',
        customNum: 'Dni 4-6'
    },
    0.5: {
        photo: 'day4.svg',
        childInfo: 'Czwartego dnia jest 16 komórek. Podział będzie dokonywał się jeszcze wiele milionów razy.',
        customNum: 'Dni 4-6'
    },
    0.6: {
        photo: 'day4.svg',
        childInfo: 'Czwartego dnia jest 16 komórek. Podział będzie dokonywał się jeszcze wiele milionów razy.',
        customNum: 'Dni 4-6'
    },
    0.7: {
        photo: 'day7.svg',
        childInfo: 'Skupisko około 100 komórek zagnieżdża się w śluzówce macicy.',
    },
    2: {
        photo: 'month1.svg',
        childInfo: 'Zarodek składa się z kilkuset komórek. Zaczynają się formować narządy dziecka.  Formuje się układ nerwowy, skóra, narządy układu pokarmowego, mięśnie, kości i układ krwionośny. W tym tygodniu tworzy się też łożysko. Zarodek ma około 1 milimetra długości i jest półprzezroczysty.',
    },
    3: {
        photo: 'month1.svg',
        childInfo: 'Zarodek przyjmuje  podłużny kształt. Cewka nerwowa łącząca mózg z rdzeniem kręgowym zamyka się.',
    },
    4: {
        photo: 'month1.svg',
        childInfo: 'Zaczyna formować się serce i powstają zalążki oczu i uszu. Pod koniec pierwszego miesiąca zarodek ma około 5 milimetrów długości, waży powyżej 1 grama i jest zwinięty w łuk.',
    },
    5: {
        photo: 'month2.svg',
        childInfo: 'Zarodek urósł bardzo szybko. Pod koniec tego tygodnia ma już około 14 milimetrów długości. Pojawiają się zawiązki kończyn. W układzie krwionośnym zaczyna krążyć krew.',
    },
    6: {
        photo: 'month2.svg',
        childInfo: 'Na twarzy uwidaczniają się oczy, uszy i nos. Zaczynają rozwijać się palce rąk i stóp. Serce dzieli się na dwie komory, powstają jelita i pojawiają się oskrzela.',
    },
    7: {
        photo: 'month2.svg',
        childInfo: 'Tułów i kończyny wydłużyły się, a szyja zaczęła być widoczna. Układ krwionośny i pokarmowy zaczęły funkcjonować. Powstają zawiązki narządów rozrodczych – u chłopca członek i jądra, a u dziewczynki jajniki.',
    },
    8: {
        photo: 'month2.svg',
        childInfo: 'Większość układów i narządów jest rozwinięta. Jeżeli do tej pory zarodek rozwijał się prawidłowo to prawdopodobieństwo wystąpienia wad wrodzonych mocno spada. Zarodek ma już około 4 centymetry i waży 5 gramów.',
    },
    9: {
        photo: 'month3.svg',
        childInfo: 'Na palcach zaczynają się pojawiać paznokcie. Tworzą się tęczówki, a oczy które były po bokach głowy przesuwają się do przodu. Wszystkie narządy wewnętrzne ukształtowały się i od teraz będą tylko rosnąć i dojrzewać. Dziecko może poruszać spontanicznie kończynami ale mama tego jeszcze nie poczuje.',
    },
    10: {
        photo: 'month3.svg',
        childInfo: 'Zarodek ma około 6 centymetrów długości i waży 8-10 gramów.  W skórze pojawiają się zawiązki cebulek włosowych. Komórki chrzęstne zastępowane są komórkami kostnymi.',
    },
    11: {
        photo: 'month3.svg',
        childInfo: 'Ludzki zarodek osiąga stadium płodu i rozpoczyna okres płodowy.',
    },
    12: {
        photo: 'month3.svg',
        childInfo: 'Od tej pory płód zaczyna szybko rosnąć. Będzie to dotyczyć głównie tułowia i w ten sposób zmniejszy się dysproporcja pomiędzy wielkością głowy a resztą ciała. Układ nerwowy zaczyna pracować. W uchu rozwija się aparat słuchowy. Dziecko ma około 10 centymetrów długości i waży 50 gramów.',
    },
    13: {
        photo: 'month4.svg',
        childInfo: 'Następuje intensywny przyrost długości ciała.  Główka zajmuje 1/3 ciała. Na palcach pojawiają się poduszeczki dotykowe a na nich linie papilarne.',
    },
    14: {
        photo: 'month4.svg',
        childInfo: 'Organizm wytwarza białka i przekształca tkankę  tłuszczową w energie.',
    },
    15: {
        photo: 'month4.svg',
        childInfo: 'Kończy zarówno górne jak i dolne są już ukształtowane. Dziecko może zginać ręce w łokciach i w ramionach, dłonie w nadgarstkach i nogi w kolanach.',
    },
    16: {
        photo: 'month4.svg',
        childInfo: 'Uformowany jest móżdżek i powstają nowe połączenia nerwowe.',
    },
    17: {
        photo: 'month5.svg',
        childInfo: 'Dziecko zaczyna słyszeć dźwięki. Jego skórę pokrywa maź płodowa. Wyprostowany mierzy już 25 centymetrów i waży 150 gramów.',
    },
    18: {
        photo: 'month5.svg',
        childInfo: 'W mózgu uwidacznia się bruzda czołowa i ciemieniowo-potyliczna.',
    },
    19: {
        photo: 'month5.svg',
        childInfo: 'Stopniowo aktywność płodu staje się regularna i cyklicznie zmienia się(faza czuwania, snu). ',
    },
    20: {
        photo: 'month5.svg',
        childInfo: 'Wzrost dziecka spowalnia się, ale narządy wciąż się doskonalą. W mózgu zachodzą ważne zmiany np. rozwijają się komórki nerwowe odpowiedzialne za prace poszczególnych zmysłów. Na języku tworzą się kubki smakowe. Dziecko ma około 20 centymetrów długości i waży 300 gramów.',
    },
    21: {
        photo: 'month6.svg',
        childInfo: 'Wytwarzają się więzadła stawowe, a szkielet intensywnie kostnieje. Mama wkrótce zacznie odczuwać ruchy dziecka.',
    },
    22: {
        photo: 'month6.svg',
        childInfo: 'Organizm dziecka zaczyna produkować białe krwinki. Płuca zaczynają dojrzewać a dziecko ćwiczy oddychanie wciągając do płuc płyn owodniowy.',
    },
    23: {
        photo: 'month6.svg',
        childInfo: 'Dziecko magazynuje substancje potrzebne po urodzeniu takie jak wapń, żelazo, białka.',
    },
    24: {
        photo: 'month6.svg',
        childInfo: 'Dziecko ma do 35 centymetrów długości i waży około 600 gramów.',
    },
    25: {
        photo: 'month7.svg',
        childInfo: 'Na twarzy widać już rzęsy i brwi, a włosy są coraz dłuższe. Na języku całkowicie ukształtowały się już kubki smakowe. ',
    },
    26: {
        photo: 'month7.svg',
        childInfo: 'Dziecko przyjmuję pozycję embrionalną. Mózg rozwija się szybko a na jego powierzchni formują się charakterystyczne fałdy.',
    },
    27: {
        photo: 'month7.svg',
        childInfo: 'Oczy dziecka stają się wrażliwe na światło. Dziecko mierzy 37 centymetrów długości i waży 1,2 kilograma.',
    },
    28: {
        photo: 'month7.svg',
        childInfo: 'Większość odruchów wrodzonych jest już widoczna np. ssanie, kroczenie, chwytanie.',
    },
    29: {
        photo: 'month8.svg',
        childInfo: 'Maluch może otwierać i zamykać oczy. W szybkim tempie rozwija się mózg.',
    },
    30: {
        photo: 'month8.svg',
        childInfo: 'Wszystkie zmysły już funkcjonują. Dodatkowo dziecko może obracać główką na boki. Mierzy około 30 centymetrów i waży 1,8 kilograma.',
    },
    31: {
        photo: 'month8.svg',
        childInfo: 'Ciało przybiera bardziej zaokrąglony kształt.',
    },
    32: {
        photo: 'month8.svg',
        childInfo: 'Skóra zmienia kolor na różowy dzięki tłuszczowi który gromadzi się pod nią. Dziecko rozwija swój układ odpornościowy, żeby zwalczać drobne infekcje. ',
    },
    33: {
        photo: 'month9.svg',
        childInfo: 'Mózg wytwarza zdolność do przyjmowania dźwięków mowy i muzyki.',
    },
    34: {
        photo: 'month9.svg',
        childInfo: 'Układ pokarmowy i oddechowy są już prawie w pełni rozwinięte. Dziecko nie może się zbytnio poruszać, jest mu bardzo ciasno.',
    },
    35: {
        photo: 'month9.svg',
        childInfo: 'Dziecko przestaje już rosnąc. ',
    },
    36: {
        photo: 'month9.svg',
        childInfo: 'Dziecko dojrzało do porodu, które może wystąpić w każdej chwili.',
    },
}

export default data;