import { command, action } from "commanderjsdecorators";
import prompts from "prompts";
import commander from "commander";
@command({
    commander: commander,
    title: "init [path]",
    description: "initialize",
    options: []
})
export class Init {
    @action()
    async action(cmd: string, options: commander.Command) {
        console.log("path: " + cmd);
        const response = await prompts({
            type: "select",
            name: "value",
            choices: [
                { title: "Red", value: "#ff0000" },
                { title: "Green", value: "#00ff00" },
                { title: "Blue", value: "#0000ff" }
            ],
            message: "How old are you?"

            // validate: value => (value < 18 ? `Nightclub is 18+ only` : true)
        });

        console.log(response);
    }
}