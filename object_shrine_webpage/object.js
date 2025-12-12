// object data
const itemData = {
    'cross': {
        title: 'stigmata cellularis',
        description: 'A crucifix bearing the wounds of a different kind– biological cells embedded like digital stigmata into the traditional Catholic form. Ancient devotion meets molecular truth. Devolution is biological, belif lives in the tissue and blood of the moral, the sacred resides even in the smallest units of life. The body is now a scientific specimen– multiplying infinitely in microscopic form, collapsing the distance between spiritual transcendence and corporeal reality. Suffering is measured through mitochondria and salvation observed under magnification. The body and spirit collapse into one material truth.'
    },
    'incense-box': {
        title: 'Vessel of Living Decay',
        description: 'Sacred incense box blooming with spores. Vivid gardens bloom across the lacquered wood, transforming ritual into biology, intention into organism. A purification ritual into meditation on decomposiution. What grows in sacred spaces? The organic and the holy share a common language– both consume, both transform, both return matter to the void'
    },
    'rosary-1': {
        title: 'Prayer Beads for the Mycotic Divine',
        description: 'Fungal networks creep across each bead like corrupted data, while the pendant holds a deity rendered in silicon, a tech god that presides over this microbial congregation– faith refactored for the posthuman age, as symbiosis. The rosary becomes an ecosystem. Prayer as a living network, devotion as something that spreads, grows, and consumes.'
    },
    'nintendo-ds': {
        title: 'Transparent Codex of Forgotten Play [Nintendo DS]',
        description: 'An ancient relic of the digital past. A hinged oracle made visible, its circuits exposed like illuminated manuscripts. A see-through prophecy of when wonder fit in just two screens and a stylus, and childhood lived in simple pixels. It speaks of a lost innocence– when our devices fir in our pockets, when batteries dies, and we could see all their secrets laid bare. '
    },
    'gameboy': {
        title: 'Transparent Temple of 8-Bit Pilgrimages [Game Boy]',
        description: 'Excavated from the past, this transparent Game Boy displays its primitive nervous system. An ancient relic of pixelated worlds, when 8-bits was enough for joy, when games were in cartridges you could hold. Through its clear plastic shell, we witness the simplicity we’ve abandoned– 4 simple buttons, one purpose, and no connection to the infinite void of the internet. An archaeology of handheld transcendence.'
    },
    'phone': {
        title: 'Ancestral Communication Device [Telephone]',
       description: 'Our elders held these to their faces, speaking into plastic as if distance could be conquered by coiled cords alone. Before the touch screen, before the infinite scroll. How crazy to imagine– a phone that only made calls,buttons you had to press, conversations that ended. Its transparent body exposes the archaeology of connection, the fossil record of a simpler hunger for human voice.'
    },
    'circuit-board': {
        title: 'digital romance relic of the LED',
        description: 'Relic of digital romance– LEDs arranged in cardiac formation, printed angels blessing each circuit. How romantic, I suppose, to worship with electricity– to make the heart beat in binary, to give love a voltage. Sacred kitsch from the early days of making technology feel human, when we still hoped our devices might save us…'
    },
    'rosary-2': {
        title: 'mycelial meditation',
        description: 'Buddhist prayer beads are overtaken by fungal logic and circuitry– the organic meets electronic in acts of devotion. Fungal networks map enlightenment paths between digital nodes. Each bead a spore, each wire a hyphal thread. Technology and decay share the same grammar: both spread, both network, both remind us that nothing remains unchanged.'
    },

    //i totally messed this up...
    'tricorder': {
        title: 'Motorola Ghost Press [Portable Printer]',
        description: 'An ancient relic– Motorola-branded vintage if you will. This transparent printer once materialized thoughts into paper—how quaint, how vintage. Its green shell exposes the mechanical rituals of the recent past: rollers, motors, the violence of ink forced onto fiber. Every gear of communication archaeology exposed in translucent green nostalgiaA printer as a place of physicality for our obsolescence, measuring how quickly the present becomes artifact.'
    },
    'buddha': {
        title: 'Digital Mandala of Wire + Scale',
        description: 'A buddha shrine wrapped in dragon imagery and technological overlays—Eastern mysticism circuited with Western digital logic. Meditation meets machine code. The dragon of wisdom devours binary streams, technological glyphs overlay sacred space,the Buddhas serenity holds steady against flickering pixels. Here, enlightenment is rendered, consciousness is processed, and nirvana runs on electricity– merging mythology with machinery'
    },
    'incense-holder': {
        title: 'Smoke Compiled',
        description: 'Code digitally inscribed across an incense holder: input, output, call function, binary cascades. The syntax of smoke meets the grammar of programming. As incense rises, so do commands—if/then statements of devotion, loops of prayer, functions that return to void. Sacred ritual translated into executable instructions: burn(incense); release(prayer); return(peace); Binary prayers written in ash and algorithm, the ceremonial made computational.'
    },
    //THIS IS THE TRICORDER... i am too lazy to fix the name...
    'pager': {
        title: 'Obsolete Urgency [pager/tricorder device]',
        description: 'Ancient relic of immediate but limited communication. Before smartphones, before constant connection, there was this: a device that buzzed with pure urgency, displaying only numbers, only need. How quickly it became trash. How completely we have forgotten the anxiety of waiting for payphones, of codes that meant "call me back," of messages that could not follow us everywhere.What once read the universe now reads only as ruin. A prophet tool from a timeline that never arrived, still dreaming of stars.'
    }
};

// modal/pop up elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.getElementById('modalClose');

// click listeners for the items
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function() {
        const itemKey = this.getAttribute('data-item');
        const data = itemData[itemKey];
        
        if (data) {
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            modal.classList.add('active');
        }
    });
});

// close button (x)
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

// also can close by clicking outside the pop up
modal.addEventListener('click', e => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

//close the popup with escape key as well
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});