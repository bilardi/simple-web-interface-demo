# Web Interface Demo

## Form HTML

Un [form](https://www.w3schools.com/html/html_forms.asp) HTML è un componente di una pagina web che permette l’interazione con l’utente. Per creare un form HTML si usa il tag `<form> </form>`.

Il form HTML permettono l’interazione con l’utente nei siti e nelle applicazioni web, quindi è importante renderli accessibili. Come minimo si richiede di soddisfare le seguenti indicazioni:

1. per ogni elemento del form inserire un attributo `aria-label` di descrizione e usare l’elemento `<label>` per descrivere l’input richiesto
2. nei form complessi o estesi usare gli elementi `<fieldset>` e
`<legend>` per raggruppare e associare, rispettivamente, i
relativi elementi del form.

Per creare gli elementi interattivi dei form che accettano dati dall’utente si usa l’elemento `<input>` che non prevede un tag di chiusura. Questo elemento è uno dei più complessi in quanto sono possibili molte combinazioni come mostrato in tabella. Se l’attributo `type` non è specificato si usa il tipo di default `text`.

### Special input types

* per i type `email` e `url`, c'è un controllo se il formato è corretto quando si clicca sull'input type di tipo `submit`
* al type `search` è necessario aggiungere l'attributo `name` perché sennò non viene inviato nulla quando si clicca sull'input type di tipo `submit`
* gli input con type `radio` che vogliamo collegare, devono avere lo stesso attributo `name`

### Incompatibilità

Quanto detto fin'ora è supportato dai principali browser: Chrome, Firefox, IE (Internet Explorer / Edge), Safari, Opera.

Alcuni tipi di input però non sono supportati. Per esempio, sul browser Firefox non sono supportati
* i check automatici sul type `email`, quindi è necessario aggiungere l'attributo `pattern` in modo da forzare un controllo quando si clicca sull'input type di tipo `submit`
* i type `week` e `month`, quindi appaiono come input di type `text`

## DOM

Con JavaScript si può accedere e manipolare il [DOM](https://www.w3schools.com/js/js_htmldom.asp), il Document Object Model, la rappresentazione che il browser si crea della pagina web.

Il DOM permette al codice JavaScript di accedere ai contenuti testuali e agli elementi della pagina trattandoli come oggetti JavaScript.

Il DOM è uno standard del W3C che definisce un’interfaccia di programmazione (API) neutrale, indipendente dal linguaggio.

### Formato

Ci sono vari tipi di nodi nel DOM:
* elemento, per esempio `<h1>`, `<p>`, `<ul>`, ..
* testo, per esempio `<p>questo è un testo</p>`, la frase **questo è un testo** rappresenta un nodo di tipo testo
* documento, per esempio `<!doctype html>`
* commento, per esempio `<!—- questo è un commento -->`
* istruzione per il processore, per esempio `<?php echo $nome ?>`

### Gestione

Nella DOM API sono presenti alcuni metodi che permettono di
accedere agli elementi del DOM. Elenchiamo quelli più utilizzati:

* `document.getElementById(identifier)` restituisce l’elemento con id = "identifier"
* `document.getElementsByTagName(tagName)` restituisce un elenco di elementi che si chiamano "tagName".
* `document.getElementsByClassName(className)` restituisce un elenco di elementi con class = "className"

In questi metodi i parametri identifier, tagName e className
sono di tipo string.

## JSON

[JSON](https://www.w3schools.com/js/js_json_intro.asp) è l'acronimo di JavaScript Object Notation. JSON è un formato testuale per lo scambio di dati, principalmente tra server e client.

## Formato

Il formato JSON è basato su tre tipi di strutture di dati:

* serie di coppie chiave/valore
* liste ordinate di valori, chiamate array []
* costrutti annidati, chiamati dizionari {}

Il `valore` può essere un tipo elementare (stringa, numero intero o con la virgola, booleano), null, un array o un oggetto. Se il valore è una stringa, questa è racchiusa tra doppie virgolette.

Un JSON vuoto può essere:

* un file vuoto
* un file con dentro solo []
* un file con dentro solo {}

Un JSON che contiene qualche cosa può essere:

* una stringa di caratteri tra doppi apici
* un array di valori o dizionari
* un oggetto, chiamato dizionario {} che può avere dentro uno, alcuni o tutti i punti seguenti
    * "key": "value"
    * "key": [{ .. }, { .. }, ..], dove il valore è un array di oggetti o di valori
    * "key": {}, dove il valore è un oggetto

### Gestione

Un programma JavaScript può convertire una stringa JSON in un oggetto JavaScript usando la funzione `JSON.parse()`. Questo può succedere quando, per esempio, carichiamo il contenuto di un file JSON.

Un programma JavaScript può convertire un oggetto JavaScript in una stringa JSON con la
funzione `JSON.stringify()`. Questo può succedere quando, per esempio, abbiamo creato un oggetto di tipo dizionario e vogliamo salvarlo su file.

Per i file che contengono stringhe di dati in formato JSON si usa l’estensione `.json`.

## XML

[XML](https://www.w3schools.com/xml/default.ASP) è l'acronimo di eXtensible Markup Language. XML è un linguaggio formale, indipendente da software e hardware, per la memorizzazione e il trasporto di dati.

Si tratta di un linguaggio di marcatura, simile all'HTML, ma i cui tag possono essere definiti in base alle proprie esigenze. XML è stato infatti progettato per descrivere la natura dei dati che costituiscono le informazioni (semantica) e costituisce un formato per la trasmissione dei dati flessibile e facilmente leggibile
dall’uomo.

### Formato

La sintassi di XML è formata essenzialmente da tag (o elementi) i quali possono avere attributi ed eventualmente al proprio interno altri tag.

La presenza dei tag è necessaria per dividere il contenuto informativo del documento dalla sintassi utilizzata per rappresentarlo.

Regole per la definizione degli [elementi](https://www.w3schools.com/xml/xml_elements.asp) XML:

* i nomi sono case-sensitive
* ogni elemento aperto deve essere chiuso entro la fine del documento, eccetto per i tag senza valore che presenteranno solo quello di chiusura
* possono essere nidificati e, in tal caso, vanno chiusi esattamente nell’ordine inverso a quello di apertura
* un documento XML deve avere un unico elemento radice in cui tutti gli altri sono nidificati

I tag possono avere degli [attributi](https://www.w3schools.com/xml/xml_attributes.asp): gli attributi sono usati per definire quelle proprietà che non possono o non si vogliono inserire nel contenuto dell’elemento.

Regole generali per gli attributi:

* I nomi degli attributi sono case-sensitive
* Lo stesso tag non può contenere due attributi con lo stesso nome
* Non sono ammessi attributi senza valore (solo nome)
* Il valore degli attributi deve essere specificato tra apici (') o
doppi apici (le virgolette ")
* Il valore può contenere riferimenti a entità
* Il valore non può contenere markup, sezioni CDATA o virgolette uguali a quelle iniziali

Le entità predefinite sono:

* `&amp;` che sta per &
* `&lt;` che sta per <
* `&gt;` che sta per >
* `&apos;` che sta per '
* `&quot;` che sta per "

I [namespace](https://www.w3schools.com/xml/xml_namespaces.asp) sono dei prefissi necessari per evitare conflitti di nome quando si uniscono documenti XML da differenti origini.

I conflitti di nome dei tag, con significato differente, possono essere evitati usando un prefisso seguito da due punti (:) e il nome del tag:

* se entrambi i documenti XML da unire usano il tag `<table>` ma ha significato differente
* si può mettere un prefisso su ciascun tag, uno differente per documento:
    * il primo, per esempio, con `<p:table>`
    * il secondo, per esempio, con `<s:table>`

Per evitare di aggiungere il namespace (il prefisso) su ciascun tag, e relativi annidati, si può usare l'attributo `xmlns` che vuol dire appunto XML namespace.

### Gestione

Un programma JavaScript può convertire una stringa XML in un oggetto JavaScript usando la funzione `DOMParser().parseFromString()`. Questo può succedere quando, per esempio, carichiamo il contenuto di un file XML.

Nel momento in cui abbiamo un oggetto, questo lo possiamo gestire come un `document` di tipo DOM. Quindi potremo applicare il metodo `getElementById` o `getElementsByTagName`.

Un programma JavaScript può convertire un oggetto JavaScript in una stringa XML con la
funzione `toXMLString()`. Questo può succedere quando, per esempio, abbiamo creato (o ricevuto tramite `XMLHttpRequest()`) un oggetto di tipo XML e vogliamo salvarlo su file.

Per i file che contengono stringhe di dati in formato XML si usa l’estensione `.xml`.

## AJAX

[AJAX](https://www.w3schools.com/js/js_ajax_intro.asp) è l'acronimo per Asynchronous JavaScript And XML. AJAX non è un linguaggio di programmazione ma solo la metodica che vede combinate:

* l'oggetto `XMLHttpRequest`, la richiesta di dati ad un web server
* JavaScript e DOM per la visualizzazione o l'uso dei dati ricevuti

Questa tecnica permette di creare pagine dinamiche in modo asincrono e cioè

* le informazioni dei tag HTML (come potrebbero essere dei `<div>`) possono essere caricati facendo una richiesta ad un web server
* finché viene eseguita la richiesta, quel tag sarà vuoto (o avrà una gif di loading)
* quando il server risponde, verranno caricate le informazioni
