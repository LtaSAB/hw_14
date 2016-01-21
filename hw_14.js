//уровень 1
while (isFree("north")) {
	north();
}
//уровень 2
while (isFree("east")) {
	east();
}
//уровень 3
while (isFree("south")) {
	south();
	east();
}
//уровень 4
while (isFree("east")||(isFree("south"))) {
	if (isFree("east")) {
	east ();
	}
	else {
	south ();
	}
}
//уровень 5
while (isFree("east")) {
east ();
}
while (isFree("south")||(isFree("west"))) {
	if (isFree("south")) {
	south ();
	}
	else {
	west ();
	}
}
while (isFree("north")||(isFree("west"))) {
if (isFree("north")) {
	north ();
	}
	else {
	west ();
	}
}
while (isFree("south")||(isFree("east"))) {
if (isFree("south")) {
	south ();
	}
	else {
	east ();
	}
}