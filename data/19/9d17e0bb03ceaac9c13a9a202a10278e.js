callback({
  "levelNumber": 19,
  "size": 10,
  "steps": 129,
  "successRatio": 1,
  "author": "jlmitch5",
  "hash": "9d17e0bb03ceaac9c13a9a202a10278e",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 10/10 - SPEED 111/82 --\n\na:\n    INBOX\n    COPYTO   0\nb:\nc:\n    OUTBOX\n    COPYFROM 0\n    JUMPN    d\n    JUMPZ    a\n    BUMPDN   0\n    JUMP     c\nd:\n    BUMPUP   0\n    JUMP     b\n\n"
});