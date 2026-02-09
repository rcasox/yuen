(function() {
    const STORAGE_KEY = 'yuragi-lang';
    const locales = {
        ko: {
            nav: { concept: '컨셉', onsen: '온천', bar: '바', event: '이벤트', coaster: '특징', location: '위치' },
            concept: {
                sloganJa: '온천이 풀어주고, 술이 이어준다',
                sloganKo: '온천이 풀어주고, 술이 이어준다',
                para1: '물과 수증기가 몸의 결을 풀고, 한 잔의 위스키가 하루를 이어줍니다. 유엔은 \'온천의 신\'과 \'술의 신\'이 마주하는 경계에 서 있습니다.',
                para2: '왼쪽에는 푸른 빛과 증기, 오른쪽에는 앰버와 등불. 그 사이를 지나는 시간만이 당신만의 고요가 됩니다.',
                para3: '우리는 그 경계를 지키는 매개자입니다. 말하지 않고, 다만 지켜봅니다.',
                mediator: '우리는 당신의 고요를 지켜보는 관찰자입니다.<br>신의 매개자(Mediator)로서, 그저 여기 있을 뿐입니다.'
            },
            hero: { tagline: 'PREMIUM RELAXATION', title: '달빛 아래, <br> 온천과 위스키의 변주', desc: '따뜻한 온천수에서 몸을 녹이고, 정갈한 바에서 장인의 칵테일을 즐겨보세요. <br> 당신만을 위한 완벽한 밤의 휴식이 시작됩니다.', cta: '예약하기' },
            onsen: { title: '01. 온천', footbathPageTitle: '족욕 온천', footbathIntro: '유엔은 홋카이도 함관(函館) 유노카와의 천연 온천수를 사용한 족욕을 안내합니다. 야외에서 밤바람과 함께 발을 담그며 휴식을 취하실 수 있습니다. 아래에서 족욕의 효능을 살펴보세요.', vizTitle: '온천과 한 잔의 시너지', vizSubtitle: '족욕과 바 한 잔이 주는 효과', vizMatch: '술과 온천 궁합', vizRelax: '이완 효과', vizEmotional: '정서적 안정', vizCirculation: '혈행·피로 개선', vizSleep: '숙면', title1: '따뜻한 온천', desc1: '유노카와의 천연 온천. 약 40℃의 온수로 발끝에서 천천히 풀어집니다.', title2: '넓은 공간', desc2: '야외 족욕 공간. 밤바람과 함께 여유로운 시간을 보내세요.', title3: '여행 피로를 풀다', desc3: '걷다 지친 발을 따뜻한 온천에 담그세요. 하코다테 밤을 천천히.', desc: '일본 전통 목조 양식의 미학을 담았습니다. 히노끼 향이 은은하게 퍼지는 노천탕에서 일상의 소음을 잊고 계절의 바람을 느껴보세요.' },
            bar: { title: '03. 바', programIntro: '유엔 바는 지역 기반 음료 큐레이션 체계에 따라 운영됩니다.', frameworkTitle: '바 프로그램 구성', section1Title: '선정 기준', section1Desc: '현지 양조장·증류소와의 직접 연계, 품질 검증(시음·성분), 지역 한정(地酒・限定) 조건을 충족하는 품목만 선별합니다.', section2Title: '카테고리 체계', section2Desc: '지주(地酒), 재패니즈 위스키, 오리지널 칵테일로 구분하며, 각 카테고리별로 출처·특성에 따른 일관된 분류를 적용합니다.', section3Title: '온천과의 페어링', section3Desc: '족욕 후 이완·혈행 개선 상태에서의 소량 음주를 전제로, 강도·온도·맛의 균형을 맞춘 메뉴 구성을 원칙으로 합니다.', publicTitle: '함께 여는 한 잔', publicDesc: '유엔 바는 한 사람의 밤만이 아니라, 동네와 여행자가 만나는 자리입니다. 위의 선정 기준과 메뉴 구성은 ‘누구나 같은 기준으로 한 잔을 받을 수 있게’ 하려는 생각에서 비롯했습니다. 지역 양조장과의 연결, 온천과의 페어링은 그 한 잔이 단순한 상품이 아니라, 이곳에서만 나누는 공동의 시간이 되도록 하기 위함입니다.', desc: '엄선된 재패니즈 위스키와 지역 사케를 베이스로 한 오리지널 칵테일.<br>조용히 흐르는 재즈 선율과 함께 어른의 시간을 즐기실 수 있습니다.', hakodateTitle: '하코다테 술', hakodateDesc: '유엔 바에서는 홋카이도·함관 지역의 지주(地酒)와 재패니즈 위스키를 중심으로 한 메뉴를 갖추고 있습니다. 현지 양조장의 사케, 지역 한정 위스키를 곁들인 오리지널 칵테일로 하코다테의 밤을 즐겨 보세요.', recommendTitle: '추천', item1Name: '함관 지주 한 잔', item1Desc: '홋카이도·함관 지역 양조장 일본주', item1Price: '1,200엔 (세금 포함)', item2Name: '재패니즈 위스키', item2Desc: '지역 한정 · 싱글 몰트', item2Price: '1,800엔 (세금 포함)', item3Name: '오리지널 칵테일', item3Desc: '지주·위스키 베이스', item3Price: '1,500엔 (세금 포함)', glassTitle: '한 잔을 담는 그릇', glassDesc: '유엔 바에서는 그 한 잔을 담기 위해 제작한 오리지널 글라스를 사용합니다. 온천과 술이 맞닿는 경계를 담는 그릇으로, 손에 잡히는 감과 입가에 닿는 선을 하나하나 맞춰 만든 잔입니다. 지주와 위스키, 칵테일을 이 잔에 담아 드립니다.' },
            footbath: {
                title: '02. 족욕에 효능',
                benefit1Title: '혈행 개선',
                benefit1Desc: '따뜻한 물에 발을 담그면 말초 혈관이 확장되어 혈액 순환이 좋아집니다.',
                benefit1TitleDetail: '혈행 촉진과 냉증 개선',
                benefit1DescDetail: '발을 따뜻하게 하면 말초에서 전신으로 혈류가 잘 돌게 됩니다.<br>냉한 발끝·발목 완화<br>서거나 걸어서 피곤한 다리 회복<br>온몸이 따뜻해지는 느낌<br>유노카와를 걸은 뒤 찾는 족욕은, 이동으로 쌓인 피로를 조용히 리셋하는 시간이 됩니다.',
                benefit2Title: '피로 회복',
                benefit2Desc: '족욕으로 근육이 이완되고 쌓인 피로가 풀려 몸이 가벼워집니다.',
                benefit2TitleDetail: '자율신경을 안정시키고, 깊은 휴식으로',
                benefit2DescDetail: '족욕에는 교감신경의 흥분을 누르고 부교감신경을 우위로 하는 작용이 있다고 합니다.<br>호흡이 자연스럽게 깊어진다<br>몸의 힘이 빠진다<br>마음이 가라앉는다<br>이는 ‘무언가를 하기’ 위함이 아니라, 아무것도 하지 않아도 되는 상태로 돌아가기 위한 시간입니다.',
                benefit3Title: '숙면·이완',
                benefit3Desc: '저녁 족욕은 심신을 진정시켜 숙면에 도움이 됩니다.',
                benefit3TitleDetail: '수면의 질을 높이기 위해',
                benefit3DescDetail: '취침 전 발을 따뜻하게 하면 몸의 리듬이 잡히고 자연스러운 잠으로 넘어가기 쉬워집니다.<br>잠들기 좋아진다<br>밤중에 눈이 뜨기 어려워진다<br>깨어날 때가 부드러워진다<br>유엔에서는 10~20분 정도의 족욕을 권합니다.'
            },
            guide: {
                flowTitle: '이용의 흐름',
                flowIntro: '湯가 풀고, 酒가 이어준다. 유엔에서는 족욕을 하면서 한 잔을 드시는 시간입니다.',
                flow1: '족욕에 들어가기<br>도착하신 후, 발을 온천물에 담그고 편히 쉬세요. 옷을 그대로 입은 채 10~20분 정도를 기준으로 이용하실 수 있습니다.<br>걸어서 지친 몸과 하루의 긴장을 천천히 풀어내는 시간입니다.',
                flow2: '한 잔 고르기<br>족욕에 발을 담그신 채로, 바 메뉴에서 음료를 골라 주세요.<br>유엔에서는 지역 주류점과 협력해, 양보다 배경과 이야기를 중시한 한 잔을 준비하고 있습니다.',
                flow3: '나만의 거리감으로 보내기<br>혼자 조용히 보내시는 분도, 누군가와 같은 공간에 계시는 분도, 보내는 방식에 정답은 없습니다.<br>말하지 않아도 되고, 말해도 됩니다. 그 선택은 이용하시는 분에게 맡깁니다.',
                stillnessTitle: '한적함을 위해',
                stillnessDesc: '유엔은 누군가에게 말을 걸어주는 것을 전제로 한 장소가 아닙니다. 조용히 보내고 싶은 분은 억지로 대화할 필요가 없습니다. 그 자리에 계시기만 하면 됩니다.'
            },
            coaster: {
                sectionTitle: '코스터',
                intro: '유엔의 코스터는 색으로 대화 언어를, 뒤집으면 고요를 전합니다.',
                red: '빨간색 — 일본어를 할 수 있습니다.',
                blue: '파란색 — 한국어를 할 수 있습니다.',
                yellow: '노란색 — 영어를 할 수 있습니다.',
                black: '뒤집어 검은 면을 보이면 — 말 걸지 말아 주세요. 혼자만의 시간을 갖고 싶을 때.',
                publicTitle: '유엔이 지향하는 공공 공간',
                publicDesc: '족욕은 연령과 성별에 관계없이 짧은 시간에 누구나 이용할 수 있는 공공성이 높은 목욕 문화입니다. 유엔은 그 특성을 살려, 지나치게 관리하지도 않고 방치하지도 않는 적당한 거리의 공공 공간을 지향합니다.'
            },
            event: {
                title: '04. 이벤트',
                eventPageTitle: '🌙 YUEN 이벤트',
                subtitle: '달을 기반으로 한 이벤트',
                number1: '1', number2: '2', number3: '3',
                intro: 'YUEN의 이벤트는 달의 리듬에 맞춰 진행됩니다.',
                newMoonTitle: '신월 — 달토끼를 찾아서',
                newMoonDesc: '신월 밤에 달토끼가 사라진다고 전해집니다.<br>작은 토끼 모티프가 공간 곳곳에 조용히 숨겨져 있습니다.<br>고객님이 우연히 발견하실 수도 있습니다.<br>부드럽게 발견하고 주의를 기울이는 밤입니다.',
                fullMoonTitle: '보름달 — 달토에게 보내는 편지',
                fullMoonDesc: '게스트는 작은 카드에 소원과 마음을 적습니다.<br>일본 에마 전통에 영감을 받은 기획입니다.',
                participateLabel: '참여 방법',
                newMoonHowTo: '<p class="mb-2">① 매장 안(메뉴판 구석, 바 선반, 정원 돌틈 등)에 숨겨진 토끼 미니어처·토끼 문양을 찾습니다.</p><p class="mb-2">② 3개 이상 찾으셨다면 찾은 것들을 사진으로 찍습니다.</p><p class="mb-2">③ 그 사진을 SNS에 올리시고, 당사 공식 계정을 태그해 주세요.</p><p class="mb-0">④ 인증해 주신 분께 위스키 샘플러 1잔을 무료로 드립니다. 매장에서 스태프에게 보여 주시면 됩니다.</p>',
                fullMoonHowTo: '<p class="mb-2">① 매장 한쪽에 비치된 작은 우체통과 \'달 토끼\' 전용 미니 엽서를 이용합니다.</p><p class="mb-2">② 위스키를 마시며 느낀 점, 소원, 하고 싶은 말 등을 엽서에 적습니다.</p><p class="mb-2">③ 적은 엽서를 매장 내 우체통에 넣어 주세요.</p><p class="mb-0">④ 추첨을 통해 당첨되시면, 다음 방문 시 사용 가능한 \'프리미엄 위스키 업그레이드 권\'을 우편으로 보내 드립니다.</p>',
                rabbitTitle: '숨은 토끼 찾기',
                rabbitDesc: '매장 곳곳(메뉴판 구석, 바 선반, 정원 돌틈 등)에 작은 토끼 미니어처·토끼 문양 인장을 숨겨두었습니다. 3개 이상 찾아 사진을 찍고 SNS에 당사 계정을 태그해 인증하시면 위스키 샘플러 1잔을 무료로 드립니다.',
                photoTitle: '포토존 — 달에 착륙한 토끼',
                photoDesc: '바 테이블 한편에 \'달에 착륙한 토끼\' 테마의 미니어처 디오라마를 설치해 두었습니다. 인스타그램에 올리기 좋은 포토 스팟입니다.',
                letterTitle: '달의 뒷면에서 온 편지',
                letterDesc: '매장 한쪽에 작은 우체통과 \'달 토끼\' 전용 미니 엽서를 비치했습니다. 위스키를 마시며 느낀 점이나 소원을 적어 우체통에 넣어 주세요. 일본의 에마(絵馬) 문화와 맞닿아, 추첨을 통해 다음 방문 시 사용 가능한 \'프리미엄 위스키 업그레이드 권\'을 우편으로 보내 드립니다.'
            },
            location: {
                title: '위치',
                previewTitle: '공간 미리보기',
                criteriaTitle: '장소 선정 기준',
                criteria1: '유엔은 「온천의 신」과 「술의 신」이 마주하는 경계에 서 있습니다. 그 경계를 느끼실 수 있는 장소를 찾았습니다.',
                criteria2: '하코다테 湯の川(유노카와)는 온천이 흐르는 거리입니다. 그 한복판이 아니라, 조용한 골목 한쪽을 택했습니다. 낮의 온천 거리와 밤의 한 잔이 맞닿는, 말하지 않고 지켜보는 공간이 되려 했습니다.',
                criteria3: '왼쪽에는 수증기와 붉은 빛, 오른쪽에는 앰버와 등불 그 사이를 지나는 시간만이 당신만의 고요가 됩니다. 이 골목은 그 고요를 담기에 맞는 장소입니다.',
                accessTitle: '오는 길',
                access1: '函館市電(하코다테 시영 전차) 「湯の川温泉」 정류장에서 하차 후 도보 약 7분. 온천 거리에서 바다 쪽 골목으로 들어가시면 됩니다.',
                access2: '函館駅(하코다테 역)에서 버스 「湯の川温泉」 행 약 25분, 종점 인근 하차 후 도보 5분.',
                access3: '승용차 이용 시 주변에 협력 주차장이 있습니다. 예약 시 안내해 드립니다.'
            },
            footer: { address: '홋카이도 하코다테시 유노카와초 조용한 골목 123-4', copyright: '© 2024 YUEN 湯縁 ONSEN & BAR. 저작권 소유.' },
            yang: { title: '양조장과 연계한 하코다테 술', intro: '유엔 바의 하코다테 술은 현지 양조장과 직접 연계하여 가져옵니다. 홋카이도·함관 일대의 사케 양조장, 증류소와 협력하여 그때그때 맛과 품질을 확인한 뒤 선별한 지주(地酒)와 위스키만을 올립니다.', para1: '양조장 방문과 시음을 통해 신뢰할 수 있는 파트너만 골라, 바에서 제공하는 한 잔까지 이어지는 흐름을 지키고 있습니다. 그래서 고객님께는 이 지역에서만 맛볼 수 있는 한 잔을 그대로 전해 드릴 수 있습니다.', para2: '하코다테의 밤을, 현지 양조장과 이어지는 한 잔으로 즐겨 보세요.' }
        },
        ja: {
            nav: { concept: 'コンセプト', onsen: '温泉', bar: 'バー', event: 'イベント', coaster: 'こだわり', location: 'ロケーション' },
            concept: {
                sloganJa: '湯がほどき、酒がつなぐ',
                sloganKo: '湯がほどき、酒がつなぐ（温泉が解き、酒が繋ぐ）',
                para1: '水と湯気が体の結び目をほどき、一杯のウイスキーが一日をつなぐ。湯縁は「湯の神」と「酒の神」が向き合う境界に立っています。',
                para2: '左には青い光と蒸気、右には琥珀と灯り。その間を過ごす時間だけが、あなただけの静寂になります。',
                para3: '私たちはその境界を守る媒介者です。語らず、ただ見守ります。',
                mediator: '私たちは、あなたの静寂を見守る観察者です。<br>神の媒介者(Mediator)として、ただここにいるだけです。'
            },
            hero: { tagline: 'PREMIUM RELAXATION', title: '月明かりの下で、<br>温泉とウイスキーの変奏', desc: '温かな温泉で体をほぐし、上品なバーで職人のカクテルを。 <br>あなただけの完璧な夜のくつろぎが始まります。', cta: 'ご予約' },
            onsen: { title: '01. 湯 (Onsen)', footbathPageTitle: '足湯温泉', footbathIntro: '湯縁では北海道・函館の湯の川の天然温泉を使った足湯をご案内しています。屋外で夜風とともに足を浸し、くつろぎの時間をお過ごしください。足湯の効能は下記をご覧ください。', vizTitle: '湯と一杯のシナジー', vizSubtitle: '足湯とバーで得られる効果', vizMatch: '酒と温泉の相性', vizRelax: 'リラックス効果', vizEmotional: '情緒の安定', vizCirculation: '血行・疲労改善', vizSleep: '安眠', title1: '温かみのある湯', desc1: '湯の川の天然温泉。約40℃の湯で足元からゆっくりとほぐれていきます。', title2: '開放感のある空間', desc2: '屋外の足湯スペース。夜風と共に、開放的なひとときをお過ごしください。', title3: '旅の疲れを癒す', desc3: '歩き疲れた足を、温かい湯に浸けて。函館の夜を、ゆったりと。', desc: '日本の伝統木造様式の美学を込めました。ヒノキの香りがほのかに広がる露天風呂で、日常の喧騒を忘れ、四季の風を感じてください。' },
            bar: { title: '03. 酒 (Bar)', programIntro: '湯縁バーは地域ベースの飲料キュレーション体系に基づいて運営しています。', frameworkTitle: 'バープログラム構成', section1Title: '選定基準', section1Desc: '地元の蔵元・蒸留所との直接連携、品質検証（試飲・成分）、地域限定（地酒・限定）条件を満たす品目のみを選定します。', section2Title: 'カテゴリー体系', section2Desc: '地酒、ジャパニーズウイスキー、オリジナルカクテルに区分し、各カテゴリーごとに産地・特性に応じた一貫した分類を適用します。', section3Title: '温泉とのペアリング', section3Desc: '足湯後の弛緩・血行改善状態における少量飲酒を前提に、強度・温度・味のバランスを考慮したメニュー構成を原則とします。', publicTitle: 'ともに開く一杯', publicDesc: '湯縁バーはひとりの夜だけの場ではなく、街と旅人が出会う場所です。上の選定基準やメニュー構成は、「誰もが同じ基準で一杯を受け取れるように」という考えに基づいています。地元蔵元とのつながり、温泉とのペアリングは、その一杯を単なる商品ではなく、ここでしか交わさない共有の時間にするためのものです。', desc: '厳選されたジャパニーズウイスキーと地酒をベースにしたオリジナルカクテル。<br>静かに流れるジャズとともに、大人の時間をお楽しみいただけます。', hakodateTitle: '函館の酒', hakodateDesc: '湯縁のバーでは北海道・函館の地酒とジャパニーズウイスキーを中心にしたラインナップをご用意しています。地元蔵元の日本酒や地域限定ウイスキーを使ったオリジナルカクテルで、函館の夜をお楽しみください。', recommendTitle: 'おすすめ', item1Name: '函館地酒 一杯', item1Desc: '北海道・函館の地元蔵元の日本酒', item1Price: '1,200円（税込）', item2Name: 'ジャパニーズウイスキー', item2Desc: '地域限定・シングルモルト', item2Price: '1,800円（税込）', item3Name: 'オリジナルカクテル', item3Desc: '地酒・ウイスキーベース', item3Price: '1,500円（税込）', glassTitle: '一杯を注ぐ器', glassDesc: '湯縁バーでは、その一杯のために作ったオリジナルグラスをご用意しています。湯と酒が接する境界を包む器として、手に馴染む形と口当たりの線をひとつずつ調整して仕上げました。地酒もウイスキーもカクテルも、この器に注いでお出しします。' },
            footbath: {
                title: '02. 足湯の効能',
                benefit1Title: '血行促進と冷えの改善',
                benefit1Desc: '温かい湯に足を浸すと末梢血管が広がり、血流がよくなります。',
                benefit1TitleDetail: '血行促進と冷えの改善',
                benefit1DescDetail: '足元を温めることで、 末端から全身へと血流が巡りやすくなります。<br>冷えやすい足先・足首の緩和<br>立ち仕事や歩き疲れた脚の回復<br>体全体がじんわり温まる感覚<br>湯の川を歩いたあとに立ち寄る足湯は、 移動による疲れを静かにリセットする時間になります。',
                benefit2Title: '自律神経を整え、深い休息へ',
                benefit2Desc: '足湯で筋肉がほぐれ、溜まった疲れが取れて体が軽くなります。',
                benefit2TitleDetail: '自律神経を整え、深い休息へ',
                benefit2DescDetail: '足湯には、 交感神経の高ぶりを抑え、 副交感神経を優位にする働きがあるといわれています。<br>呼吸が自然に深くなる<br>身体の力が抜ける<br>気持ちが落ち着く<br>これは、 「何かをする」ためではなく、 何もしなくてもよい状態に戻るための時間です。',
                benefit3Title: '睡眠の質を高めるために',
                benefit3Desc: '夜の足湯は心身を落ち着かせ、質のよい睡眠に役立ちます。',
                benefit3TitleDetail: '睡眠の質を高めるために',
                benefit3DescDetail: '就寝前に足元を温めることで、 身体のリズムが整いやすくなり、 自然な眠りへと移行しやすくなります。<br>寝つきがよくなる<br>夜中に目が覚めにくくなる<br>目覚めが穏やかになる<br>湯縁では、 10〜20分程度の足湯を目安としています。'
            },
            guide: {
                flowTitle: '利用の流れ',
                flowIntro: '湯がほどき、酒がつなぐ。湯縁では足湯をしながら一杯を楽しむ時間です。',
                flow1: '足湯に入る<br>ご来店後、足元を温泉につけてお過ごしください。 服を着たまま、10〜20分ほどを目安にご利用いただけます。<br>歩き疲れた身体や、 一日の緊張を、ゆっくりとほどく時間です。',
                flow2: '一杯を選ぶ<br>足湯に入りながら、 バーメニューからお飲み物をお選びください。<br>湯縁では、 地元の酒屋さんと協力し、 量よりも背景や物語を大切にした一杯をご用意しています。',
                flow3: '自分の距離感で過ごす<br>一人で静かに過ごす方も、 誰かと同じ空間に居合わせる方も、過ごし方に正解はありません。<br>話さなくてもいいし、 話してもいい。 その選択を、利用者自身に委ねています。',
                stillnessTitle: '静寂のために',
                stillnessDesc: '湯縁は、 誰かに話しかけられることを前提とした場所ではありません。静かに過ごしたい方は、 無理に会話をする必要はありません。 その場に居るだけで、十分です。'
            },
            coaster: {
                sectionTitle: 'コースター',
                intro: '湯縁のコースターは、色で話す言語を、裏返しで静寂を伝えます。',
                red: '赤 — 日本語ができます。',
                blue: '青 — 韓国語ができます。',
                yellow: '黄 — 英語ができます。',
                black: '裏返して黒い面を見せたら — 話しかけないで。ひとりの時間が欲しいとき。',
                publicTitle: '湯縁が目指す公共空間',
                publicDesc: '足湯は、<br>年齢や性別を問わず<br>短時間で<br>誰でも利用できる<br>公共性の高い入浴文化です。<br>湯縁はその特性を活かし、 管理しすぎず、放置もしない ちょうどいい距離の公共空間を目指しています。'
            },
            event: {
                title: '04. イベント',
                eventPageTitle: '🌙 YUEN イベント',
                subtitle: '月を基にしたイベント',
                number1: '一', number2: '二', number3: '三',
                intro: 'YUENのイベントは月のリズムに合わせて行われます。',
                newMoonTitle: '新月 — 月のウサギを探して',
                newMoonDesc: '新月の夜、月のウサギが消えると言い伝えられています。<br>小さなウサギのモチーフが空間のあちこちに静かに隠れています。<br>お客様がふと見つけられるかもしれません。<br>優しく発見し、心を寄せる夜です。',
                fullMoonTitle: '満月 — 月のウサギへの手紙',
                fullMoonDesc: 'ゲストは小さなカードに願いや想いを綴ります。<br>日本の絵馬文化に着想を得た企画です。',
                participateLabel: '参加方法',
                newMoonHowTo: '<p class="mb-2">① 店内（メニュー表のすみ、バーの棚、庭の石のすき間など）に隠れたウサギのミニチュア・ウサギの紋様を探します。</p><p class="mb-2">② 3つ以上見つけたら、見つけたものを写真に撮ります。</p><p class="mb-2">③ その写真をSNSに投稿し、当店公式アカウントをタグしてください。</p><p class="mb-0">④ ご応募いただいた方に、ウイスキーサンプラー1杯を無料でプレゼント。店内でスタッフにお見せください。</p>',
                fullMoonHowTo: '<p class="mb-2">① 店内の一角に用意した小さなポストと「月のウサギ」専用ミニはがきをご利用ください。</p><p class="mb-2">② ウイスキーを飲みながら感じたこと、願い事、伝えたいことなどをはがきに書きます。</p><p class="mb-2">③ 書いたはがきを店内のポストに投函してください。</p><p class="mb-0">④ 抽選で当選された方には、次回ご来店時に使える「プレミアムウイスキーアップグレード券」を郵送でお届けします。</p>',
                rabbitTitle: '隠れたウサギさがし',
                rabbitDesc: '店内のあちこち（メニュー表のすみ、バーの棚、庭の石のすき間など）に、小さなウサギのミニチュアやウサギの紋様スタンプを隠しています。3つ以上見つけて写真を撮り、SNSで当店アカウントをタグしてご応募いただいた方に、ウイスキーサンプラー1杯を無料でプレゼントします。',
                photoTitle: 'フォトゾーン — 月に着陸したウサギ',
                photoDesc: 'バーテーブルの一角に「月に着陸したウサギ」をテーマにしたミニチュアジオラマを設置しています。インスタグラムにぴったりのフォトスポットです。',
                letterTitle: '月の裏側からの手紙',
                letterDesc: '店内の一角に小さなポストと「月のウサギ」専用ミニはがきを用意しています。ウイスキーを飲みながら感じたことや願い事を書いて、ポストへ投函してください。日本の絵馬文化にちなみ、抽選で次回ご来店時に使える「プレミアムウイスキーアップグレード券」を郵送でお届けします。'
            },
            reservation: { intro: '温泉・バーご利用のご予約・お問い合わせは下記までお願いいたします。', hours: '受付時間: 10:00–20:00（年中無休）', tel: 'TEL: 075-XXX-XXXX', note: '温泉・バーとも当日予約可能です。団体のご利用は事前にお問い合わせください。' },
            location: {
                title: 'ロケーション',
                previewTitle: '空間の眺望',
                criteriaTitle: '場所選定の理由',
                criteria1: '湯縁は「湯の神」と「酒の神」が向き合う境界に立っています。その境界を感じていただける場所を選びました。',
                criteria2: '函館・湯の川は温泉の流れる街です。その表通りではなく、静かな路地の一角を選びました。昼の温泉街と夜の一杯が接する、語らずただ見守る空間であるために。',
                criteria3: '左には湯気と赤い光、右には琥珀と灯り—その間を過ごす時間だけが、あなただけの静寂になります。この路地は、その静寂を届けるにふさわしい場所です。',
                accessTitle: 'アクセス',
                access1: '函館市電「湯の川温泉」電停下車、徒歩約7分。温泉街から海側の路地へお入りください。',
                access2: '函館駅からバス「湯の川温泉」行き約25分、終点付近下車後徒歩5分。',
                access3: 'お車の場合は近隣提携駐車場がございます。ご予約時にご案内いたします。'
            },
            footer: { address: '北海道函館市湯川町静かな路地 123-4', copyright: '© 2024 YUEN 湯縁 ONSEN & BAR. 著作権所有.' },
            yang: { title: '蔵元とつながる函館の酒', intro: '湯縁のバーでご提供する函館の酒は、地元の蔵元と直接提携して仕入れています。北海道・函館の日本酒蔵や蒸留所と連携し、味と品質をその都度確認したうえで厳選した地酒とウイスキーだけを並べています。', para1: '蔵元への訪問や試飲を通じて信頼できるパートナーだけを選び、バーで出す一杯までつながる流れを守っています。だからこそ、お客様には「この地域でしか味わえない一杯」をそのままお届けできます。', para2: '函館の夜を、地元の蔵元とつながる一杯でお楽しみください。' }
        },
        en: {
            nav: { concept: 'CONCEPT', onsen: 'ONSEN', bar: 'BAR', event: 'EVENT', coaster: 'FEATURE', location: 'LOCATION' },
            concept: {
                sloganJa: 'The spring loosens; the drink connects.',
                sloganKo: 'The spring loosens; the drink connects.',
                para1: 'Water and steam loosen the body, one glass of whiskey connects the day. YUEN stands at the boundary where the god of the spring and the god of drink meet.',
                para2: 'To the left, blue light and vapour; to the right, amber and lamplight. Only the time you spend between them becomes your own stillness.',
                para3: 'We are the mediators of that boundary. We do not speak—we only watch.',
                mediator: 'We are the observers who watch over your stillness.<br>As mediators of the gods, we are simply here.'
            },
            hero: { tagline: 'PREMIUM RELAXATION', title: 'Under the moonlight,<br> variations of onsen & whiskey', desc: 'Soak in warm spring water, savor artisan cocktails at an elegant bar. <br>Your perfect night of rest begins here.', cta: 'Reserve' },
            onsen: { title: '01. Onsen', footbathPageTitle: 'Foot bath onsen', footbathIntro: 'At YUEN we offer foot baths using natural hot-spring water from Yunokawa, Hakodate, Hokkaido. Soak your feet outdoors with the night breeze. See below for the benefits of our foot bath.', vizTitle: 'Onsen & a drink — the synergy', vizSubtitle: 'Effects of foot bath and a drink at the bar', vizMatch: 'Onsen & alcohol pairing', vizRelax: 'Relaxation', vizEmotional: 'Emotional stability', vizCirculation: 'Circulation & fatigue relief', vizSleep: 'Better sleep', title1: 'Warm spring water', desc1: 'Natural hot springs of Yunokawa. Let the ~40°C water slowly ease you from your feet up.', title2: 'Open, airy space', desc2: 'Outdoor footbath area. Enjoy an open moment with the night breeze.', title3: 'Soothe your journey', desc3: 'Soak your tired feet in warm water. A relaxed evening in Hakodate.', desc: 'We\'ve captured the aesthetics of traditional Japanese wood architecture. Forget the noise of daily life in our cypress-scented outdoor bath and feel the breeze of the seasons.' },
            bar: { title: '03. Bar', programIntro: 'YUEN Bar operates on a regional beverage curation system.', frameworkTitle: 'Bar program structure', section1Title: 'Selection criteria', section1Desc: 'Only items that meet direct partnership with local breweries and distilleries, quality verification (tasting and composition), and regional or limited-edition status are selected.', section2Title: 'Category system', section2Desc: 'Menu is classified into local sake (jizake), Japanese whisky, and original cocktails, with consistent categorization by origin and character within each category.', section3Title: 'Pairing with onsen', section3Desc: 'Menu design follows the principle of balance in strength, temperature, and taste, on the premise of moderate consumption after foot-bath-induced relaxation and improved circulation.', publicTitle: 'A drink we open together', publicDesc: 'YUEN Bar is not only a place for one person’s night—it is where the neighbourhood and the traveller meet. The selection criteria and menu structure above come from the idea that everyone should be able to receive that one drink on the same terms. Our ties to local breweries and our pairing with the onsen are so that drink is not merely a product, but a shared moment that exists only here.', desc: 'Original cocktails featuring selected Japanese whiskey and local sake.<br>Enjoy an adult moment with the gentle flow of jazz.', hakodateTitle: 'Hakodate Sake & Spirits', hakodateDesc: 'At YUEN Bar we focus on Hokkaido and Hakodate local sake and Japanese whisky. Enjoy the night with our original cocktails made with regional sake and limited-edition whiskies.', recommendTitle: 'Recommended', item1Name: 'Hakodate local sake', item1Desc: 'Hokkaido · Hakodate jizake', item1Price: '¥1,200 (tax incl.)', item2Name: 'Japanese whisky', item2Desc: 'Regional limited · single malt', item2Price: '¥1,800 (tax incl.)', item3Name: 'Original cocktail', item3Desc: 'Sake or whisky base', item3Price: '¥1,500 (tax incl.)', glassTitle: 'The vessel for your drink', glassDesc: 'At YUEN Bar we serve your drink in an original glass made for that purpose. As a vessel that holds the boundary between the spring and the spirit, each curve was shaped for the hand and the lip. We pour our local sake, whisky, and cocktails into this glass.' },
            footbath: {
                title: '02. Benefits of foot bath',
                benefit1Title: 'Better circulation',
                benefit1Desc: 'Warm water widens blood vessels in the feet and improves blood flow.',
                benefit1TitleDetail: 'Better circulation & relief from cold',
                benefit1DescDetail: 'Warming your feet helps blood flow more easily from the extremities to the whole body.<br>Relief for cold toes and ankles<br>Recovery for legs tired from standing or walking<br>A sense of warmth spreading through the body<br>A foot bath after a walk around Yunokawa is a quiet moment to reset the fatigue of the day.',
                benefit2Title: 'Relief from fatigue',
                benefit2Desc: 'A foot soak relaxes muscles and eases tiredness so you feel lighter.',
                benefit2TitleDetail: 'Calming the nervous system, toward deep rest',
                benefit2DescDetail: 'Foot baths are said to ease sympathetic arousal and encourage the parasympathetic system.<br>Breathing naturally deepens<br>Physical tension eases<br>Your mind settles<br>This is not a time to “do something”—it is a time to return to a state where you need do nothing.',
                benefit3Title: 'Sleep & relaxation',
                benefit3Desc: 'An evening foot bath helps calm body and mind for better sleep.',
                benefit3TitleDetail: 'For better sleep quality',
                benefit3DescDetail: 'Warming your feet before bed helps align your body’s rhythm and ease the transition into natural sleep.<br>Falling asleep becomes easier<br>Waking in the night becomes less likely<br>Waking in the morning feels gentler<br>At YUEN we suggest about 10–20 minutes for the foot bath.'
            },
            guide: {
                flowTitle: 'How to use the space',
                flowIntro: 'The spring loosens; the drink connects. At YUEN you enjoy a drink while soaking your feet.',
                flow1: 'Soak your feet<br>After you arrive, rest with your feet in the hot spring. You can use the foot bath for about 10–20 minutes while fully clothed.<br>A time to slowly ease the fatigue of walking and the tension of the day.',
                flow2: 'Choose a drink<br>While in the foot bath, choose a drink from the bar menu.<br>At YUEN we work with local sake and spirit makers to offer drinks we value for their story and place, not just quantity.',
                flow3: 'Find your own pace<br>Whether you prefer to sit in silence or share the space with others, there is no single “right” way to be here.<br>You don’t have to talk, and you can talk if you like. That choice is yours.',
                stillnessTitle: 'For your stillness',
                stillnessDesc: 'YUEN is not a place that assumes you will be spoken to. If you want to spend your time in silence, you don\'t have to make conversation. Simply being there is enough.'
            },
            coaster: {
                sectionTitle: 'Coaster',
                intro: 'YUEN coasters tell your language by colour, and quiet by turning over.',
                red: 'Red — I can speak Japanese.',
                blue: 'Blue — I can speak Korean.',
                yellow: 'Yellow — I can speak English.',
                black: 'Black side up — Please don’t speak to me. When you want time alone.',
                publicTitle: 'The kind of public space YUEN aims for',
                publicDesc: 'Foot baths are a highly accessible bathing culture: anyone can use them for a short time, regardless of age or gender.<br>YUEN aims to be a public space at the right distance—neither over-managed nor neglected—by drawing on that character.'
            },
            event: {
                title: '04. Event',
                eventPageTitle: '🌙 YUEN Event',
                subtitle: 'Events based on the moon',
                number1: '1', number2: '2', number3: '3',
                intro: 'YUEN events follow the rhythm of the moon.',
                newMoonTitle: 'New Moon — Finding the Moon Rabbit',
                newMoonDesc: 'Legend says the moon rabbit disappears on the night of the new moon.<br>Small rabbit motifs are quietly hidden throughout the space.<br>You might discover them by chance.<br>A night to notice gently and pay attention.',
                fullMoonTitle: 'Full Moon — Letter to the Moon Rabbit',
                fullMoonDesc: 'Guests write their wishes and thoughts on a small card.<br>Inspired by the Japanese ema (votive plaque) tradition.',
                participateLabel: 'How to participate',
                newMoonHowTo: '<p class="mb-2">① Look for hidden rabbit miniatures and rabbit motifs around the bar (menu corners, bar shelves, garden stone gaps, etc.).</p><p class="mb-2">② If you find 3 or more, take a photo of what you found.</p><p class="mb-2">③ Post the photo on SNS and tag our official account.</p><p class="mb-0">④ We\'ll give you one free whiskey sampler. Show your post to our staff in the bar.</p>',
                fullMoonHowTo: '<p class="mb-2">① Use the small mailbox and "moon rabbit" mini postcards placed in one corner of the bar.</p><p class="mb-2">② Write your thoughts, wishes, or messages on the postcard while enjoying your whiskey.</p><p class="mb-2">③ Drop the postcard into the mailbox inside the bar.</p><p class="mb-0">④ Winners in our draw will receive a "Premium Whiskey Upgrade" voucher by mail for use on your next visit.</p>',
                rabbitTitle: 'Hidden Rabbit Hunt',
                rabbitDesc: 'We\'ve hidden small rabbit miniatures and rabbit-pattern stamps around the bar—menu corners, shelves, garden stone gaps, and more. Find 3 or more, take a photo, tag our account on SNS to verify, and receive one free whiskey sampler.',
                photoTitle: 'Photo Zone — Rabbit on the Moon',
                photoDesc: 'A miniature diorama themed "rabbit landed on the moon" is set up at one corner of the bar. A perfect Instagram-ready photo spot.',
                letterTitle: 'Letter from the Far Side of the Moon',
                letterDesc: 'A small mailbox and "moon rabbit" mini postcards are placed in one corner. Write your thoughts or wishes while enjoying whiskey and drop them in the box. In the spirit of Japan\'s ema (wish plaque) culture, we\'ll hold a draw and send winners a "Premium Whiskey Upgrade" voucher by mail for use on your next visit.'
            },
            location: {
                title: 'LOCATION',
                previewTitle: 'View of the space',
                criteriaTitle: 'Why this place',
                criteria1: 'YUEN stands at the boundary where the god of the spring and the god of drink meet. We chose a place where you can feel that boundary.',
                criteria2: 'Hakodate Yunokawa is a town where the hot spring flows. We did not choose the main street but a quiet alley. So that the space remains a mediator between the daytime onsen district and the evening drink—we do not speak; we only watch.',
                criteria3: 'To the left, steam and reddish light; to the right, amber and lamplight. Only the time you spend between them becomes your own stillness. This alley is the right place to hold that stillness.',
                accessTitle: 'How to get here',
                access1: 'By tram: Get off at Hakodate City Tram «Yunokawa Onsen» stop, about 7 min on foot. From the onsen street, turn into the alley toward the sea.',
                access2: 'By bus: From Hakodate Station, take the bus bound for «Yunokawa Onsen» (about 25 min). Get off near the terminus, then about 5 min on foot.',
                access3: 'By car: Partner parking available nearby. We will guide you when you reserve.'
            },
            footer: { address: '123-4, Shizukana Roji, Yunokawa-cho, Hakodate, Hokkaido', copyright: '© 2024 YUEN 湯縁 ONSEN & BAR. All Rights Reserved.' },
            yang: { title: 'Hakodate Sake — Tied to Local Breweries', intro: 'The Hakodate sake and spirits at YUEN Bar are sourced through direct partnerships with local breweries. We work with sake breweries and distilleries across Hokkaido and Hakodate, tasting and checking quality each time, and only then selecting the local sake and whisky we serve.', para1: 'By visiting breweries and tasting together, we choose only partners we trust and keep that connection alive all the way to the glass we serve. That is how we can offer you a drink you can only taste in this region.', para2: 'Enjoy the night in Hakodate with a drink that connects you to local breweries.' }
        }
    };

    const select = document.getElementById('lang-select');
    const selectMobile = document.getElementById('lang-select-mobile');
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && locales[saved]) {
        if (select) select.value = saved;
        if (selectMobile) selectMobile.value = saved;
    }

    function syncLangSelects() {
        if (select && selectMobile) selectMobile.value = select.value;
    }
    if (select) {
        select.addEventListener('change', function() {
            const lang = this.value;
            localStorage.setItem(STORAGE_KEY, lang);
            applyLang(lang);
            if (selectMobile) selectMobile.value = lang;
        });
    }
    if (selectMobile) {
        selectMobile.addEventListener('change', function() {
            const lang = this.value;
            localStorage.setItem(STORAGE_KEY, lang);
            applyLang(lang);
            if (select) select.value = lang;
        });
    }

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

    applyLang(select ? select.value : (selectMobile && selectMobile.value) || 'ko');
    syncLangSelects && syncLangSelects();

    var navToggle = document.getElementById('nav-toggle');
    var navPanel = document.getElementById('nav-mobile-panel');
    if (navToggle && navPanel) {
        function openNav() {
            document.body.classList.add('nav-mobile-open');
            navPanel.classList.add('is-open');
            navToggle.setAttribute('aria-label', '메뉴 닫기');
            navToggle.setAttribute('aria-expanded', 'true');
        }
        function closeNav() {
            document.body.classList.remove('nav-mobile-open');
            navPanel.classList.remove('is-open');
            navToggle.setAttribute('aria-label', '메뉴 열기');
            navToggle.setAttribute('aria-expanded', 'false');
        }
        navToggle.addEventListener('click', function() {
            if (navPanel.classList.contains('is-open')) closeNav();
            else openNav();
        });
        navPanel.querySelectorAll('.nav-link').forEach(function(a) {
            a.addEventListener('click', closeNav);
        });
        navPanel.addEventListener('click', function(e) {
            if (e.target === navPanel) closeNav();
        });
    }

    (function eventDetailPanel() {
        var listView = document.getElementById('event-list-view');
        var detailView = document.getElementById('event-detail-view');
        if (!listView || !detailView) return;

        var body = document.body;
        var closeBtn = detailView.querySelector('.event-detail-close');
        var contentBlocks = detailView.querySelectorAll('.event-detail-content');

        function openDetail(eventId) {
            body.classList.add('event-detail-open');
            detailView.classList.add('is-open');
            detailView.setAttribute('aria-hidden', 'false');
            contentBlocks.forEach(function(block) {
                block.hidden = block.getAttribute('data-event-id') !== eventId;
            });
        }
        function closeDetail() {
            body.classList.remove('event-detail-open');
            detailView.classList.remove('is-open');
            detailView.setAttribute('aria-hidden', 'true');
        }

        listView.querySelectorAll('.event-row').forEach(function(row) {
            var eventId = row.getAttribute('data-event-id');
            if (!eventId) return;
            row.addEventListener('click', function() { openDetail(eventId); });
            row.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(eventId); }
            });
        });
        if (closeBtn) closeBtn.addEventListener('click', closeDetail);
        detailView.addEventListener('click', function(e) {
            if (e.target === detailView) closeDetail();
        });
    })();

    (function onsenDetailPanel() {
        var listView = document.getElementById('onsen-list-view');
        var detailView = document.getElementById('onsen-detail-view');
        if (!listView || !detailView) return;

        var body = document.body;
        var closeBtn = detailView.querySelector('.onsen-detail-close');
        var contentBlocks = detailView.querySelectorAll('.onsen-detail-content');

        function openDetail(benefitId) {
            body.classList.add('onsen-detail-open');
            detailView.classList.add('is-open');
            detailView.setAttribute('aria-hidden', 'false');
            contentBlocks.forEach(function(block) {
                block.hidden = block.getAttribute('data-benefit-id') !== benefitId;
            });
        }
        function closeDetail() {
            body.classList.remove('onsen-detail-open');
            detailView.classList.remove('is-open');
            detailView.setAttribute('aria-hidden', 'true');
        }

        listView.querySelectorAll('.onsen-benefit-row').forEach(function(row) {
            var benefitId = row.getAttribute('data-benefit-id');
            if (!benefitId) return;
            row.addEventListener('click', function() { openDetail(benefitId); });
            row.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(benefitId); }
            });
        });
        if (closeBtn) closeBtn.addEventListener('click', closeDetail);
        detailView.addEventListener('click', function(e) {
            if (e.target === detailView) closeDetail();
        });
    })();

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
