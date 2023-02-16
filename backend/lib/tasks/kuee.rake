namespace :kuee do
  desc '京大電電研究室配属用のデータを作成する'
  task create_kuee_labs: :environment do
    survey = Survey.create(name: '京都大学工学部電気電子工学科B3研究室配属', max_request: 8)
    # 工学研究科
    # 電気工学
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電気工学',
                                            course: '先端電気システム論', major: '', order: 1)
    laboratory.teachers.create(name: '引原 隆士', position: '教授(兼任)')
    laboratory.teachers.create(name: '薄 良彦', position: '准教授')
    laboratory.teachers.create(name: '持山 志宇', position: '助教')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電気工学',
                                            course: 'システム基礎論', major: '自動制御工学', order: 2)
    laboratory.teachers.create(name: '萩原 朋道', position: '教授')
    laboratory.teachers.create(name: '細江 陽平', position: '講師')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電気工学',
                                            course: 'システム基礎論', major: 'システム創成論', order: 3)
    laboratory.teachers.create(name: '阪本 卓也', position: '教授')
    laboratory.teachers.create(name: '田中 裕士', position: '助教')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電気工学',
                                            course: '生体医工学', major: '複合システム論', order: 4)
    laboratory.teachers.create(name: '土居 伸二', position: '教授')
    laboratory.teachers.create(name: '田中 俊二', position: '准教授')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電気工学',
                                            course: '生体医工学', major: '生体機能工学', order: 5)
    laboratory.teachers.create(name: '伊藤 陽介', position: '講師')
    laboratory.teachers.create(name: '上田 博之', position: '助教')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電気工学',
                                            course: '電磁工学', major: '超伝導工学', order: 6)
    laboratory.teachers.create(name: '雨宮 尚之', position: '教授')
    laboratory.teachers.create(name: '曽我部 友輔', position: '助教')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電気工学',
                                            course: '電磁工学', major: '電磁回路工学', order: 7)
    laboratory.teachers.create(name: '久門 尚史', position: '准教授')
    laboratory.teachers.create(name: 'イスラム マーフズル', position: '講師')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電気工学',
                                            course: '電磁工学', major: '電磁エネルギー工学', order: 8)
    laboratory.teachers.create(name: '松尾 哲司', position: '教授')
    laboratory.teachers.create(name: '美舩 健', position: '講師')
    laboratory.teachers.create(name: '比留間 真悟', position: '助教')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電気工学',
                                            course: '電波工学', major: '宇宙電波工学', order: 9)
    laboratory.teachers.create(name: '小嶋 浩嗣', position: '教授')
    laboratory.teachers.create(name: '栗田 怜', position: '准教授')
    laboratory.teachers.create(name: '上田 義勝', position: '助教')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電気工学',
                                            course: '電波工学', major: 'マイクロ波エネルギー伝送', order: 10)
    laboratory.teachers.create(name: '篠原 真毅', position: '教授')
    laboratory.teachers.create(name: '三谷 友彦', position: '准教授')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電気工学',
                                            course: '電波工学', major: '電波科学シミュレーション', order: 11)
    laboratory.teachers.create(name: '海老原 祐輔', position: '准教授')
    # 電子工学
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電子工学',
                                            course: '集積機能工学', major: '', order: 12)
    laboratory.teachers.create(name: '米澤 進吾', position: '教授')
    laboratory.teachers.create(name: '掛谷 一弘', position: '准教授')
    laboratory.teachers.create(name: '後藤 康仁', position: '准教授')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電子工学',
                                            course: '電子物理工学', major: '極微電子工学', order: 13)
    laboratory.teachers.create(name: '白石 誠司', position: '教授')
    laboratory.teachers.create(name: '安藤 裕一郎', position: '准教授')
    laboratory.teachers.create(name: '大島 諒', position: '助教')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電子工学',
                                            course: '電子物理工学', major: '応用量子物性', order: 14)
    laboratory.teachers.create(name: '竹内 繁樹', position: '教授')
    laboratory.teachers.create(name: '岡本 亮', position: '准教授')
    laboratory.teachers.create(name: '衞藤 雄二郎', position: '准教授')
    laboratory.teachers.create(name: '高島 秀聡', position: '助教')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電子工学',
                                            course: '電子物性工学', major: '半導体物性工学', order: 15)
    laboratory.teachers.create(name: '木本 恒暢', position: '教授')
    laboratory.teachers.create(name: '金子 光顕', position: '助教')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電子工学',
                                            course: '電子物性工学', major: '電子材料物性工学', order: 16)
    laboratory.teachers.create(name: '小林 圭', position: '准教授')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電子工学',
                                            course: '量子機能工学', major: '光材料物性工学', order: 17)
    laboratory.teachers.create(name: '川上 養一', position: '教授')
    laboratory.teachers.create(name: '船戸 充', position: '准教授')
    laboratory.teachers.create(name: '石井 良太', position: '助教')
    laboratory.teachers.create(name: '松田祥伸', position: '特定助教')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電子工学',
                                            course: '電子機能工学', major: '光量子電子工学', order: 18)
    laboratory.teachers.create(name: '野田 進', position: '教授')
    laboratory.teachers.create(name: '浅野 卓', position: '准教授')
    laboratory.teachers.create(name: '吉田 昌宏', position: '助教')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電子工学',
                                            course: '電子機能工学', major: '量子電磁工学', order: 19)
    laboratory.teachers.create(name: '杉山 和彦', position: '准教授')
    laboratory.teachers.create(name: '中西 俊博', position: '講師')
    laboratory = survey.laboratories.create(university: '京都大学', department: '工学研究科', field: '電子工学',
                                            course: '高機能材料工学', major: 'ナノプロセス工学', order: 20)
    laboratory.teachers.create(name: 'Menaka De Zoysa', position: '講師')
    laboratory.teachers.create(name: '井上 卓也', position: '助教')

    # 情報学研究科
    # 知能情報学専攻
    laboratory = survey.laboratories.create(university: '京都大学', department: '情報学研究科', field: '知能情報学',
                                            course: '知能メディア', major: '言語メディア', order: 21)
    laboratory.teachers.create(name: '黒橋 禎夫', position: '特定教授')
    laboratory.teachers.create(name: '褚 晨翬', position: '特定准教授')
    laboratory.teachers.create(name: '村脇 有吾', position: '講師')
    laboratory = survey.laboratories.create(university: '京都大学', department: '情報学研究科', field: '知能情報学',
                                            course: '知能メディア', major: 'コンピュータビジョン', order: 22)
    laboratory.teachers.create(name: '西野 恒', position: '教授')
    laboratory.teachers.create(name: '延原 章平', position: '准教授')
    laboratory.teachers.create(name: 'Marc A. Kastner', position: '助教')
    # 通信情報システム専攻
    laboratory = survey.laboratories.create(university: '京都大学', department: '情報学研究科', field: '通信情報システム',
                                            course: '通信システム工学', major: 'ディジタル通信', order: 23)
    laboratory.teachers.create(name: '原田 博司', position: '教授')
    laboratory.teachers.create(name: '水谷 圭一', position: '准教授')
    laboratory.teachers.create(name: '香田 優介', position: '助教')
    laboratory = survey.laboratories.create(university: '京都大学', department: '情報学研究科', field: '通信情報システム',
                                            course: '通信システム工学', major: '伝送メディア', order: 24)
    laboratory.teachers.create(name: '山本 高至', position: '准教授')
    laboratory = survey.laboratories.create(university: '京都大学', department: '情報学研究科', field: '通信情報システム',
                                            course: '通信システム工学', major: '知的通信網', order: 25)
    laboratory.teachers.create(name: '大木 英司', position: '教授')
    laboratory.teachers.create(name: '佐藤 丈博', position: '准教授')
    laboratory = survey.laboratories.create(university: '京都大学', department: '情報学研究科', field: '通信情報システム',
                                            course: '集積システム工学', major: '情報回路方式', order: 26)
    laboratory.teachers.create(name: '佐藤 高史', position: '教授')
    laboratory.teachers.create(name: '粟野 皓光', position: '准教授')
    laboratory = survey.laboratories.create(university: '京都大学', department: '情報学研究科', field: '通信情報システム',
                                            course: '集積システム工学', major: '大規模集積回路', order: 27)
    laboratory.teachers.create(name: '新津 葵一', position: '教授')
    laboratory = survey.laboratories.create(university: '京都大学', department: '情報学研究科', field: '通信情報システム',
                                            course: '集積システム工学', major: '超高速信号処理', order: 28)
    laboratory.teachers.create(name: '橋本 昌宜', position: '教授')
    laboratory.teachers.create(name: '白井 僚', position: '助教')
    # 生存圏研究所
    laboratory = survey.laboratories.create(university: '京都大学', department: '情報学研究科', field: '通信情報システム',
                                            course: '地球電波工学', major: 'リモートセンシング工学', order: 29)
    laboratory.teachers.create(name: '山本 衛', position: '教授')
    laboratory.teachers.create(name: '横山 竜宏', position: '准教授')
    laboratory = survey.laboratories.create(university: '京都大学', department: '情報学研究科', field: '通信情報システム',
                                            course: '地球電波工学', major: '地球大気計測', order: 30)
    laboratory.teachers.create(name: '橋口 浩之', position: '教授')
    laboratory.teachers.create(name: '西村 耕司', position: '准教授')
    laboratory.teachers.create(name: '矢吹 正教', position: '特定准教授')
    # システム科学専攻
    laboratory = survey.laboratories.create(university: '京都大学', department: '情報学研究科', field: 'システム科学',
                                            course: 'システム情報論', major: '論理生命学', order: 31)
    laboratory.teachers.create(name: '石井 信', position: '教授')
    laboratory.teachers.create(name: '島﨑 秀昭', position: '准教授')
    laboratory.teachers.create(name: '東 広志', position: '助教')
    laboratory.teachers.create(name: 'Jaepyung Hwang', position: '特定助教')
    laboratory.teachers.create(name: 'Paavo Parmas', position: '特定助教')

    # エネルギー科学研究科
    # エネルギー社会・環境科学専攻
    laboratory = survey.laboratories.create(university: '京都大学', department: 'エネルギー科学研究科', field: 'エネルギー社会・環境科学',
                                            course: 'エネルギー社会環境学', major: 'エネルギー情報学', order: 32)
    laboratory.teachers.create(name: '下田 宏', position: '教授')
    laboratory.teachers.create(name: '石井 裕剛', position: '准教授')
    laboratory.teachers.create(name: '上田 樹美', position: '助教')
    # エネルギー基礎科学専攻
    laboratory = survey.laboratories.create(university: '京都大学', department: 'エネルギー科学研究科', field: 'エネルギー基礎科学',
                                            course: 'エネルギー物理学', major: '電磁エネルギー学', order: 33)
    laboratory.teachers.create(name: '中村 祐司', position: '教授')
    # エネルギ-応用科学専攻
    laboratory = survey.laboratories.create(university: '京都大学', department: 'エネルギー科学研究科', field: 'エネルギー応用科学',
                                            course: 'エネルギー材料学', major: 'エネルギー応用基礎学', order: 34)
    laboratory.teachers.create(name: '土井 俊哉', position: '教授')
    laboratory.teachers.create(name: '川西 咲子', position: '准教授')
    laboratory = survey.laboratories.create(university: '京都大学', department: 'エネルギー科学研究科', field: 'エネルギー応用科学',
                                            course: 'エネルギー材料学', major: 'プロセスエネルギー学', order: 35)
    laboratory.teachers.create(name: '川山 巌', position: '准教授')
    # エネルギー変換科学専攻
    laboratory = survey.laboratories.create(university: '京都大学', department: 'エネルギー科学研究科', field: 'エネルギー変換科学',
                                            course: 'エネルギー機能変換', major: 'プラズマエネルギー変換', order: 36)
    laboratory.teachers.create(name: '長﨑 百伸', position: '教授')
    laboratory.teachers.create(name: '小林 進二', position: '准教授')
    # エネルギー基礎科学専攻
    laboratory = survey.laboratories.create(university: '京都大学', department: 'エネルギー科学研究科', field: 'エネルギー基礎科学',
                                            course: '基礎プラズマ科学', major: '高温プラズマ物性', order: 37)
    laboratory.teachers.create(name: '稲垣 滋', position: '教授')
    laboratory.teachers.create(name: '南 貴司', position: '准教授')
    laboratory.teachers.create(name: '門 信一郎', position: '准教授')
    laboratory.teachers.create(name: '大島 慎介', position: '助教')
    laboratory.teachers.create(name: '金 史良', position: '助教')
    laboratory = survey.laboratories.create(university: '京都大学', department: 'エネルギー科学研究科', field: 'エネルギー基礎科学',
                                            course: '基礎プラズマ科学', major: 'エネルギー光物性', order: 38)
    laboratory.teachers.create(name: '松田 一成', position: '教授')
    laboratory.teachers.create(name: '篠北 啓介', position: '助教')
  end
end
