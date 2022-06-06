/*
Sorcery ✨
Fire 🔥
Water 🌊
Earth 🌑
Air 🍃
Necromancy 💀
Holy 💥
Mind 🧠
Illusion 👁
Nature 🌳
*/

// { name: "", domains: [], cost: 0, hasTiers: true, description: "" },

export const createElement = (tier) => {
  return tier + 2;
}
export const movementCondition = (tier) => {
  switch(tier){
    case 1:
      return 3;
    case 2:
      return 6;
    case 3:
    default:
        return 12;
  }
}

export const geas = (tier) => {
  switch(tier){
    case 1:
      return 3;
    case 2:
      return 6;
    case 3:
      return 9;
    default:
        return 15;
  }
}

export const availableEffects = [

  { name: "Attack", domains: ["Sorcery", "Fire", "Water", "Air", "Earth", "Necromancy", "Holy"], modifierType: 'add', amount: 0, hasTiers: false, description: "takes an attack using the Caster's Magical Attack specialty that deals d10 DMG" },
  { name: "Attack (Targeted)", domains: ["Sorcery", "Necromancy", "Holy"], modifierType: 'add', amount: 2, hasTiers: false, description: "takes an attack which cannot be dodged that deals d10 DMG" },
  { name: "Create Element", maxTier:3, domains: ["Air", "Earth", "Fire", "Water"], modifierType: 'function', amount: 'createElement', hasTiers: true, description: "creates {elementAmount([tier],[domain])}" },
  { name: "Destroy Element", maxTier:3, domains: ["Air", "Earth", "Fire", "Water"], modifierType: 'add', amount: 1, hasTiers: true, description: "destroys {elementAmount([tier],[domain])}" },  // TODO
  { name: "Apply Force", domains: ["Sorcery", "Fire", "Water", "Air", "Earth", "Nature"], modifierType: 'add', amount: 0, hasTiers: true, description: "is moved [Tier] meters [notes]" },
  { name: "Damage", domains: ["Sorcery", "Fire", "Water", "Air", "Earth", "Necromancy"], modifierType: 'add', amount: 2, hasTiers: true, description: "+[tier] DMG" },
  { name: "Damage (Armor Piercing)", domains: ["Fire", "Water", "Necromancy"], modifierType: 'add', amount: 1, hasTiers: true, description: "[tier] AP" },
  { name: "Transform", domains: ["Holy", "Water", "Air", "Earth", "Necromancy", "Nature"], modifierType: 'add', amount: 1, hasTiers: true, description: "turns [tier * 1000]cm^3 of [domain] into [notes]" },
  { name: "Armor", domains: ["Sorcery", "Earth", "Nature"], modifierType: 'add', amount: 4, hasTiers: true, description: " gains [tier * 3] Armor point(s)" },
  { name: "Healing (1)", domains: ["Holy", "Water"], modifierType: 'add', amount: 4, hasTiers: true, description: "heals [tier] Body point(s)" },
  { name: "Healing (1d10)", domains: ["Holy", "Nature"], modifierType: 'add', amount: 15, hasTiers: true, description: "heals [tier]d10 Body points" },
  { name: "Drain", domains: ["Necromancy"], modifierType: 'add', amount: 3, hasTiers: true, description: "any body points taken by the spell can be redistributed by the caster" },
  { name: "Restore Wound", domains: ["Holy", "Necromancy"], modifierType: 'add', amount: 2, hasTiers: true, description: "changes the wound up by as many points as body healed, or [tier], whichever is lower" },
  { name: "Resurrect host (Holy)", domains: ["Holy"], modifierType: 'add', amount: 20, hasTiers: true, description: "is brought back to life by pulling their soul from the ether.  The soul has to belong to the specific body, and be willing to come back to the body." },
  { name: "Resurrect host (Necromancy)", domains: ["Necromancy"], modifierType: 'add', amount: 2, hasTiers: true, description: "is brought back to life by either grabbing someone’s soul or creating a simulacrum from the ether. Normally the heal power does not work on dead targets, but coupled with the resurrection power, heals can add body points even if the target has less than their negative maximum body point total. Tthe soul can belong to anyone or can be an simulacrum made of many souls that doesn’t do anything unless commanded. A soul belonging to another body automatically gains a point of madness. It leaves its body after the spell is over." },
  { name: "Emulate Item", domains: ["Holy", "Sorcery", "Fire", "Water"], modifierType: 'add', amount: 1, hasTiers: true, description: "emulates [notes] made of [domain] at 10 Structure Points or what the item had, whichever is less." },
  { name: "Emulate Item", domains: ["Air"], modifierType: 'add', amount: 1, hasTiers: true, description: "emulates [notes] made of [domain] at 1 Structure Points or what the item had, whichever is less." },
  { name: "Emulate Item", domains: ["Earth"], modifierType: 'add', amount: 1, hasTiers: true, description: "emulates [notes] made of [domain]" },
  { name: "Harden Item", domains: ["Sorcery", "Holy", "Nature"], modifierType: 'add', amount: 2, hasTiers: true, description: "Adds [tier] structure points to the [notes] item" },
  { name: "Harden Item (Earth)", domains: ["Earth"], modifierType: 'add', amount: 1, hasTiers: true, description: "Adds [tier] structure points to the [notes] item" },
  { name: "Animate Materials (Earth)", domains: ["Earth",], modifierType: 'add', amount: 1, hasTiers: true, description: "creates an animated golem with the following Stats: [notes]" },
  { name: "Animate Materials (Necromancy)", domains: ["Necromancy",], modifierType: 'add', amount: 1, hasTiers: true, description: "creates an animated skeleton or ghoul with the following Stats: [notes]" },
  { name: "Animate Materials (Nature)", domains: ["Nature",], modifierType: 'add', amount: 1, hasTiers: true, description: "creates an animated tree with the following Stats: [notes]" },
  { name: "Animate Materials (Sorcery)", domains: ["Sorcery",], modifierType: 'add', amount: 1, hasTiers: true, description: "creates an animated item or cloth with the following Stats: [notes]" },
  { name: "Control", domains: ["Necromancy", "Mind"], modifierType: 'add', amount: 20, hasTiers: true, description: "acts against their interests for the duration of the spell if they have no mind points left or take [tier*5] damage to their mind. During the entire time the character is under control they can be given commands by the caster, and they have to follow those commands. The control wears off if the character is knocked out, or gains more than 10 Mind points." },
  { name: "Control (Inanimate)", domains: ["Sorcery", "Earth", "Nature"], modifierType: 'add', amount: 20, hasTiers: true, description: "Animated inanimate objects only. Makes a character act against their interests for the duration of the spell if they have no mind points left. If they do, the spell does 5 damage to their mind. During the entire time the character is under control they can be given commands by the caster, and they have to follow those commands. The control wears off if the character is knocked out, or gains more than 10 Mind points." },
  { name: "Control (Limited)", domains: ["Nature"], modifierType: 'add', amount: 10, hasTiers: true, description: "acts against their interests if it has an INT bonus of -2 or lower. Every time the character has to follow a command they do not consent to they can roll a Willpower-Self Control check vs [resist] to see if they snap out of it. If the user has Mind points left, it does [tier*2] damage per level of limited control." },
  { name: "Control", domains: ["Nature"], modifierType: 'add', amount: 20, hasTiers: true, description: "acts against their interests for the duration of the spell if they have no mind points left or take [tier*5] damage to their mind. During the entire time the character is under control they can be given commands by the caster, and they have to follow those commands. The control wears off if the character is knocked out, or gains more than 10 Mind points." },
  { name: "Control (Limited)", domains: ["Necromancy", "Mind"], modifierType: 'add', amount: 10, hasTiers: true, description: "acts against their interests if it has an INT bonus of -2 or lower. Every time the character has to follow a command they do not consent to they can roll a Willpower-Self Control check vs[resist] to see if they snap out of it. If the user has Mind points left, it does [tier*2] damage per level of limited control." },
 
  { name: "Apply Damaging Condition", domains: ["Fire","Water","Necromancy","Air"], modifierType: 'add', amount: 7, hasTiers: true, description: "{damagingCondition([domain])}, the highest of [tier]d10 damage per round for [tier] minutes or until they pass an action against difficulty [resist] to stop the condition" },
  { name: "Apply Haste Condition", domains: ["Sorcery","Holy","Air","Nature"], modifierType: 'add', amount: 20, hasTiers: true, description: "gains a third action per turn for [tier] minutes" },
  { name: "Apply Sluggish Condition", domains: ["Sorcery","Water","Necromancy","Nature"], modifierType: 'add', amount: 20, hasTiers: true, description: "loses an action per turn for [tier] minutes or until they pass an action against difficulty [resist] to stop the condition" },
  { name: "Apply Movement Condition", domains: ["Water","Necromancy","Nature"], modifierType: 'function', amount: 'movementCondition', hasTiers: true, maxTier:3, description: "is trapped, {movementConditionDesc([tier])}" },

  { name: "Temporary Body (1)", domains: ["Holy", "Earth", "Necomancy", "Nature"], modifierType: 'add', amount: 1, hasTiers: true, description: "adds [tier] Body point(s) and {temporaryBodySideEffect([domain])} until the end of the spell" },
  { name: "Temporary Body (1d10)", domains: ["Holy", "Earth", "Necomancy", "Nature"], modifierType: 'add', amount: 5, hasTiers: true, description: "adds [tier]d10 Body and {temporaryBodySideEffect([domain])} points until the end of the spell" },
  
  { name: "Geas (Conscious Actions)", domains: ["Mind","Necromancy"], modifierType: 'function', amount: 'geas', hasTiers: true, maxTier:4, description: "is forced to [notes] if they have less than d10+[tier] Mind Points, or otherwise they lose [tier] Mind Points" },
  { name: "Geas (Unconscious Actions)", domains: ["Water","Nature","Necromancy"], modifierType: 'function', amount: 'geas', hasTiers: true, maxTier:4, description: "is forced to [notes] if they have less than d10+[tier] Mind Points, or otherwise they lose [tier] Mind Points" },
  { name: "Geas (Inanimate Object)", domains: ["Nature","Earth","Sorcery"], modifierType: 'function', amount: 'geas', hasTiers: true, maxTier:4, description: "is forced to [notes] if they have less than d10+[tier] Mind Points, or otherwise they lose [tier] Mind Points" },
  
  { name: "Divination", domains: ["Holy"], modifierType: 'add', amount: 6, hasTiers: true, description: "gets to roll a die and use the result to replace any die they see rolled until the end of the spell" },
  { name: "Divination", domains: ["Necromancy","Sorcery"], modifierType: 'add', amount: 10, hasTiers: true, description: "gets to roll a die and use the result to replace any die they see rolled until the end of the spell" },

  { name: "Morph Form", domains: ["Necromancy","Nature"], modifierType: 'add', amount: 7, hasTiers: false, description: "changes into an [notes] animal of the same size as the creature" },

  { name: "Read Mind", domains: ["Mind"], modifierType: 'add', amount: 3, hasTiers: true, maxTier:4, description: "has their {thoughts([tier])} read if they are willing or have been reduced to 0 Mind, and lose 2 Mind if they resist" },

  { name: "Communicate Thought", domains: ["Mind","Nature"], modifierType: 'add', amount: 3, hasTiers: true, maxTier:3, description: "communicate {comms([tier])} to the caster,talk to another living thing within range of the spell, whether that be a human, animal or any other creature. The caster and target do not need to share a language, or even be able to speak a language. If they are unaware of the caster, count as an attack against the mind with damage 1" },


  { name: "Help Attribute", domains: ["Mind", "Holy", "Necromancy", "Earth", "Air", "Water", "Illusion", "Nature"], modifierType: 'add', amount: 4, hasTiers: true, description: "Add [tier] points to [notes]" },
  { name: "Help Skill", domains: ["Mind", "Holy", "Necromancy", "Earth", "Air", "Water", "Illusion", "Nature"], modifierType: 'add', amount: 2, hasTiers: true, description: "Add [tier] points to [notes]" },
  { name: "Help Speciality", domains: ["Mind", "Holy", "Necromancy", "Earth", "Air", "Water", "Illusion", "Nature"], modifierType: 'add', amount: 1, hasTiers: true, description: "Add [tier] points to [notes]" },
]