var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
let catIndex = 1;
let details

const commands = [{
    "name": "addxp",
    "officialAliases": null,
    "helpPage": {
        "page": 2,
        "description": "Add XP to a member.",
        "usage": [{
            "description": null,
            "usage": "%PREFIX%addxp <@member> <xp>"
        }],
        "examples": ["%PREFIX%addxp @Clyde#0000 12000"]
    },
    "permission": ["MANAGE_GUILD"],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "deb",
    "officialAliases": null,
    "helpPage": {
        "page": 5,
        "description": "",
        "usage": [{
            "description": null,
            "usage": "%PREFIX%deb <page>"
        }],
        "examples": ["%PREFIX%deb 1"]
    },
    "permission": [],
    "onlyBotOwners": true
}, {
    "name": "eval",
    "officialAliases": null,
    "helpPage": {
        "page": 5,
        "description": "",
        "usage": [{
            "description": null,
            "usage": "%PREFIX%eval <JS CodeBlock>"
        }],
        "examples": ["%PREFIX%eval <JS Code>"]
    },
    "permission": [],
    "bot_permission": [],
    "onlyBotOwners": true
}, {
    "name": "prefix",
    "officialAliases": null,
    "helpPage": {
        "page": 1,
        "description": "Set the Guilds Prefix.",
        "usage": [{
            "description": "Set a new Prefix for your Guild",
            "usage": "%PREFIX%prefix <new_prefix>"
        }],
        "examples": ["%PREFIX%prefix !", "%PREFIX%prefix Please&Help"]
    },
    "permission": ["MANAGE_GUILD"],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "premium",
    "officialAliases": null,
    "helpPage": {
        "page": 5,
        "description": "Just a Debug Command",
        "usage": [{
            "description": null,
            "usage": "%PREFIX%premium"
        }],
        "examples": ["%PREFIX%premium"]
    },
    "permission": [],
    "bot_permission": [],
    "onlyBotOwners": true
}, {
    "name": "removexp",
    "officialAliases": null,
    "helpPage": {
        "page": 2,
        "description": "Remove XP from a member.",
        "usage": [{
            "description": null,
            "usage": "%PREFIX%removexp <@member> <xp>"
        }],
        "examples": ["%PREFIX%removexp @Clyde#0000 12000"]
    },
    "permission": ["MANAGE_GUILD"],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "reset",
    "officialAliases": null,
    "helpPage": {
        "page": 2,
        "description": "With this command you can reset data of members or this guild.",
        "usage": [{
            "description": "Reset the Guild",
            "usage": "%PREFIX%reset"
        }, {
            "description": "Reset a Member",
            "usage": "%PREFIX%reset <@Member>"
        }],
        "examples": ["%PREFIX%reset", "%PREFIX%reset @Clyde#0000"]
    },
    "permission": ["MANAGE_GUILD"],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "role",
    "officialAliases": ["roles", "boosts", "boost"],
    "helpPage": {
        "page": 2,
        "description": "Set LevelRoles or Boosted Roles for your Guild.",
        "usage": [{
            "description": "List every Levelrole and Boosted Role",
            "usage": "%PREFIX%role"
        }, {
            "description": "Add a Levelrole",
            "usage": "%PREFIX%role set <@role> <level>",
            "permitted": "MANAGE_GUILD"
        }, {
            "description": "Remove a Levelrole",
            "usage": "%PREFIX%role remove <level>",
            "permitted": "MANAGE_GUILD"
        }, {
            "description": "Add a Boosted Role",
            "usage": "%PREFIX%role boost set <@role> <boost_percentage>",
            "permitted": "MANAGE_GUILD"
        }, {
            "description": "Remove a Boosted Role",
            "usage": "%PREFIX%role boost remove <@role>",
            "permitted": "MANAGE_GUILD"
        }],
        "examples": ["%PREFIX%role set @Level25 25", "%PREFIX%role remove 25", "%PREFIX%role boost set @Subscriber 50", "%PREFIX%role boost remove @Subscriber"]
    },
    "permission": [],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "setup",
    "officialAliases": null,
    "helpPage": {
        "page": 5,
        "description": "Get your guild starting just like that!",
        "usage": [{
            "usage": "%PREFIX%setup"
        }],
        "examples": ["%PREFIX%setup"]
    },
    "permission": ["MANAGE_GUILD"],
    "bot_permission": [],
    "onlyBotOwners": true
}, {
    "name": "setxp",
    "officialAliases": null,
    "helpPage": {
        "page": 2,
        "description": "Set XP of a member.",
        "usage": [{
            "description": null,
            "usage": "%PREFIX%setxp <@member> <xp>"
        }],
        "examples": ["%PREFIX%setxp @Clyde#0000 12000"]
    },
    "permission": ["MANAGE_GUILD"],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "sudo",
    "officialAliases": null,
    "helpPage": {
        "page": 5,
        "description": "Execute a command in the Name of another Member.",
        "usage": [{
            "usage": "%PREFIX%sudo <@member> <command>"
        }],
        "examples": ["%PREFIX%sudo @Clyde#0000", "%PREFIX%ranking"]
    },
    "permission": [],
    "bot_permission": [],
    "onlyBotOwners": true
}, {
    "name": "daily",
    "officialAliases": null,
    "helpPage": {
        "page": 4,
        "description": "Claim your Daily XP!",
        "usage": [{
            "description": "",
            "usage": "%PREFIX%daily"
        }],
        "examples": ["%PREFIX%daily"]
    },
    "permission": [],
    "onlyBotOwners": false
}, {
    "name": "fish",
    "officialAliases": null,
    "helpPage": {
        "page": 4,
        "description": "Go fishing!",
        "usage": [{
            "description": "",
            "usage": "%PREFIX%fish"
        }],
        "examples": ["%PREFIX%fish"]
    },
    "permission": [],
    "onlyBotOwners": false
}, {
    "name": "loot",
    "officialAliases": null,
    "helpPage": {
        "page": 4,
        "description": "Loot a chest!",
        "usage": [{
            "description": "",
            "usage": "%PREFIX%loot"
        }],
        "examples": ["%PREFIX%loot"]
    },
    "permission": [],
    "onlyBotOwners": false
}, {
    "name": "party",
    "officialAliases": ["comp", "compete"],
    "helpPage": {
        "page": 4,
        "description": "Play games together!",
        "usage": [{
            "usage": "%PREFIX%party"
        }, {
            "description": "Let only the winner get the reward",
            "usage": "%PREFIX%party \"luck\""
        }],
        "examples": ["%PREFIX%party", "%PREFIX%party luck"]
    },
    "permission": [],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "roll",
    "officialAliases": null,
    "helpPage": {
        "page": 4,
        "description": "Roll the Dices!",
        "usage": [{
            "description": null,
            "usage": "%PREFIX%roll"
        }],
        "examples": ["%PREFIX%roll"]
    },
    "permission": [],
    "onlyBotOwners": false
}, {
    "name": "trivia",
    "officialAliases": ["t"],
    "helpPage": {
        "page": 4,
        "description": "Test your knowledge!",
        "usage": [{
            "usage": "%PREFIX%trivia"
        }],
        "examples": ["%PREFIX%trivia"]
    },
    "permission": [],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "help",
    "officialAliases": ["h"],
    "helpPage": {
        "page": 1,
        "description": "There's nothing more to help here.",
        "usage": [{
            "description": "List pages",
            "usage": "%PREFIX%help"
        }, {
            "description": "Get help about a command",
            "usage": "%PREFIX%help  <command>"
        }],
        "examples": ["%PREFIX%help module"]
    },
    "permission": [],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "info",
    "officialAliases": ["i", "about"],
    "helpPage": {
        "page": 1,
        "description": "Info about XP",
        "usage": [{
            "description": "Get all infos about the Bot",
            "usage": "%PREFIX%info"
        }],
        "examples": ["%PREFIX%info"]
    },
    "permission": [],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "leaderboard",
    "officialAliases": ["lb"],
    "helpPage": {
        "page": 1,
        "description": "Show the Leaderboard",
        "usage": [{
            "description": null,
            "usage": "%PREFIX%leaderboard"
        }],
        "examples": ["%PREFIX%leaderboard"]
    },
    "permission": [],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "rank",
    "officialAliases": ["r", "level"],
    "helpPage": {
        "page": 1,
        "description": "This command will print the RankingCard.",
        "usage": [{
            "description": "Show your RankingCard",
            "usage": "%PREFIX%rank"
        }, {
            "description": "Show a Member's RankingCard",
            "usage": "%PREFIX%rank <@member>"
        }],
        "examples": ["%PREFIX%rank", "%PREFIX%rank @Clyde#0000"]
    },
    "permission": ["ADD_REACTIONS"],
    "bot_permission": ["ADD_REACTIONS"],
    "onlyBotOwners": false
}, {
    "name": "user",
    "officialAliases": ["u"],
    "helpPage": {
        "page": 1,
        "description": "This command gives you every info about a Member.",
        "usage": [{
            "description": "Show your UserCard",
            "usage": "%PREFIX%user"
        }, {
            "description": "Show a Member's UserCard",
            "usage": "%PREFIX%user <@member>"
        }],
        "examples": ["%PREFIX%user", "%PREFIX%user @Clyde#0000"]
    },
    "permission": [],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "voicetime",
    "officialAliases": ["vt"],
    "helpPage": {
        "page": 1,
        "description": "This command shows you how much VoiceTime and XP you collected during your session.",
        "usage": [{
            "description": null,
            "usage": "%PREFIX%voicetime"
        }, {
            "description": null,
            "usage": "%PREFIX%voicetime <@member>"
        }],
        "examples": ["%PREFIX%voicetime"]
    },
    "permission": [],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "alias",
    "officialAliases": ["aliases"],
    "helpPage": {
        "page": 1,
        "description": "Allows you to add, see and remove Aliases from your Guild.",
        "usage": [{
            "description": " List all Aliases",
            "usage": "%PREFIX%alias"
        }, {
            "description": "Add a new Alias",
            "usage": "%PREFIX%alias <alias> <legacy_command>"
        }, {
            "description": "Remove an Alias (Permitted: MANAGE-GUILD)",
            "usage": "%PREFIX%alias <alias>"
        }],
        "examples": ["%PREFIX%alias 1"]
    },
    "permission": [],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "announce",
    "officialAliases": null,
    "helpPage": {
        "page": 2,
        "description": "Configure Level-Up Messages for your Server!\n\n**Attributes**\n```md\n> Use the following attributes\n{TAG} • e.g. Clyde#0000\n{MNT} • e.g. @Clyde\n{LVL} • e.g. 233\n{CMB} • e.g. 2```\n    ",
        "usage": [{
            "description": "Set the announcement channel",
            "usage": "%PREFIX%logger LevelUp <#channel>"
        }, {
            "description": "Set the announcement channel to \"current\" mode",
            "usage": "%PREFIX%announce set channel \"current\""
        }, {
            "description": "Configure the announcement message",
            "usage": "%PREFIX%announce set message <text>"
        }, {
            "description": "Disable announcements",
            "usage": "%PREFIX%announce set \"off\""
        }],
        "examples": ["%PREFIX%announce set channel current", "%PREFIX%announce set message {TAG} climbed {CMB} ..."]
    },
    "permission": ["MANAGE_GUILD"],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "ignore",
    "officialAliases": ["ignores", "ignored"],
    "helpPage": {
        "page": 2,
        "description": "Set Channels or Roles that are not getting any XP.",
        "usage": [{
            "description": "List every ignored Channel and Role",
            "usage": "%PREFIX%ignore"
        }, {
            "description": "Toggle if a Channel is being ignored",
            "usage": "%PREFIX%ignore <#Channel/ChannelID>"
        }, {
            "description": "Toggle if a Role is being ignored",
            "usage": "%PREFIX%ignore <@Role/RoleID>"
        }],
        "examples": ["%PREFIX%ignore", "%PREFIX%ignore #Spam", "%PREFIX%ignore @XPBan"]
    },
    "permission": ["MANAGE_GUILD"],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "logging",
    "officialAliases": ["logger", "log"],
    "helpPage": {
        "page": 2,
        "description": "Keep updated with our LoggingSystems.",
        "usage": [{
            "description": "List every available logger",
            "usage": "%PREFIX%logging"
        }, {
            "description": "Assign a Channel to a logger",
            "usage": "%PREFIX%logging <logger> <#TextChannel>"
        }, {
            "description": "Revmove an assigned logger",
            "usage": "%PREFIX%logging <logger>"
        }],
        "examples": ["%PREFIX%logging voice #VoiceChat", "%PREFIX%logging LevelUp"]
    },
    "permission": ["MANAGE_GUILD"],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "modules",
    "officialAliases": ["module"],
    "helpPage": {
        "page": 2,
        "description": "This command can give you a list of every available Module in this Guild, or toggle the state of one.",
        "usage": [{
            "description": " List every Module",
            "usage": "%PREFIX%modules"
        }, {
            "description": "Toggle a Module",
            "usage": "%PREFIX%modules <module>"
        }],
        "examples": ["%PREFIX%modules", "%PREFIX%modules SingleRankRole"]
    },
    "permission": ["MANAGE_GUILD"],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "values",
    "officialAliases": ["v", "value"],
    "helpPage": {
        "page": 2,
        "description": "This command can give you a list of every available Value in this Guild - It can also let you change Values.",
        "usage": [{
            "description": " List all Values",
            "usage": "%PREFIX%values"
        }, {
            "description": "Set a Value",
            "usage": "%PREFIX%values <value> <amount>"
        }],
        "examples": ["%PREFIX%values", "%PREFIX%values VoiceXP 50"]
    },
    "permission": ["MANAGE_GUILD"],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "background",
    "officialAliases": ["bg"],
    "helpPage": {
        "page": 1,
        "description": "This command lets you change your Background.",
        "usage": [{
            "description": null,
            "usage": "%PREFIX%background <BG-ID>"
        }, {
            "description": "Use custom Backgrounds by attaching an Image",
            "usage": "%PREFIX%background"
        }, {
            "description": "Blur your Background",
            "usage": "%PREFIX%background blur <1-1000>"
        }, {
            "description": "List every Background-Setting",
            "usage": "%PREFIX%background"
        }],
        "examples": ["%PREFIX%background 7", "%PREFIX%background blur 3"]
    },
    "permission": [],
    "bot_permission": [],
    "onlyBotOwners": false
}, {
    "name": "ranking",
    "officialAliases": null,
    "helpPage": {
        "page": 3,
        "description": "This command lets you opt out of Ranking on this Guild.",
        "usage": [{
            "description": null,
            "usage": "%PREFIX%ranking"
        }],
        "examples": ["%PREFIX%ranking"]
    },
    "permission": [],
    "bot_permission": [],
    "onlyBotOwners": false
}];
const permissionDescs = {
    "CREATE_INSTANT_INVITE": "Allows creation of instant invites",
    "KICK_MEMBERS": "Allows kicking members",
    "BAN_MEMBERS": "Allows banning members",
    "ADMINISTRATOR": "Allows all permissions and bypasses channel permission overwrites",
    "MANAGE_CHANNELS": "Allows management and editing of channels",
    "MANAGE_GUILD": "Allows management and editing of the guild",
    "ADD_REACTIONS": "Allows for the addition of reactions to messages",
    "VIEW_AUDIT_LOG": "Allows for viewing of audit logs",
    "PRIORITY_SPEAKER": "Allows for using priority speaker in a voice channel",
    "STREAM": "Allows the user to go live",
    "VIEW_CHANNEL": "Allows guild members to view a channel, which includes reading messages in text channels",
    "SEND_MESSAGES": "Allows for sending messages in a channel",
    "SEND_TTS_MESSAGES": "Allows for sending of <code>/tts</code> messages",
    "MANAGE_MESSAGES": "Allows for deletion of other users messages",
    "EMBED_LINKS": "Links sent by users with this permission will be auto-embedded",
    "ATTACH_FILES": "Allows for uploading images and files",
    "READ_MESSAGE_HISTORY": "Allows for reading of message history",
    "MENTION_EVERYONE": "Allows for using the <code>@everyone</code> tag to notify all users in a channel, and the <code>@here</code> tag to notify all online users in a channel",
    "USE_EXTERNAL_EMOJIS": "Allows the usage of custom emojis from other servers",
    "VIEW_GUILD_INSIGHTS": "Allows for viewing guild insights",
    "CONNECT": "Allows for joining of a voice channel",
    "SPEAK": "Allows for speaking in a voice channel",
    "MUTE_MEMBERS": "Allows for muting members in a voice channel",
    "DEAFEN_MEMBERS": "Allows for deafening of members in a voice channel",
    "MOVE_MEMBERS": "Allows for moving of members between voice channels",
    "USE_VAD": "Allows for using voice-activity-detection in a voice channel",
    "CHANGE_NICKNAME": "Allows for modification of own nickname",
    "MANAGE_NICKNAMES": "Allows for modification of other users nicknames",
    "MANAGE_ROLES": "Allows management and editing of roles",
    "MANAGE_WEBHOOKS": "Allows management and editing of webhooks",
    "MANAGE_EMOJIS": "Allows management and editing of emojis"
}

$(document).ready(function () {
    bootItems();
    details = document.querySelectorAll("details");
    $(`details[open]`).removeAttr("open");
    $(`.item`).fadeIn();
    // items = $(".5");
    // items.remove();
    showCat(catIndex);
    toggleDetails();
});

function bootItems() {
    var items = $(".item");
    items.remove();
    for (let i = 0; i < commands.length; i++) {
        const element = commands[i];

        if (element.helpPage.page >= 5)
            continue;

        const alphabet = "abcdefghijklmnopqrstuvwxyz"

        const currID = alphabet[Math.floor(Math.random() * alphabet.length)] +
            alphabet[Math.floor(Math.random() * alphabet.length)] +
            alphabet[Math.floor(Math.random() * alphabet.length)] +
            alphabet[Math.floor(Math.random() * alphabet.length)] +
            alphabet[Math.floor(Math.random() * alphabet.length)];
        $(`#${currID} details[open]`).css("height", `fit-content`);

        let tags = "";
        let tag_classes = ""

        if (element.tags) {
            for (let tagI = 0; tagI < element.tags.length; tagI++) {
                const tag = element.tags[tagI];
                tags += `<span class="tag"><a>${tag}</a></span>`
                tag_classes += tag + " ";
            }
        }
        if (element.bot_permission) {
            for (let bpermsI = 0; bpermsI < element.bot_permission.length; bpermsI++) {
                const perm = element.bot_permission[bpermsI];
                tags += `<span data-text="jaaa" class="tooltip bot-perm tag">${perm.toLowerCase()}</span>`
                tag_classes += perm + " ";
            }
        }
        if (element.onlyBotOwners) {
            tag_classes += "owner ";
            tags += `<span class="tag"><a>xp staff only</a></span>`;
        }

        div = `<div class="item ${element.helpPage.page} ${tag_classes}" id="${currID}-p">
                <details id="${currID}" open>
                    <summary>
                            <p>.xp ${element.name}<span class="description">${element.helpPage.description}</span></p>
                            <div class="tags">${tags}</div>`;

        // Ending Tags
        div += `</summary><hr><div class="item-content">`;

        // Aliases
        if (element.officialAliases && element.officialAliases.length > 0) {
            div += `<span class="item-part"><p>Aliases</p><div>`;
            for (let aliasesI = 0; aliasesI < element.officialAliases.length; aliasesI++) {
                const alias = element.officialAliases[aliasesI];
                div += `<span class="tag">${alias}</span>`;
            }
            div += `</div></span>`;
        }

        // Permissions
        if ((element.permission && element.permission.length) || (element.bot_permission && element.bot_permission.length > 0)/*  || (element.officialAliases && element.officialAliases.length > 0) */) {
            div += `<span class="item-part item-grid">`;

            // Unused Aliases in grid
            // if (element.officialAliases && element.officialAliases.length > 0) {
            //     div += `<div><p>Aliases</p>`;
            //     for (let aliasesI = 0; aliasesI < element.officialAliases.length; aliasesI++) {
            //         const alias = element.officialAliases[aliasesI];
            //         div += `<span class="tag"><a>${alias}</a></span>`;
            //     }
            //     div += `</div   >`;
            // }
            if (element.permission && element.permission.length > 0) {
                div += `<div><p>Users Required Permissions</p><div>`;
                for (let permI = 0; permI < element.permission.length; permI++) {
                    const perm = element.permission[permI];
                    div += `<span data-text="${permissionDescs[perm].toLowerCase()}" class="tooltip tag">${perm.toLowerCase()}</span>`;
                }
                div += `</div></div>`;
            }
            if (element.bot_permission && element.bot_permission.length > 0) {
                div += `<div><p>XPs Required Permissions</p><div>`;
                for (let botpermI = 0; botpermI < element.bot_permission.length; botpermI++) {
                    const botPerm = element.bot_permission[botpermI];
                    div += `<span data-text="${permissionDescs[botPerm].toLowerCase()}" class="tooltip tag">${botPerm.toLowerCase()}</span>`;
                }
                div += `</div></div>`;
            }
            div += `</span>`;
        }

        // Usage
        if (element.helpPage.usage && element.helpPage.usage.length > 0) {
            let count = 0;
            div += `<span class="item-part"><p>Usage</p><code class="item-usage">`;
            for (let usageI = 0; usageI < element.helpPage.usage.length; usageI++) {
                const usage = element.helpPage.usage[usageI];
                count++;
                if (count > 1)
                    div += `<br><br>`;
                if (usage.description && usage.description != null) {
                    div += `<span class="desc">> ${usage.description}</span><br>`;
                }
                div += `${replaceStuffInUsage(usage.usage)}`;
            }
            div += `</code></span>`;
        }

        div += `</div><div style="height: 10px;"></div></details></div>`;

        $('#list').append(div);

        $('html > head').append(`<style>#${currID}[open] { height: ${ Math.ceil($(`#${currID}`).height()) }px; }</style>`);
        $(`#${currID}`).parent().hide();

    }
}

function setCat(n) {
    showCat(catIndex = n);
}

function showCat(n) {
    toggleDetails();
    var neededItems;
    if (n == 1) {
        neededItems = $(`.item`);
    } else {
        n--;
        var items = $(`.item`);
        neededItems = $(`.${n}`);
        // $(items).fadeOut();
        $(items).hide();
    }
    var categories = $(".category");

    $(categories).removeClass("active");
    $(categories[catIndex - 1]).addClass("active");
    $(neededItems).fadeIn();
}

function toggleDetails() {
    // scrollToAnchor(id);
    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            // Close all the details that are not targetDetail.
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });

    document.querySelectorAll(".category").forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            // Close all the details that are not targetDetail.
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });
}

function scrollToAnchor(aid) {
    // let pos = $(`#${aid}-p`).position().top;
    // console.log(pos)
    // $("#list").animate({scrollTop: pos});
    document.getElementById(`${aid}-p`).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

function replaceStuffInUsage(usage) {
    var optionals = usage.match(/\(<(.*?)>\)/g);
    var needed = usage.match(/\<(.*?)\>/g);
    var text = usage.match(/\"(.*?)\"/g);

    if (optionals)
        for (let oI = 0; oI < optionals.length; oI++) {
            const element = optionals[oI];
            usage = usage.replace(element, `<span data-text="${getTooltip(element.replace(/[(\(<)(>\))]/g, ``))}" class="tooltip tag optional">${element.replace(/[(\(<)(>\))]/g, ``).toLowerCase()}</span>`)
        }

    if (needed)
        for (let i = 0; i < needed.length; i++) {
            const element = needed[i];
            usage = usage.replaceAll(element, `<span data-text="${getTooltip(element.replace(/[(\<)(\>)]/g, ``))}" class="tooltip tag">${element.replace(/[(\<)(\>)]/g, ``).toLowerCase()}</span>`)
        }

    if (text)
        for (let oI = 0; oI < text.length; oI++) {
            const element = text[oI];
            usage = usage.replace(element, `<span data-text="${getTooltip(element)}" class="tooltip tag">${element.toLowerCase()}</span>`)
        }
    return usage.replace(/%PREFIX%/g, `.xp `);
}

function getTooltip(arg) {
    arg = arg.toLowerCase();
    console.log(arg);
    if (arg.includes(`"`)) {
        return `Just exactly '${arg.replace(/"/g, ``)}'.`;
    } else if (arg.includes(`page`)) {
        return `Number of the Help Page you want to access.`;
    } else if (arg.includes(`text`)) {
        return `The Text you'd like to set.`;
    } else if (arg.includes(`prefix`)) {
        return `The prefix you'd like to set.`;
    } else if (arg.includes(`xp`)) {
        return `The amount of XP.`;
    } else if (arg.includes(`level`)) {
        return `The intended Level.`;
    } else if (arg.includes(`boost_percentage`)) {
        return `The factor by how much the role will be boosted in percent.`;
    } else if (arg.startsWith(`@`)) {
        if (arg.includes(`member`)) {
            return `A mentioned member. E.g. @Clyde#0000.`;
        } else if (arg.includes(`role/roleid`)) {
            return `A mentioned role or a RoleID. E.g. @Active Users / '725880224641712251'.`;
        } else if (arg.includes(`role`)) {
            return `A mentioned role. E.g. @Active Users.`;
        }
    } else if (arg.startsWith(`#`)) {
        if (arg.includes(`channel/channelid`)) {
            return `A mentioned Channel or a ChannelID. E.g. #talk / '725880224641712251'.`;
        } else if (arg.includes(`channel`)) {
            return `A mentioned Channel. E.g. #talk.`;
        }
    } else if (arg.includes(`logger`)) {
        return `A logger from the list of loggers in '.xp logging'.`;
    } else if (arg.includes(`module`)) {
        return `A module from the list of modules in '.xp modules'.`;
    } else if (arg.includes(`command`)) {
        return `A command without the prefix.`;
    } else if (arg.includes(`alias`)) {
        return `An alias you'd like to add / remove.`;
    } else if (arg.includes(`value`)) {
        return `A value from the list of values in '.xp values'.`;
    } else if (arg.includes(`amount`)) {
        return `The amount you'd like to set.`;
    } else if (arg.includes(`bg-id`)) {
        return `A BackgroundID found in .xp help background.`;
    } else {
        return `'${arg.replace(/"/g, ``)}'.`;
    }
}