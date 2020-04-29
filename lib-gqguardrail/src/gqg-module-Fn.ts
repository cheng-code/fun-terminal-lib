/*
 * Copyright 2020 Carson Cheng
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

// What is this and why?  Because CORS prevent use of modules locally:
// https://stackoverflow.com/questions/50197495/javascript-modules-and-cors

const exportedNames = [
    "PLAYGROUND_HEIGHT",
    "PLAYGROUND_WIDTH",
    "consolePrint",
    "createCircle",
    "createCircleInGroup",
    "createContainerIterator",
    "createGraph",
    "createGraphInGroup",
    "createGraphWithOptions",
    "createGroupInPlayground",
    "createInterpolatedGraph",
    "createInterpolatedGraphInGroup",
    "createLine",
    "createLineInGroup",
    "createOval",
    "createOvalInGroup",
    "createRect",
    "createRectInGroup",
    "createSpriteInGroup",
    "createTextInputSpriteInGroup",
    "createTextSpriteInGroup",
    "currentDate",
    "deleteSavedDictionary",
    "disableContextMenu",
    "drawCircle",
    "drawGraph",
    "drawInterpolatedGraph",
    "drawLine",
    "drawOval",
    "drawRect",
    "enableContextMenu",
    "forEachSpriteSpriteCollisionDo",
    "forEach2SpritesHit",
    "when2SpritesHit",
    "forEachSpriteFilteredCollisionDo",
    "forEachSpriteFilteredHit",
    "forEachSpriteGroupCollisionDo",
    "forEachSpriteGroupHit",
    "getKeyState",
    "getMouseButton1",
    "getMouseButton2",
    "getMouseButton3",
    "getMouseX",
    "getMouseY",
    "getSavedDictionary",
    "hideMouseCursor",
    "newGQAnimation",
    "removeSprite",
    "saveDictionaryAs",
    "setGqDebugFlag",
    "setGqPlaygroundDimensions",
    "showMouseCursor",
    "sprite",
    "spriteExists",
    "spriteGetHeight",
    "spriteGetWidth",
    "spriteGetX",
    "spriteGetY",
    "spriteGetZ",
    "spriteGroupNameFormatIsValid",
    "spriteHitDir",
    "spriteHitDirection",
    "spriteId",
    "spriteObject",
    "spritePauseAnimation",
    "spriteResumeAnimation",
    "spriteRotate",
    "spriteScale",
    "spriteSetAnimation",
    "spriteSetHeight",
    "spriteSetWidth",
    "spriteSetWidthHeight",
    "spriteSetX",
    "spriteSetXY",
    "spriteSetXYZ",
    "spriteSetY",
    "spriteSetZ",
    "textInputSpriteReset",
    "textInputSpriteSetHandler",
    "textInputSpriteSetString",
    "textInputSpriteString",
    "textInputSpriteSubmitted",
    "throwOnImgLoadError",
    "ANIMATION_HORIZONTAL",
    "ANIMATION_VERTICAL",
    "ANIMATION_ONCE",
    "ANIMATION_PINGPONG",
    "ANIMATION_CALLBACK",
    "ANIMATION_MULTI"
];

const Fn: Record<string, any> = {};
for (let x of exportedNames) {
    Fn[x] = eval(x);
}
