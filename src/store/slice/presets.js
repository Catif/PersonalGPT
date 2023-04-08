const { createSlice } = require("@reduxjs/toolkit");

export const presets = createSlice({
  name: "presets",
  initialState: [
    {
      id: 1,
      name: "Preset 1",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
      history: [
        {
          id: 1,
          title: "Salutation with ChatGPT",
          date: "2021-05-01",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
        {
          id: 2,
          title: "Salutation with ChatGPT",
          date: "2021-04-30",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
        {
          id: 3,
          title: "Salutation with ChatGPT",
          date: "2021-04-29",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Preset 2",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
      history: [
        {
          id: 1,
          title: "Salutation with ChatGPT",
          date: "2021-05-01",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
        {
          id: 2,
          title: "Salutation with ChatGPT",
          date: "2021-04-30",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
        {
          id: 3,
          title: "Salutation with ChatGPT",
          date: "2021-04-29",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Preset 3",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
      history: [
        {
          id: 1,
          title: "Salutation with ChatGPT",
          date: "2021-05-01",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
        {
          id: 2,
          title: "Salutation with ChatGPT",
          date: "2021-04-30",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
        {
          id: 3,
          title: "Salutation with ChatGPT",
          date: "2021-04-29",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Preset 4",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
      history: [
        {
          id: 1,
          title: "Salutation with ChatGPT",
          date: "2021-05-01",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
        {
          id: 2,
          title: "Salutation with ChatGPT",
          date: "2021-04-30",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
        {
          id: 3,
          title: "Salutation with ChatGPT",
          date: "2021-04-29",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Preset 5",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
      history: [
        {
          id: 1,
          title: "Salutation with ChatGPT",
          date: "2021-05-01",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
        {
          id: 2,
          title: "Salutation with ChatGPT",
          date: "2021-04-30",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
        {
          id: 3,
          title: "Salutation with ChatGPT",
          date: "2021-04-29",
          messages: [
            {
              role: "system",
              content: "Your name is ChatGPT.",
            },
            {
              role: "user",
              content: "Hello ChatGPT",
            },
            {
              role: "assistant",
              content: "Hello, how can I help you ?",
            },
          ],
        },
      ],
    },
  ],
  reducers: {
    addPreset: (state, action) => {
      state.push(action.payload);
    },
    removePreset: (state, action) => {
      state = state.filter((preset) => preset.id !== action.payload);
    },
    updatePreset: (state, action) => {
      state = state.map((preset) => {
        if (preset.id === action.payload.id) {
          return action.payload;
        }
        return preset;
      });
      return state;
    },
  },
});
