import { Component } from '@angular/core';

interface SoundDemo {
  soundPath: string;
  imagePath: string;
  title: string;
  text: string;
};

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  demos: SoundDemo[] = [
    {
      soundPath: 'assets/audio/demo1.mp3',
      imagePath: 'assets/img/pictures/1.webp',
      title: 'Web Novel (with POVs and dialogs)',
      text: `Chapter 1: A New Beginning

      Lila's Point of View

      On a stormy autumn day, rain pours down as thunder rumbles, setting a grim mood. Standing on the porch, the tension between us is as thick as the clouds overhead.
      Tears fall down my cheeks as my stepfather pushes me against the wall, holding my hair tightly. He hits my face over and over, making my lip bleed and my eye puff up. I fall to the floor, crying hard.
      'Please, stop! Why are you doing this?' I beg.
      'YOU'RE THE REASON YOUR MOTHER DIED!' he yells angrily.
      'It was an accident! I didn't mean for her to die,' I say, looking straight into his cold eyes. 'Please, show some kindness,' I ask.
      He looks at me with hate and then with a mean smile.
      'Lila, you're not my daughter. Your mother told me your real father died before you were born. I acted like your dad because I loved her,' he says with no warmth.
      'That can't be true! Mom would never keep that from me!' I say, crying.
      'She wanted to tell you the truth when you turned eighteen, hoping you'd have a happy life until then. But now, you'll never find out about your real father,' he taunts, kicking me hard in the ribs. I scream in pain as he locks the door, leaving me alone.`
    }, {
      soundPath: 'assets/audio/demo2.mp3',
      imagePath: 'assets/img/pictures/2.webp',
      title: 'Crime Story (action)',
      text: `
      Chapter 1: The Ultimatum of Marcus

Marcus Rossi, known as a mafia boss, walked into the big, old warehouse and saw ten men in black suits kneeling on the floor. The place wasn't as fancy as his usual haunts.
There was a nice chair for Marcus, and he sat down calmly. Other men stood around the room, each holding a gun. The kneeling men didn't have any weapons.
Two men in black suits stood behind Marcus. He reached out with his right hand, and one of them handed him a gun.
Without saying a word, Marcus fired his gun at one of the kneeling men, who fell dead instantly.
The nine other men gasped, but everyone else stayed completely calm.
'There... He looks better dead and gone, and you all will end up just like him if you don't tell me where the bags are,' Marcus stated coldly.
'I swear, boss. We don't know. The bags of drugs just went missing so suddenly,' one of the men pleaded.
A gunshot interrupted the man mid-sentence, and he too was on the floor, dead.
The room was filled with the whimpers of the eight remaining men.
'You know one thing you should not do? Stealing from Marcus Rossi!'
      `,
    }, {
      soundPath: 'assets/audio/demo3.mp3',
      imagePath: 'assets/img/pictures/3.webp',
      title: `Web Novel with Child's POV`,
      text: `
      Lily's Point of View. 6 years old.

I open my eyes and stretch big, reaching my hands super high. I'm all snuggled up inside a big, cozy tree! But, how did I get here? I can't remember. Under my toes, there's the softest moss ever, so I crawl out to see this place. All around, the forest animals come to say hi. They nuzzle their cute noses on my legs, and when I sit on the grass, they all cuddle in my lap. There are bunnies, foxes, squirrels, deer, big elks, birds, and teeny tiny mice. They all stay with me and never go away. I feel really, really safe and super loved here. This forest is my most favorite place ever!
I play hide and seek with my new friend, a fox I name Rusty. I say, "Hi, I'm Lily," and Rusty bumps my head gently and runs around super fast. He jumps at me and we both fall down, laughing lots! And guess what? We find a secret cave, behind lots of vine curtains!
The cave is so pretty. There are glow worms that twinkle like tiny stars. It's like a fairy tale! The walls have twisty green vines and beautiful purple flowers, and it smells like yummy perfume.
      `,
    }, {
      soundPath: 'assets/audio/demo4.mp3',
      imagePath: 'assets/img/pictures/4.webp',
      title: `Werefolf Novel`,
      text: `
      I got up early, charged with excitement. Tomorrow's my eighteenth birthday, the day I meet my wolf. Despite the rumors of pain during the first shift, I wasn't bothered. Pain is temporary, and it eases with time. I can handle a bit of it.
      I just wished my parents could see my first shift. It's been eight years since they passed, and it's still tough.
      They were victims of a rogue attack.
      Rogues are loner wolves, ousted from packs for crimes or by choice, although that's uncommon. Wolves are pack creatures; we don't like solitude. A wolf turning rogue usually means trouble in their pack or a lost mate, driving them to leave.
      `,
    }
  ];
}
