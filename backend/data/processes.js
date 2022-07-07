const processes = [
  {
    name: "Pick and Place",
    imageUrl:
      "https://pettymayo.com/wp-content/uploads/2021/07/RIA-blog-pick-and-place-robots.jpeg",
    description:
      "A pick and place (PNP) machine is a robotic assembly device that uses a vacuum to lift a component off of a piece of tape, rotate it to the right orientation, then place it on a circuit board. It takes a few hours to setup a machine to build the assembly, but once everything is running, it is very fast.",
    active: false,
    robot:
    {
      name: "U Arm Swift Pro",
      picture:
        "https://assets.newatlas.com/dims4/default/6ee6c35/2147483647/strip/true/crop/1200x800+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fuarm-swift-robot-arm-6.jpg",
      description:
        "The uArm Swift Pro is a high grade desktop robotic assistant that can be utilized in many more applications than its predecessors. Built around an Arduino Mega 2560, the uArm Swift Pro is an open-source and DIY friendly robotic arm platform developed for makers and educational purposes. This little bot is extremely easy to use, almost anyone can learn how to play with it in a few minutes. The uArm supports visual programming as well as Arduino, Python, GRABCAD and ROS programming providing plenty of options for any range of user. Unleash the maker inside and get uArm to make your idea happen!",
      energyConsumption: 123,
      active: false,
      endEffectors: [
        {
          name: "Suction Gripper",
          description: "Pneumatic",
          image: "https://www.distrelec.de/Web/WebShopImages/landscape_large/4-/01/Sparkfun-ROB-14342-30152834-01.jpg"
        },
        {
          name: "Standard Gripper",
          description: "Mechanic",
          image: "https://cdn-reichelt.de/bilder/web/xxl_ws/E400/UFACTORY_SWIFT_PRO_GRE_02.png"
        }
      ],
      sensor1: 23,
      sensor2: 33,
      sensor3: 42,
    }
  },
  {
    name: "Laser Engraving",
    imageUrl:
      "https://www.entrepreneurshipinabox.com/wp-content/uploads/How-Laser-Engraving-Works.jpg",
    description:
      "Laser engraving is the practice of using lasers to engrave an object. Laser marking, on the other hand, is a broader category of methods to leave marks on an object, which in some cases, also includes color change due to chemical/molecular alteration, charring, foaming, melting, ablation, and more. The technique does not involve the use of inks, nor does it involve tool bits which contact the engraving surface and wear out, giving it an advantage over alternative engraving or marking technologies where inks or bit heads have to be replaced regularly.",
    active: false,
    robot:
    {
      name: "uArmSwiftPro",
      picture:
        "https://assets.newatlas.com/dims4/default/6ee6c35/2147483647/strip/true/crop/1200x800+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fuarm-swift-robot-arm-6.jpg",
      description: "Laser engraving is the practice of using lasers to engrave an object. Laser marking, on the other hand, is a broader category of methods to leave marks on an object, which in some cases, also includes color change due to chemical/molecular alteration, charring, foaming, melting, ablation, and more. The technique does not involve the use of inks, nor does it involve tool bits which contact the engraving surface and wear out, giving it an advantage over alternative engraving or marking technologies where inks or bit heads have to be replaced regularly.",
      energyConsumption: 123,
      active: false,
      endEffectors: [
        {
          name: "Laser Engraver",
          description: "Add the laser engraving feature to your uArm Swift Pro device with this additional uArm Swift Laser module.",
          image: "https://cdn2.botland.store/53985-large_default/laser-engraving-kit-for-uarm-swift-pro.jpg"
        }
      ],
      sensor1: 23,
      sensor2: 33,
      sensor3: 42,
    }
  }, {
    name: "3D printing",
    imageUrl:
      "https://www.greenbiz.com/sites/default/files/images/articles/featured/3dprintingasharkyusstock.png",
    description:
      "3D printing or additive manufacturing is the construction of a three-dimensional object from a CAD model or a digital 3D model.[1] It can be done in a variety of processes in which material is deposited, joined or solidified under computer control,[2] with material being added together (such as plastics, liquids or powder grains being fused), typically layer by layer.",
    active: false,
    robot:
    {
      name: "uArmSwiftPro",
      picture:
        "https://assets.newatlas.com/dims4/default/6ee6c35/2147483647/strip/true/crop/1200x800+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fuarm-swift-robot-arm-6.jpg",
      description:
        "3D printing or additive manufacturing is the construction of a three-dimensional object from a CAD model or a digital 3D model.[1] It can be done in a variety of processes in which material is deposited, joined or solidified under computer control,[2] with material being added together (such as plastics, liquids or powder grains being fused), typically layer by layer.",
      energyConsumption: 123,
      active: false,
      endEffectors: [
        {
          name: "3D Printing Head",
          description: "With a large printing area of 1000 x 100 x 100mm, a widely supported 3D printing file format in G-Code and high precision of 0.2mm this is a great kit to turn your uArm into a high-end 3D printer.",
          image: "https://i.ebayimg.com/images/g/tQ4AAOSwrnRace8a/s-l500.jpg"
        }
      ],
      sensor1: 23,
      sensor2: 33,
      sensor3: 42,
    }
  }
];

module.exports = processes;



