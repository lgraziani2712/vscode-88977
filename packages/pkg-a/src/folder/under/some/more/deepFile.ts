// This is what VSCode offered me
import { a } from "pkg-a/src/file";

// If I try to import the "a" function, the auto-import operation will
// be offering me the "pkg-a/lib/file" alias. But what I need is
// "../../../../file" because this is a lib. When TS build this, it
// won't translate those aliases to relative paths in files in the same pkg.

// What I need
// import { a } from "../../../../file";
// What I get
// import { a } from "pkg-a/src/file";

a();
