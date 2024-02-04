# Terminal

*Note: les exemples sont pour un OS linux mais sont identiques pour un environnement  windows.*

Le terminal (appelé aussi *console*) permet d'exécuter des logiciels en saisissant leur nom. Il est accessible dans *Visual Studio* par l'onglet `Terminal`.

Il s'agit d'une interface basée sur le texte pour l'interaction avec l'ordinateur. Il existe beaucoup de commandes qu'il n'est pas utile de connaitre entièrement. 

Une commande peut être composée de plusieurs éléments :

* le nom de la commande
* les arguments

## cd

`cd` pour **C**hange **D**irectory permet de positionner le terminal dans un dossier. En effet, à l’instar de l’explorateur de fichiers, le terminal est systématiquement positionné dans un dossier. Par défaut, quand on ouvre le terminal sous VSC, il est positionné dans le dossier courant. Si l’on souhaite changer de dossier, il faut donc utiliser la commande cd.

Par exemple `cd /home/student/Bureau` pour se déplacer dans le dossier `/home/student/Bureau`.

On peut aussi, si l’on est déjà dans le dossier `/home/student`, simplement taper `cd Bureau`.

`/home/student/Bureau` est un chemin dit absolu. Il nous donne le chemin complet depuis la racine de l’ordinateur. Si on tape cd `/home/student/Bureau`, un chemin absolu,la commande sera valable peu importe où est positionné le terminal.

`Bureau` est un chemin relatif, `cd Bureau` n’est valable que si le terminal est positionné dans le dossier `/home/student`.

Si l'on est dans le dossier `Bureau`,  on peut remonter au dossier parent avec `cd ..`. On arrive ainsi au dossier `/home/student`.

## mkdir

Si l’on souhaite créer un nouveau dossier, nous pouvons utiliser la commande mkdir (pour **M**a**K**e **DIR**ectory).

Par exemple, je suis dans le dossier `/home/student/Bureau/html`. Je souhaite créer un dossier `S01`, je vais utiliser la commande `mkdir S01`, qui va créer un dossier `S01` à l’endroit ou est positionné le terminal. On aurait pu aussi écrire `mkdir /home/student/Bureau/html/S01` (chemin absolu) du dossier à créer, le résultat aurait été exactement le même.

Si je souhaite créer plusieurs dossiers d’un seul coup : `mkdir S01 S02 S03 S04 S01 S02 S03 S04`.

## ls

La commande `ls`, pour **L**i**S**t permet de lister les dossiers et fichiers du dossier dans lequel le terminal est positionné. Par défaut elle ne liste pas les fichiers et dossiers cachés (ceux dont le nom commence par .). Si l’on souhaite lister TOUS les fichiers et dossiers, il faut passer l’argument `-a `(a pour all) à la commande : `ls -a`.

## touch

Si l’on souhaite créer un nouveau fichier vide, nous pouvons utiliser la commande `touch`.

Par exemple, je suis dans le dossier `/home/student/Bureau/html`. Je souhaite créer un fichier `toto`, je vais utiliser la commande `touch toto`, qui va créer un fichier `toto` à l’endroit ou est positionné le terminal. On aurait pu aussi écrire `touch /home/student/Bureau/html/toto` (chemin absolu) du dossier à créer, le résultat aurait été exactement le même.

## pwd

Si je souhaite savoir où est positionné le terminal, je peux utiliser la commande `pwd`, pour **P**rint **W**orking **D**irectory qui va afficher dans le terminal le chemin absolu du dossier dans lequel il est positionné.