export default async function ({ addon, console }) {
  // const Blockly = await addon.tab.traps.getBlockly();

  const blockComponents = {};

  function buildDropdownComponents() {
    const components = addon.settings.get("square-dropdowns")
      ? [
          "[",
          {
            name: "",
            function: (input) => input.fieldRow[0].text_,
          },
          " v]",
        ]
      : [
          "(",
          {
            name: "",
            function: (input) => input.fieldRow[0].text_,
          },
          " v)",
        ];

    blockComponents["motion_goto_menu"] = components;
    blockComponents["motion_glideto_menu"] = components;
    blockComponents["motion_pointtowardsmenu"] = components;
    blockComponents["looks_costume"] = components;
    blockComponents["looks_backdrops"] = components;
    blockComponents["sound_sounds_menu"] = components;
    blockComponents["event_broadcast_menu"] = components;
    blockComponents["control_create_clone_of_menu"] = components;
    blockComponents["sensing_touchingobjectmenu"] = components;
    blockComponents["sensing_distancetomenu"] = components;
    blockComponents["sensing_keyoptions"] = components;
    blockComponents["sensing_of_object_menu"] = components;
    blockComponents["pen_menu_colorParam"] = components;
    blockComponents["music_menu_DRUM"] = components;
    blockComponents["music_menu_INSTRUMENT"] = components;
    blockComponents["videoSensing_menu_SUBJECT"] = components;
    blockComponents["videoSensing_menu_ATTRIBUTE"] = components;
    blockComponents["videoSensing_menu_VIDEO_STATE"] = components;
  }

  buildDropdownComponents();
  addon.settings.addEventListener("change", buildDropdownComponents);

  const numInputComponents = [
    {
      name: "",
      function: (input) => {
        const text = input.fieldRow[0].text_;
        console.log(/^[\d\.\-eE]*$/.test(text));
        return /^[\d\.\-eE]*$/.test(text) ? `(${text})` : `[${text.replace(/ v$/, " \\v")}]`;
      },
    },
  ];

  blockComponents["text"] = [
    "[",
    { name: "", function: (input) => input.fieldRow[0].text_.replace(/ v$/, " \\v") },
    "]",
  ];
  blockComponents["color_picker"] = ["[", { name: "", function: (input) => input.fieldRow[0].colour_ }, "]"];
  blockComponents["note"] = numInputComponents;
  blockComponents["math_number"] = numInputComponents;
  blockComponents["math_integer"] = numInputComponents;
  blockComponents["math_whole_number"] = numInputComponents;
  blockComponents["math_positive_number"] = numInputComponents;
  blockComponents["math_angle"] = numInputComponents;

  blockComponents["motion_movesteps"] = ["move ", { name: "STEPS" }, " steps"];
  blockComponents["motion_turnright"] = ["turn right ", { name: "DEGREES" }, " degrees"];
  blockComponents["motion_turnleft"] = ["turn left ", { name: "DEGREES" }, " degrees"];

  blockComponents["motion_goto"] = ["go to ", { name: "TO", roundMenuType: "motion_goto_menu" }];
  blockComponents["motion_gotoxy"] = ["go to x: ", { name: "X" }, " y: ", { name: "Y" }];
  blockComponents["motion_glideto"] = [
    "glide ",
    { name: "SECS" },
    " secs to ",
    { name: "TO", roundMenuType: "motion_glideto_menu" },
  ];
  blockComponents["motion_glidesecstoxy"] = [
    "glide ",
    { name: "SECS" },
    " to x: ",
    { name: "X" },
    " y: ",
    { name: "Y" },
  ];

  blockComponents["motion_pointindirection"] = ["point in direction ", { name: "DIRECTION" }];
  blockComponents["motion_pointtowards"] = [
    "point towards ",
    { name: "TOWARDS", roundMenuType: "motion_pointtowards_menu" },
  ];

  blockComponents["motion_changexby"] = ["change x by ", { name: "DX" }];
  blockComponents["motion_setx"] = ["set x to ", { name: "X" }];
  blockComponents["motion_changeyby"] = ["change y by ", { name: "DY" }];
  blockComponents["motion_sety"] = ["set y to ", { name: "Y" }];

  blockComponents["motion_ifonedgebounce"] = ["if on edge, bounce"];

  blockComponents["motion_setrotationstyle"] = ["set rotation style ", { name: "", dropdownFieldIndex: 1 }];

  blockComponents["motion_xposition"] = ["(x position)"];
  blockComponents["motion_yposition"] = ["(y position)"];
  blockComponents["motion_direction"] = ["(direction)"];

  blockComponents["looks_sayforsecs"] = ["say ", { name: "MESSAGE" }, " for ", { name: "SECS" }, " seconds"];
  blockComponents["looks_say"] = ["say", { name: "MESSAGE" }];
  blockComponents["looks_thinkforsecs"] = ["think ", { name: "MESSAGE" }, " for ", { name: "SECS" }, " seconds"];
  blockComponents["looks_think"] = ["think", { name: "MESSAGE" }];

  blockComponents["looks_switchcostumeto"] = ["switch costume to ", { name: "COSTUME" }];
  blockComponents["looks_nextcostume"] = ["next costume"];
  blockComponents["looks_switchbackdropto"] = ["switch costume to ", { name: "BACKDROP" }];
  blockComponents["looks_nextbackdrop"] = ["next backdrop"];

  blockComponents["looks_changesizeby"] = ["change size by ", { name: "CHANGE" }];
  blockComponents["looks_setsizeto"] = ["set size to ", { name: "SIZE" }];

  blockComponents["looks_changeeffectby"] = [
    "change ",
    { name: "CHANGE", dropdownFieldIndex: 1 },
    " effect by ",
    { name: "CHANGE" },
  ];
  blockComponents["looks_seteffectto"] = [
    "set ",
    { name: "VALUE", dropdownFieldIndex: 1 },
    " effect to ",
    { name: "VALUE" },
  ];
  blockComponents["looks_cleargraphiceffects"] = ["clear graphic effects"];

  blockComponents["looks_show"] = ["show"];
  blockComponents["looks_hide"] = ["hide"];

  blockComponents["looks_gotofrontback"] = ["go to ", { name: "", dropdownFieldIndex: 1 }, " layer :: looks"];
  blockComponents["looks_goforwardbackwardlayers"] = [
    "go ",
    { name: "NUM", dropdownFieldIndex: 1 },
    " ",
    { name: "NUM" },
    " layers :: looks",
  ];

  blockComponents["looks_costumenumbername"] = ["(costume ", { name: "", dropdownFieldIndex: 1 }, ") :: looks"];
  blockComponents["looks_backdropnumbername"] = ["(backdrop ", { name: "", dropdownFieldIndex: 1 }, ") :: looks"];
  blockComponents["looks_size"] = ["(size)"];

  blockComponents["sound_playuntildone"] = ["play sound ", { name: "SOUND_MENU" }, " until done"];
  blockComponents["sound_play"] = ["start sound ", { name: "SOUND_MENU" }];
  blockComponents["sound_stopallsounds"] = ["stop all sounds"];

  blockComponents["sound_changeeffectby"] = [
    "change ",
    { name: "VALUE", dropdownFieldIndex: 1 },
    " effect by ",
    { name: "VALUE" },
    " :: sound",
  ];
  blockComponents["sound_seteffectto"] = [
    "set ",
    { name: "VALUE", dropdownFieldIndex: 1 },
    " effect to ",
    { name: "VALUE" },
    " :: sound",
  ];
  blockComponents["sound_clearsoundeffects"] = ["clear sound effects :: sound"];

  blockComponents["sound_changevolumeby"] = ["change volume by ", { name: "VOLUME" }];
  blockComponents["sound_setvolumeto"] = ["set volume to ", { name: "VOLUME" }, " %"];
  blockComponents["sound_volume"] = ["(volume)"];

  // The blocks from the Music extension in scratch 3.0 were part of the sound category in 2.0.
  blockComponents["music_playDrumForBeats"] = ["play drum ", { name: "DRUM" }, " for ", { name: "BEATS" }, " beats"];
  blockComponents["music_restForBeats"] = ["rest for ", { name: "beats" }, " beats"];
  blockComponents["music_playNoteForBeats"] = ["play note ", { name: "NOTE" }, " for ", { name: "BEATS" }, " beats"];
  blockComponents["music_setInstrument"] = ["set instrument to ", { name: "INSTRUMENT" }];
  blockComponents["music_setTempo"] = ["set tempo to ", { name: "TEMPO" }];
  blockComponents["music_changeTempo"] = ["change tempo by ", { name: "TEMPO" }];
  blockComponents["music_tempo"] = ["(tempo)"];

  blockComponents["event_whenflagclicked"] = ["when flag clicked"];
  blockComponents["event_whenkeypressed"] = ["when ", { name: "", dropdownFieldIndex: 1 }, " key pressed"];
  blockComponents["event_whenthisspriteclicked"] = ["when this sprite clicked"];
  blockComponents["event_whenbackdropswitchesto"] = ["when backdrop switches to ", { name: "", dropdownFieldIndex: 1 }];

  blockComponents["event_whengreaterthan"] = [
    "when ",
    { name: "VALUE", dropdownFieldIndex: 1 },
    " > ",
    { name: "VALUE" },
  ];

  blockComponents["event_whenbroadcastreceived"] = ["when I receive ", { name: "", dropdownFieldIndex: 1 }];
  blockComponents["event_broadcast"] = ["broadcast ", { name: "BROADCAST_INPUT" }];
  blockComponents["event_broadcastandwait"] = ["broadcast ", { name: "BROADCAST_INPUT" }, " and wait"];

  function getBlockCode2(block) {
    let output = "";

    blockComponents[block.type].forEach((component) => {
      if (typeof component === "string") {
        output += component;
      } else {
        if (component.function) output += component.function(block.getInput(component.name));
        else if (component.dropdownFieldIndex)
          output += `[${block.getInput(component.name).fieldRow[component.dropdownFieldIndex].text_} v]`;
        else {
          const connection = block.getInput(component.name).connection;
          output += connection ? getBlockCode2(connection.targetBlock()) : "<>";
        }
      }
    });

    return output;
  }

  addon.tab.createBlockContextMenu(
    (items, block) => {
      const nextBlock = block.getNextBlock();

      items.push(
        {
          enabled: true,
          text: "Log Block Info",
          callback: () => {
            console.log(block.type);
            block.inputList.forEach((input) => console.log(input));
          },
          separator: true,
        },
        {
          enabled: true,
          text: "Log Block Type",
          callback: () => {
            console.log(block.type);
          },
        },
        {
          enabled: true,
          text: "Log Inputs",
          callback: () => {
            block.inputList.forEach((input) => console.log(input));
          },
        }
        // {
        //   enabled: true,
        //   text: "Log Input Block Types",
        //   callback: () => {
        //     block.inputList.forEach((input) => console.log(`${input.name}: ${input.connection?.targetBlock().type}`));
        //   },
        // }
      );

      if (block.parentBlock_ === null && nextBlock) {
        items.push(
          {
            enabled: true,
            text: "Copy Scratchblocks Code for Block",
            callback: () => {
              console.log(getBlockCode2(block));
            },
            separator: true,
          },
          {
            enabled: true,
            text: "Copy Scratchblocks Code for Script",
            callback: () => {
              console.log(getScriptCode(block, []).join("\n"));
            },
          }
        );
      } else {
        items.push({
          enabled: true,
          text: "Copy Scratchblocks Code",
          callback: () => {
            console.log(getBlockCode2(block));
          },
          separator: true,
        });
      }

      return items;
    },
    { blocks: true, flyout: true }
  );

  function getScriptCode(block, input) {
    input.push(getBlockCode2(block));

    const nextBlock = block.getNextBlock();
    return nextBlock ? getScriptCode(nextBlock, input) : input;
  }

  // function getBlockCode(block) {
  //   let output = [];

  //   block.inputList.forEach((input) => {
  //     input.fieldRow.forEach((field) => {
  //       const text = field.getText();

  //       output.push(
  //         (() => {
  //           switch (field.constructor) {
  //             case Blockly.FieldLabel:
  //             case Blockly.FieldVariableGetter:
  //               return text;
  //             case Blockly.FieldDropdown:
  //               return `[${text} v]`;
  //             case Blockly.FieldNumber:
  //             case Blockly.FieldAngle:
  //               if (!isNaN(text) || text.trim() === "Infinity") return `(${text})`;
  //             case Blockly.FieldTextInput:
  //             case Blockly.FieldColor:
  //             case Blockly.FieldColourSlider:
  //             case Blockly.FieldDate:
  //               return `[${text}]`;
  //           }
  //         })()
  //       );
  //     });

  //     if (input.connection) {
  //       const targetBlock = input.connection.targetBlock();

  //       if (targetBlock)
  //         output.push(
  //           targetBlock.outputShape_ === Blockly.OUTPUT_SHAPE_HEXAGONAL
  //             ? `<${getBlockCode(targetBlock)}>`
  //             : getBlockCode(targetBlock)
  //         );
  //     }
  //   });

  //   return output.join(" ");
  // }
}
