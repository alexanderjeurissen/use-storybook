import React, { useState, useContext, createContext } from "react";

type ObjType = {[key: string]: any};

export const StoryContext = createContext({});

export const useStoryBook = () => useContext(StoryContext);

interface ProviderProps {
  storyFn?: any,
  storyContext?: ObjType,
  children: React.Node
}
export const StoryProvider:React.FC<ProviderProps> = ({ storyFn, storyContext, children }) => (
  <StoryContext.Provider value={{ storyFn, storyContext }}>
    {children}
  </StoryContext.Provider>
);

export const withStoryContext = (storyFn: () => React.Node, storyContext: ObjType) => (
  <StoryProvider storyFn={storyFn} storyContext={storyContext}>
    {storyFn()}
  </StoryProvider>
);
