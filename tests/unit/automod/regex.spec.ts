import { BOLD_ITALICS_REGEX, BOLD_REGEX, HEADER_REGEX, INVITE_REGEX, ITALICS_REGEX, MASKED_LINKS_REGEX, STRIKETHROUGH_REGEX } from "../../../src/automod/regex";

function testEmpty(re: RegExp) {
    test("Empty", () => {
        expect(re.test("")).toBe(false);
        expect(re.test(" ")).toBe(false);
        expect(re.test("        ")).toBe(false);
    });
}

describe("Masked Links Regex", () => {
    const r = MASKED_LINKS_REGEX;

    testEmpty(r);

    test("Invalid", () => {
        expect(r.test("[I forgor to close the other )](https://google.com")).toBe(false);
        expect(r.test("I forgot to open the ] lol ]()")).toBe(false)
    })

    test("Basic masked link", () => {
        expect(r.test("[This is cool!](https://google.com)")).toBe(true)
    })
});

describe("Bold Markdown Regex", () => {
    const r = BOLD_REGEX;

    testEmpty(r);

    test("Invalid", () => {
        expect(r.test("**Womp womp")).toBe(false);
        expect(r.test("Womp womp**")).toBe(false);
        expect(r.test("aiowoijeo")).toBe(false);
        expect(r.test("*This is italics, silly!*")).toBe(false);
        expect(r.test("*This is more italics, silly!* *This can't work at all!* *What a silly goose*")).toBe(false);
    });

    test("Groupings", () => {
        const input = "**This is bold! :D**";
        const res = r.exec(input);
        
        expect(res).not.toBeNull();
        if (res == null) return;
        
        expect(res[1]).toBe("This is bold! :D");
    })
});

describe("Italics Markdown Regex", () => {
    const r = ITALICS_REGEX;

    testEmpty(r);

    test("Invalid", () => {
        expect(r.test("*Womp womp")).toBe(false);
        expect(r.test("Womp womp*")).toBe(false);
        expect(r.test("aiowoijeo")).toBe(false);
        expect(r.test("This is normal, silly!*")).toBe(false);
        expect(r.test("This is more normal text, silly!** [What if this worked? :eyes:]")).toBe(false);
    });

    test("Groupings", () => {
        const input = "*This is italics! :D*";
        const res = r.exec(input);
        
        expect(res).not.toBeNull();
        if (res == null) return;
        
        expect(res[1]).toBe("This is italics! :D");
    })
});

describe("Bold Italics Markdown Regex", () => {
    const r = BOLD_ITALICS_REGEX;
    
    testEmpty(r);

    test("Invalid", () => {
        expect(r.test("*What do **we have here?*")).toBe(false);
        expect(r.test("What about **here?** lol* this is italics*")).toBe(false);
    });

    test("Valid", () => {
        expect(r.test("***This is simple*** :)")).toBe(true);
        expect(r.test("This is *complex* ***like really complex*** *and a bit **more** italics*")).toBe(true);
    });
});

describe("Header Markdown Regex", () => {
    const r = HEADER_REGEX;

    testEmpty(r);

    test("Invalid", () => {
        expect(r.test("#Womp womp")).toBe(false);
        expect(r.test("Womp #wom#p*")).toBe(false);
        expect(r.test("#aiowoij#eo #")).toBe(false);
        expect(r.test("This is normal, #silly!* #")).toBe(false);
        expect(r.test("#This is more normal text, silly!** #[What if this worked? :e#yes:]")).toBe(false);
    });

    test("Groupings", () => {
        const input = "# This is a header! :D";
        const res = r.exec(input);
        
        expect(res).not.toBeNull();
        if (res == null) return;
        
        expect(res[1]).toBe("This is a header! :D");
    });
});

describe("Strike-through markdown regex", () => {
    const r = STRIKETHROUGH_REGEX;

    testEmpty(r);

    test("Invalid", () => {
        expect(r.test("~Oopsie~")).toBe(false);
        expect(r.test("~I forgot the last tilde")).toBe(false);
        expect(r.test("~ What if we did~ This?~~")).toBe(false);
        expect(r.test("~~OOP")).toBe(false);
        expect(r.test("Hmm~~")).toBe(false);
    });

    test("Valid", () => {
        expect(r.test("~~This is crossed out~~")).toBe(true);
        expect(r.test("What if we did **~~*this?*~~**")).toBe(true);
    });
});

describe("Invite Regex", () => {
    const r = INVITE_REGEX;

    testEmpty(r);

    test("Basic discord.gg invite", () => {
        expect(r.test("discord.gg/minecraft")).toBe(true);
        expect(r.test("discord.com/invite/minecraft")).toBe(true);
    })

    test("Weird capitals", () => {
        expect(r.test("dIsCorD.gG/mINeCrafTdUNGeonS")).toBe(true);
    })

    test("Other Discord-Owned Domains", () => {
        expect(r.test("canary.discord.gg/minecraft")).toBe(true);
        expect(r.test("canary.discord.com/invite/minecraft")).toBe(true);

        expect(r.test("ptb.discord.gg/minecraft")).toBe(true);
        expect(r.test("ptb.discord.com/invite/minecraft")).toBe(true);
    })
});