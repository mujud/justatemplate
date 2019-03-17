#!/usr/bin/env node
import { version, description } from "../info.json";
import commander from "commander";
import "./commands";
commander.version(version);
commander.description(description);

commander.usage("[options] <file ...>");

commander.parse(process.argv);
