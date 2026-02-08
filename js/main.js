(function() {
    const STORAGE_KEY = 'yuragi-lang';
    const locales = {
        ko: {
            nav: { concept: 'CONCEPT', onsen: 'ONSEN', bar: 'BAR', event: 'EVENT', coaster: 'How to use', location: 'LOCATION' },
            concept: {
                sloganJa: '온천이 풀어주고, 술이 이어준다',
                sloganKo: '온천이 풀어주고, 술이 이어준다',
                para1: '물과 수증기가 몸의 결을 풀고, 한 잔의 위스키가 하루를 이어줍니다. 유엔은 \'온천의 신\'과 \'술의 신\'이 마주하는 경계에 서 있습니다.',
                para2: '왼쪽에는 푸른 빛과 증기, 오른쪽에는 앰버와 등불. 그 사이를 지나는 시간만이 당신만의 고요가 됩니다.',
                para3: '우리는 그 경계를 지키는 매개자입니다. 말하지 않고, 다만 지켜봅니다.',
                mediator: '우리는 당신의 고요를 지켜보는 관찰자입니다.<br>신의 매개자(Mediator)로서, 그저 여기 있을 뿐입니다.'
            },
            hero: { tagline: 'PREMIUM RELAXATION', title: '달빛 아래, <br> 온천과 위스키의 변주', desc: '따뜻한 온천수에서 몸을 녹이고, 정갈한 바에서 장인의 칵테일을 즐겨보세요. <br> 당신만을 위한 완벽한 밤의 휴식이 시작됩니다.', cta: '예약하기' },
            onsen: { title: '01. 온천', title1: '따뜻한 온천', desc1: '유노카와의 천연 온천. 약 40℃의 온수로 발끝에서 천천히 풀어집니다.', title2: '넓은 공간', desc2: '야외 족욕 공간. 밤바람과 함께 여유로운 시간을 보내세요.', title3: '여행 피로를 풀다', desc3: '걷다 지친 발을 따뜻한 온천에 담그세요. 하코다테 밤을 천천히.', desc: '일본 전통 목조 양식의 미학을 담았습니다. 히노끼 향이 은은하게 퍼지는 노천탕에서 일상의 소음을 잊고 계절의 바람을 느껴보세요.' },
            bar: { title: '03. 바', desc: '엄선된 재패니즈 위스키와 지역 사케를 베이스로 한 오리지널 칵테일. 조용히 흐르는 재즈 선율과 함께 어른의 시간을 즐기실 수 있습니다.' },
            footbath: {
                title: '02. 족욕에 효능',
                benefit1Title: '혈행 개선',
                benefit1Desc: '따뜻한 물에 발을 담그면 말초 혈관이 확장되어 혈액 순환이 좋아집니다.',
                benefit2Title: '피로 회복',
                benefit2Desc: '족욕으로 근육이 이완되고 쌓인 피로가 풀려 몸이 가벼워집니다.',
                benefit3Title: '숙면·이완',
                benefit3Desc: '저녁 족욕은 심신을 진정시켜 숙면에 도움이 됩니다.'
            },
            coaster: {
                intro: '유엔의 코스터는 색으로 대화 언어를, 뒤집으면 고요를 전합니다.',
                red: '빨간색 — 일본어를 할 수 있습니다.',
                blue: '파란색 — 한국어를 할 수 있습니다.',
                yellow: '노란색 — 영어를 할 수 있습니다.',
                black: '뒤집어 검은 면을 보이면 — 말 걸지 말아 주세요. 혼자만의 시간을 갖고 싶을 때.'
            },
            event: {
                title: '04. 이벤트',
                number1: '1', number2: '2', number3: '3',
                intro: '달과 토끼 테마의 바 이벤트에 참여해 보세요.',
                rabbitTitle: '숨은 토끼 찾기',
                rabbitDesc: '매장 곳곳(메뉴판 구석, 바 선반, 정원 돌틈 등)에 작은 토끼 미니어처·토끼 문양 인장을 숨겨두었습니다. 3개 이상 찾아 사진을 찍고 SNS에 당사 계정을 태그해 인증하시면 위스키 샘플러 1잔을 무료로 드립니다.',
                photoTitle: '포토존 — 달에 착륙한 토끼',
                photoDesc: '바 테이블 한편에 \'달에 착륙한 토끼\' 테마의 미니어처 디오라마를 설치해 두었습니다. 인스타그램에 올리기 좋은 포토 스팟입니다.',
                letterTitle: '달의 뒷면에서 온 편지',
                letterDesc: '매장 한쪽에 작은 우체통과 \'달 토끼\' 전용 미니 엽서를 비치했습니다. 위스키를 마시며 느낀 점이나 소원을 적어 우체통에 넣어 주세요. 일본의 에마(絵馬) 문화와 맞닿아, 추첨을 통해 다음 방문 시 사용 가능한 \'프리미엄 위스키 업그레이드 권\'을 우편으로 보내 드립니다.'
            },
            location: { title: 'LOCATION' },
            footer: { address: '교토부 카미교구 어느 조용한 골목 123-4' }
        },
        ja: {
            nav: { concept: 'コンセプト', onsen: '温泉', bar: 'バー', event: 'イベント', coaster: '利用の流れ', location: 'ロケーション' },
            concept: {
                sloganJa: '湯がほどき、酒がつなぐ',
                sloganKo: '湯がほどき、酒がつなぐ（温泉が解き、酒が繋ぐ）',
                para1: '水と湯気が体の結び目をほどき、一杯のウイスキーが一日をつなぐ。湯縁は「湯の神」と「酒の神」が向き合う境界に立っています。',
                para2: '左には青い光と蒸気、右には琥珀と灯り。その間を過ごす時間だけが、あなただけの静寂になります。',
                para3: '私たちはその境界を守る媒介者です。語らず、ただ見守ります。',
                mediator: '私たちは、あなたの静寂を見守る観察者です。<br>神の媒介者(Mediator)として、ただここにいるだけです。'
            },
            hero: { tagline: 'PREMIUM RELAXATION', title: '月明かりの下で、<br>温泉とウイスキーの変奏', desc: '温かな温泉で体をほぐし、上品なバーで職人のカクテルを。 <br>あなただけの完璧な夜のくつろぎが始まります。', cta: 'ご予約' },
            onsen: { title: '01. 湯 (Onsen)', title1: '温かみのある湯', desc1: '湯の川の天然温泉。約40℃の湯で足元からゆっくりとほぐれていきます。', title2: '開放感のある空間', desc2: '屋外の足湯スペース。夜風と共に、開放的なひとときをお過ごしください。', title3: '旅の疲れを癒す', desc3: '歩き疲れた足を、温かい湯に浸けて。函館の夜を、ゆったりと。', desc: '日本の伝統木造様式の美学を込めました。ヒノキの香りがほのかに広がる露天風呂で、日常の喧騒を忘れ、四季の風を感じてください。' },
            bar: { title: '03. 酒 (Bar)', desc: '厳選されたジャパニーズウイスキーと地酒をベースにしたオリジナルカクテル。静かに流れるジャズとともに、大人の時間をお楽しみいただけます。' },
            footbath: {
                title: '02. 足湯の効能',
                benefit1Title: '血行促進',
                benefit1Desc: '温かい湯に足を浸すと末梢血管が広がり、血流がよくなります。',
                benefit2Title: '疲労回復',
                benefit2Desc: '足湯で筋肉がほぐれ、溜まった疲れが取れて体が軽くなります。',
                benefit3Title: '安眠・リラックス',
                benefit3Desc: '夜の足湯は心身を落ち着かせ、質のよい睡眠に役立ちます。'
            },
            coaster: {
                intro: '湯縁のコースターは、色で話す言語を、裏返しで静寂を伝えます。',
                red: '赤 — 日本語ができます。',
                blue: '青 — 韓国語ができます。',
                yellow: '黄 — 英語ができます。',
                black: '裏返して黒い面を見せたら — 話しかけないで。ひとりの時間が欲しいとき。'
            },
            event: {
                title: '04. イベント',
                number1: '一', number2: '二', number3: '三',
                intro: '月とウサギをテーマにしたバーイベントへ、ぜひご参加ください。',
                rabbitTitle: '隠れたウサギさがし',
                rabbitDesc: '店内のあちこち（メニュー表のすみ、バーの棚、庭の石のすき間など）に、小さなウサギのミニチュアやウサギの紋様スタンプを隠しています。3つ以上見つけて写真を撮り、SNSで当店アカウントをタグしてご応募いただいた方に、ウイスキーサンプラー1杯を無料でプレゼントします。',
                photoTitle: 'フォトゾーン — 月に着陸したウサギ',
                photoDesc: 'バーテーブルの一角に「月に着陸したウサギ」をテーマにしたミニチュアジオラマを設置しています。インスタグラムにぴったりのフォトスポットです。',
                letterTitle: '月の裏側からの手紙',
                letterDesc: '店内の一角に小さなポストと「月のウサギ」専用ミニはがきを用意しています。ウイスキーを飲みながら感じたことや願い事を書いて、ポストへ投函してください。日本の絵馬文化にちなみ、抽選で次回ご来店時に使える「プレミアムウイスキーアップグレード券」を郵送でお届けします。'
            },
            reservation: { intro: '温泉・バーご利用のご予約・お問い合わせは下記までお願いいたします。', hours: '受付時間: 10:00–20:00（年中無休）', tel: 'TEL: 075-XXX-XXXX', note: '温泉・バーとも当日予約可能です。団体のご利用は事前にお問い合わせください。' },
            location: { title: 'ロケーション' },
            footer: { address: '京都府上京区 静かな路地 123-4' }
        },
        en: {
            nav: { concept: 'CONCEPT', onsen: 'ONSEN', bar: 'BAR', event: 'EVENT', coaster: 'How to use', location: 'LOCATION' },
            concept: {
                sloganJa: 'The spring loosens; the drink connects.',
                sloganKo: 'The spring loosens; the drink connects.',
                para1: 'Water and steam loosen the body, one glass of whiskey connects the day. YUEN stands at the boundary where the god of the spring and the god of drink meet.',
                para2: 'To the left, blue light and vapour; to the right, amber and lamplight. Only the time you spend between them becomes your own stillness.',
                para3: 'We are the mediators of that boundary. We do not speak—we only watch.',
                mediator: 'We are the observers who watch over your stillness.<br>As mediators of the gods, we are simply here.'
            },
            hero: { tagline: 'PREMIUM RELAXATION', title: 'Under the moonlight,<br> variations of onsen & whiskey', desc: 'Soak in warm spring water, savor artisan cocktails at an elegant bar. <br>Your perfect night of rest begins here.', cta: 'Reserve' },
            onsen: { title: '01. Onsen', title1: 'Warm spring water', desc1: 'Natural hot springs of Yunokawa. Let the ~40°C water slowly ease you from your feet up.', title2: 'Open, airy space', desc2: 'Outdoor footbath area. Enjoy an open moment with the night breeze.', title3: 'Soothe your journey', desc3: 'Soak your tired feet in warm water. A relaxed evening in Hakodate.', desc: 'We\'ve captured the aesthetics of traditional Japanese wood architecture. Forget the noise of daily life in our cypress-scented outdoor bath and feel the breeze of the seasons.' },
            bar: { title: '03. Bar', desc: 'Original cocktails featuring selected Japanese whiskey and local sake. Enjoy an adult moment with the gentle flow of jazz.' },
            footbath: {
                title: '02. Benefits of foot bath',
                benefit1Title: 'Better circulation',
                benefit1Desc: 'Warm water widens blood vessels in the feet and improves blood flow.',
                benefit2Title: 'Relief from fatigue',
                benefit2Desc: 'A foot soak relaxes muscles and eases tiredness so you feel lighter.',
                benefit3Title: 'Sleep & relaxation',
                benefit3Desc: 'An evening foot bath helps calm body and mind for better sleep.'
            },
            coaster: {
                intro: 'YUEN coasters tell your language by colour, and quiet by turning over.',
                red: 'Red — I can speak Japanese.',
                blue: 'Blue — I can speak Korean.',
                yellow: 'Yellow — I can speak English.',
                black: 'Black side up — Please don’t speak to me. When you want time alone.'
            },
            event: {
                title: '04. Event',
                number1: '1', number2: '2', number3: '3',
                intro: 'Join our moon-and-rabbit themed bar events.',
                rabbitTitle: 'Hidden Rabbit Hunt',
                rabbitDesc: 'We\'ve hidden small rabbit miniatures and rabbit-pattern stamps around the bar—menu corners, shelves, garden stone gaps, and more. Find 3 or more, take a photo, tag our account on SNS to verify, and receive one free whiskey sampler.',
                photoTitle: 'Photo Zone — Rabbit on the Moon',
                photoDesc: 'A miniature diorama themed "rabbit landed on the moon" is set up at one corner of the bar. A perfect Instagram-ready photo spot.',
                letterTitle: 'Letter from the Far Side of the Moon',
                letterDesc: 'A small mailbox and "moon rabbit" mini postcards are placed in one corner. Write your thoughts or wishes while enjoying whiskey and drop them in the box. In the spirit of Japan\'s ema (wish plaque) culture, we\'ll hold a draw and send winners a "Premium Whiskey Upgrade" voucher by mail for use on your next visit.'
            },
            location: { title: 'LOCATION' },
            footer: { address: '123-4, a quiet alley, Kamigyo-ku, Kyoto' }
        }
    };

    const select = document.getElementById('lang-select');
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && locales[saved]) { select.value = saved; }

    select.addEventListener('change', function() {
        const lang = this.value;
        localStorage.setItem(STORAGE_KEY, lang);
        applyLang(lang);
    });

    function get(obj, path) {
        return path.split('.').reduce((o, k) => (o && o[k] != null ? o[k] : null), obj);
    }

    function applyLang(lang) {
        const t = locales[lang];
        if (!t) return;
        document.documentElement.lang = lang === 'ja' ? 'ja' : lang === 'ko' ? 'ko' : 'en';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const val = get(t, el.getAttribute('data-i18n'));
            if (val != null) el.innerHTML = val;
        });
    }

    applyLang(select.value);

    var currentPage = (function() {
        var path = window.location.pathname || '';
        var name = path.split('/').pop() || '';
        return name === '' ? 'index.html' : name;
    })();
    document.querySelectorAll('.nav-link').forEach(function(a) {
        var href = (a.getAttribute('href') || '').replace(/^\.\//, '');
        if (href === currentPage || (currentPage === 'index.html' && (href === 'index.html' || href === '.'))) a.classList.add('nav-active');
    });

    const reveals = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => observer.observe(el));
})();
