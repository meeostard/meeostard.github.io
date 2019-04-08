var rawData;
var heroes = {
    "1": {
        "name": "希德Cid"
    },
    "2": {
        "name": "树精Treebeast"
    },
    "3": {
        "name": "伊凡Ivan"
    },
    "4": {
        "name": "布列塔尼Brittany"
    },
    "5": {
        "name": "流浪渔夫Fisherman"
    },
    "6": {
        "name": "贝蒂大厨Betty"
    },
    "7": {
        "name": "流浪武士Samurai"
    },
    "8": {
        "name": "里昂Leon"
    },
    "9": {
        "name": "森林先知Seer"
    },
    "10": {
        "name": "亚力克莎Alexa"
    },
    "11": {
        "name": "娜塔莉亚Natalia"
    },
    "12": {
        "name": "梅赛德斯Mercedes"
    },
    "13": {
        "name": "波比Bobby"
    },
    "14": {
        "name": "布罗依Broyle"
    },
    "15": {
        "name": "乔治二世Sir George II"
    },
    "16": {
        "name": "迈达斯国王Midas"
    },
    "17": {
        "name": "勒夫里Referi Jerator"
    },
    "18": {
        "name": "阿巴顿Abaddon"
    },
    "19": {
        "name": "玛珠Ma Zhu"
    },
    "20": {
        "name": "阿蒙霍特普Amenhotep"
    },
    "21": {
        "name": "兽王Beastlord"
    },
    "22": {
        "name": "雅典娜Athena"
    },
    "23": {
        "name": "阿佛洛狄忒Aphrodite"
    },
    "24": {
        "name": "治那都比Shinatobe"
    },
    "25": {
        "name": "格兰特Grant"
    },
    "26": {
        "name": "霜叶Frostleaf"
    },
    "27": {
        "name": "恐惧骑士Dread Knight"
    },
    "28": {
        "name": "阿特拉斯Atlas"
    },
    "29": {
        "name": "特拉Terra"
    },
    "30": {
        "name": "福勒Phthalo"
    },
    "31": {
        "name": "奥驰葛莱埃Banana"
    },
    "32": {
        "name": "李林Lilin"
    },
    "33": {
        "name": "凯德米亚Cadmia"
    },
    "34": {
        "name": "阿拉巴斯特Alabaster"
    },
    "35": {
        "name": "阿特斯莱雅Astraea"
    },
    "36": {
        "name": "喀戎Chiron"
    },
    "37": {
        "name": "摩洛克Moloch"
    },
    "38": {
        "name": "马克思Bomber Max"
    },
    "39": {
        "name": "戈格Gog"
    },
    "40": {
        "name": "乌普奥特Wepwawet"
    },
    "41": {
        "name": "提蘇Tsuchi"
    },
    "42": {
        "name": "斯库古Skogur"
    },
    "43": {
        "name": "缪如Moeru"
    },
    "44": {
        "name": "兹拉Zilar"
    },
    "45": {
        "name": "玛迪兹Madzi"
    },
    "46": {
        "name": "Xavira"
    },
    "47": {
        "name": "守墓者Cadu"
    },
    "48": {
        "name": "守墓者Ceus"
    },
    "49": {
        "name": "宠物外星人The Maw"
    },
    "50": {
        "name": "原始灵魂Yachiyl"
    },
    "51": {
        "name": "Rose"
    },
    "52": {
        "name": "Sophia"
    },
    "53": {
        "name": "Blanche"
    },
    "54": {
        "name": "Dorothy"
    },
}

var ancients = {
    /*"3": {
        "name": "智慧Solomon",
        "level": 0,
        "bonusType": 25
    },*/
    "4": {
        "name": "自由Libertas",
        "level": 0,
        "bonusType": 24
    },
    "5": {
        "name": "抛弃Siyalatas",
        "level": 0,
        "bonusType": 1
    },
    "8": {
        "name": "贪婪Mammon",
        "level": 0,
        "bonusType": 22
    },
    "9": {
        "name": "财宝Mimzee",
        "level": 0,
        "bonusType": 21
    },
    "10": {
        "name": "财富Pluto",
        "level": 0,
        "bonusType": 20
    },
    "11": {
        "name": "节约Dogcog",
        "level": 0,
        "bonusType": 19
    },
    "12": {
        "name": "机运Fortuna",
        "level": 0,
        "bonusType": 18
    },
    "13": {
        "name": "灵魂Atman",
        "level": 0,
        "bonusType": 17
    },
    "14": {
        "name": "探索Dora",
        "level": 0,
        "bonusType": 16
    },
    "15": {
        "name": "谋杀Bhaal",
        "level": 0,
        "bonusType": 15
    },
    "16": {
        "name": "死亡Morgulis",
        "level": 0,
        "bonusType": 14
    },
    "17": {
        "name": "时间Chronos",
        "level": 0,
        "bonusType": 3
    },
    "18": {
        "name": "疾病Bubos",
        "level": 0,
        "bonusType": 13
    },
    "19": {
        "name": "暴怒Fragsworth",
        "level": 0,
        "bonusType": 2
    },
    "20": {
        "name": "暴躁Vaagur",
        "level": 0,
        "bonusType": 28
    },
    "21": {
        "name": "暗影Kumawakamaru",
        "level": 0,
        "bonusType": 27
    },
    "22": {
        "name": "激荡Chawedo",
        "level": 0,
        "bonusType": 4
    },
    "23": {
        "name": "重击Hecatoncheir",
        "level": 0,
        "bonusType": 12
    },
    "24": {
        "name": "怒火Berserker",
        "level": 0,
        "bonusType": 11
    },
    "25": {
        "name": "精准Sniperino",
        "level": 0,
        "bonusType": 10
    },
    "26": {
        "name": "偷窃Kleptos",
        "level": 0,
        "bonusType": 9
    },
    "27": {
        "name": "续航Energon",
        "level": 0,
        "bonusType": 8
    },
    "28": {
        "name": "强化Argaiv",
        "level": 0,
        "bonusType": 7
    },
    "29": {
        "name": "气势Juggernaut",
        "level": 0,
        "bonusType": 26
    },
    "31": {
        "name": "幸运Revolc",
        "level": 0,
        "bonusType": 5
    },
    "32": {
        "name": "节制Nogardnit",
        "level": 0,
        "bonusType": 999
    },
}

var outsiders = {
    "1": {
        "name": "犀利契Xyliqil"
    },
    "2": {
        "name": "楚格洛斯Chor'gorloth"
    },
    "3": {
        "name": "樊徳瑞斯Phandoryss"
    },
    /*"4": {
        "name": "Borb"
    },*/
    "5": {
        "name": "马夫Ponyboy"
    },
    "6": {
        "name": "波尔Borb"
    },
    "7": {
        "name": "Rhageist"
    },
    "8": {
        "name": "K'Ariqua"
    },
    "9": {
        "name": "Orphalas"
    },
    "10": {
        "name": "Sen-Akhan"
    },
}

var aryDisplayOption = [
    ['outsiders', 'showOutsiders'],
    ['ancients', 'showAncients'],
    ['gilds', 'showGilds'],
    ['miscs', 'showMiscs'],
    ['times', 'showDurations'],
    ['event', 'showEvent'],
    ['relics', 'showRelics'],
    ['totalRelicBonuses', 'showTotalRelicBonuses'],
];

function loadGame(encodedData) {
    rawData = decoder.decode_main(encodedData);
}

function nf(number) {
    if (number.lt(0))
        return "-" + nf(number.times(-1))
    if (number.lt(10000))
        return number.toFixed(0);
    else
        return number.toExponential(4).replace("+", "");
}

function tf(time) {
    var temp = time / 1000;
    var day = Math.floor(temp / 86400);
    temp -= day * 86400;
    var hour = Math.floor(temp / 3600);
    temp -= hour * 3600;
    var min = Math.floor(temp / 60);
    return (((day == 0) ? "" : (day + "天")) + ((hour == 0) ? "" : (hour + "时")) + min + "分");
}

function minTwoDigit(n) {
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}

function tf_2(time) {
    var temp = Math.round(time / 1000);
    var hour = Math.floor(temp / 3600);
    temp -= hour * 3600;
    var min = Math.floor(temp / 60);
    var sec = temp - min * 60;
    return (((hour == 0) ? "" : (hour + "时")) + ((min == 0) ? "" : (minTwoDigit(min) + "分")) + minTwoDigit(sec) + "秒");
}

function fixedLengthOutput(out, length) {
    var _loc = out.toString();
    while (_loc.length < length)
        _loc = ' ' + _loc;
    return _loc;
}

function getRelicBonus(id) {
    var level = 0;
    for (var i in rawData.items.slots) {
        if (i > 4)
            continue;
        var relic = rawData.items.items[rawData.items.slots[i]];
        for (var j = 1; j <= 4; j++) {
            if (relic["bonusType" + j] == id)
                level += Number(relic['bonus' + j + 'Level']);
        }
    }
    return level;
}

function showOutsiders() {
    var rs = "超神器: ";
    for (var i in outsiders) {
        if (!!rawData.outsiders.outsiders[i]) {
            rs += outsiders[i].name + " (" + rawData.outsiders.outsiders[i].level + "), ";
        } else {
            rs += outsiders[i].name + " (0), ";
        }
    }
    rs = rs.substring(0, rs.length - 2) + ".";
    return rs;
}

function showAncients() {
    var rs1 = "神器: ";
    var rs2 = "未召唤的神器: ";
    var notSummonedAncient = false;
    var noAncientSummoned = true;
    var ancientsArr = [];
    for (var i in ancients) {
        if (!!rawData.ancients.ancients[i]) {
            ancients[i].level = Decimal(rawData.ancients.ancients[i].level);
            noAncientSummoned = false;
        } else
            ancients[i].level = Decimal(0);
        ancientsArr.push(ancients[i]);
    }
    ancientsArr.sort(function(a, b) {
        if (a.level.equals(b.level))
            return (a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
        else
        if (a.level.lt(b.level))
            return 1;
        else
            return -1;
    });
    for (var i in ancientsArr) {
        if (ancientsArr[i].level != 0)
            rs1 += ancientsArr[i].name + " (" + nf(Decimal(ancientsArr[i].level)) + "), ";
        else {
            notSummonedAncient = true;
            rs2 += ancientsArr[i].name + ", ";
        }
    }
    if (noAncientSummoned)
        rs1 += "无.";
    else
        rs1 = rs1.substring(0, rs1.length - 2) + ".";
    if (notSummonedAncient)
        rs2 = rs2.substring(0, rs2.length - 2) + ".";
    else
        rs2 += "无."
    return rs1 + "\n\n" + rs2;
}

function showGilds() {
    var rs = "金身: ";
    var noGild = true;
    for (var i in heroes) {
        if (!!rawData.heroCollection.heroes[i]) {
            if (rawData.heroCollection.heroes[i].epicLevel > 0) {
                noGild = false;
                rs += heroes[i].name + " (" + rawData.heroCollection.heroes[i].epicLevel + "), ";
            }
        }
    }
    if (noGild)
        rs += "无.";
    else
        rs = rs.substring(0, rs.length - 2) + ".";
    return rs;
}

function showMiscs() {
    var rs = "杂项: ";
    //about AS
    var currentHS = Decimal(rawData.heroSouls);
    var sacrificedHS = Decimal(rawData.heroSoulsSacrificed);
    var spentHS = Decimal(rawData.ancients.rerollSoulsSpent);
    for (var i in rawData.ancients.ancients)
        spentHS = spentHS.plus(Decimal(rawData.ancients.ancients[i].spentHeroSouls));
    if (sacrificedHS.plus(currentHS).plus(spentHS).gt(0))
        var currentASGain = Decimal.log10(sacrificedHS.plus(currentHS).plus(spentHS)).times(5).floor().minus(Decimal(rawData.ancientSoulsTotal));
    else
        var currentASGain = Decimal(0);
    rs += "AS (" + rawData.ancientSoulsTotal + " +" + currentASGain + ", " + (rawData.ancientSouls != "0" ? "***" : "") + "未使用: " + rawData.ancientSouls + (rawData.ancientSouls != "0" ? "***" : "") + "); ";
    //about TP
    var tp = 25 - 23 * Math.exp(-0.0003 * Number(rawData.ancientSoulsTotal));
    //var tp = 1 + 49 * (1 - Math.exp(-Number(rawData.ancientSoulsTotal) / 10000)) + 50 * (1 - Math.exp(-Number(rawData.outsiders.outsiders[3].level) / 1000));
    rs += "TP (" + Decimal(tp).toFixed(3) + "%); ";
    //about HS
    rs += "HS (" + nf(currentHS) + ", 已花费: " + nf(spentHS) + ", 已牺牲: " + nf(sacrificedHS) + "); ";
    //about Zone
    rs += "最高层数 (当前转生: " + rawData.highestFinishedZone + ", 当前超转: " + rawData.highestFinishedZonePersist + ", 有史以来: " + Decimal.max(rawData.transcendentHighestFinishedZone, rawData.pretranscendentHighestFinishedZone) + "); ";
    //about Transcension and Ascension
    rs += "超转数 (" + rawData.numberOfTranscensions + "); ";
    rs += "转生数 (当前超转: " + rawData.numAscensionsThisTranscension + ", 总共: " + rawData.numWorldResets + "); ";
    //about Relics Found
    rs += "发现装备数 (当前超转: " + rawData.relicsReceivedThisTranscension + ", 总共: " + rawData.totalRelicsReceived + "); ";
    //about ID
    rs += "公会伤害 (" + nf(Decimal(rawData.titanDamage)) + "); ";
    //about Rubies 
    rs += "红宝石 (" + rawData.rubies + "); ";
    //about the Ruby DPS Multiplier
    rs += "商店永久2倍伤害 (" + (rawData.paidForRubyMultiplier == true ? "是" : "否") + "); ";
    //about AutoClickers
    rs += "自动点击器 (" + (Number(rawData.autoclickers) + Number(rawData.dlcAutoclickers)) + "); ";
    //about Achievements
    var achievementCount = 0;
    for (var i in rawData.achievements)
        achievementCount++;
    rs += "成就 (" + achievementCount + "/167); ";
    //cleanup
    rs = rs.substring(0, rs.length - 2) + ".";
    return rs;
}

function showDurations() {
    var rs = "时间: ";
    var curTime = new Date().getTime();
    rs += "自第一天开始玩 (" + tf(curTime - Number(rawData.creationTimestamp)) + "); ";
    if (Number(rawData.transcensionTimestamp) != 0)
        rs += "自本次超转 (" + tf(curTime - Number(rawData.transcensionTimestamp)) + "); ";
    rs += "自本次转生 (" + tf(curTime - Number(rawData.startTimestamp)) + "); ";
    rs = rs.substring(0, rs.length - 2) + ".";
    return rs;
}

function showEvent() {
    var rs = "节日活动: ";
    //presents
    rs += "礼盒 (已打开: " + rawData.openedClickmasPresents + "; 未打开: " + rawData.unopenedClickmasPresents + "); ";
    //rewards
    rs += "奖励 (拐杖糖: " + rawData.candyCanesEarned + "; 红宝石: " + rawData.clickmasRubiesEarned + "); ";
    rs = rs.substring(0, rs.length - 2) + ".";
    return rs;
}

function showRelics() {
    var rs = "装备: \n";
    var haveRelic = false;
    for (var i in rawData.items.slots) {
        if (i > 4)
            continue;
        haveRelic = true;
        var relic = rawData.items.items[rawData.items.slots[i]];
        var relicDesc = "* *" + relic.name + "*:";
        for (var j = 1; j <= 4; j++)
            if (relic["bonusType" + j] != 0) {
                for (var temp in ancients)
                    if (ancients[temp].bonusType == relic["bonusType" + j])
                        relicDesc += " +" + Number(relic["bonus" + j + "Level"]).toFixed(2) + " " + ancients[temp].name + ",";
            }
        relicDesc = relicDesc.substring(0, relicDesc.length - 1);
        rs += relicDesc + ";\n";
    }
    if (!haveRelic)
        rs += " 无.";
    else
        rs = rs.substring(0, rs.length - 1);
    return rs;
}

function showTotalRelicBonuses() {
    var rs = "装备属性总和: \n";
    var noRelicBonus = true;
    for (var i in ancients) {
        if (getRelicBonus(ancients[i].bonusType) != 0) {
            noRelicBonus = false;
            rs += "* +" + getRelicBonus(ancients[i].bonusType).toFixed(2) + " " + ancients[i].name + "\n";
        }
    }
    if (noRelicBonus)
        rs += "无.";
    return rs;
}

function showTLog() {
    var log = rawData.stats.transcensions;
    var rs = "超转记录:\n\n" + "|超转数|     总耗时     |转生数|最高层数|    获得HS    |    AS   |\n" + "|:----:|:--------------:|:----:|:------:|:------------:|:-------:|\n";
    $("select").empty();
    $.each(log, function(key, value) {
        $("select").append('<option>' + key + '</option>');
        var temp = "";
        temp += "|" + fixedLengthOutput(value.id, 6) + "|";
        temp += fixedLengthOutput(tf_2(value.endTime - value.startTime), 13) + "|";
        temp += fixedLengthOutput(value.numAscensions, 6) + "|";
        temp += fixedLengthOutput(value.highestZoneEver, 8) + "|";
        temp += fixedLengthOutput(nf(Decimal(value.heroSoulsGained)), 14) + "|";

        var _loc = Decimal.log10(value.heroSoulsGained).times(5).floor();
        temp += fixedLengthOutput(_loc, 9) + "|";
        rs += temp + "\n";
    });
    $("select").val($("select option:last").val()).trigger("change");
    $("#log_t").val(rs);
}

function showALog(ntrans) {
    var log = rawData.stats.transcensions[ntrans].ascensions;
    var rs = "第" + ntrans + "次超转中的转生数据:\n\n" + "|转生数|    总耗时    |最高层数|    获得HS    |\n" + "|:----:|:------------:|:------:|:------------:|\n";
    $.each(log, function(key, value) {
        var temp = "";
        temp += "|" + fixedLengthOutput(value.id, 6) + "|";
        temp += fixedLengthOutput(tf_2(value.endTime - value.startTime), 11) + "|";
        temp += fixedLengthOutput(value.highestZoneEver, 8) + "|";
        temp += fixedLengthOutput(nf(Decimal(value.heroSoulsEnd).minus(value.heroSoulsStart)), 14) + "|";
        rs += temp + "\n";
    });
    $("#log_a").val(rs);
}

function displayInfo() {
    if (rawData) {
        var sgt = "";
        aryDisplayOption.forEach(function(cv) {
            if ($("input[value=" + cv[0] + "]").is(":checked"))
                sgt += window[cv[1]]() + "\n\n";
        });
        sgt = sgt.substring(0, sgt.length - 2);
        showTLog();
        $("#result").val(sgt);
    }
}

function __init() {
    $("#themeChoice input").on("change", function() {
        if ($(this).val() == "dark")
            $("link[id=\"style\"]").attr("href", "https://bootswatch.com/3/darkly/bootstrap.min.css");
        else
            $("link[id=\"style\"]").attr("href", "https://bootswatch.com/3/flatly/bootstrap.min.css");
    });

    $("#savegameFile").on("change", function() {
        var fr = new FileReader();
        fr.readAsText($(this).prop("files")[0]);
        fr.onload = function() {
            loadGame(fr.result);
            displayInfo();
        };
    });

    $("#savegameText").on("change", function() {
        loadGame($(this).val());
        displayInfo();
    });

    $("select").on("change", function() {
        var n = $(this).val();
        showALog(n);
    });

    $('.button-checkbox').each(function() {
        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    //icon: 'fa fa-check' //显示异常，屏蔽掉
                },
                off: {
                    //icon: 'fa fa-times' //显示异常，屏蔽掉
                }
            };

        // Event Handlers
        $button.on('click', function() {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
            displayInfo();
        });
        $checkbox.on('change', function() {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            } else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }

        // Initialization
        function init() {

            updateDisplay();

            // Inject the icon if applicable
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
            }
        }
        init();
    });
}

$(document).ready(function() {
    __init();
});