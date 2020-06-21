import React, { useState, useContext, createContext } from "react";

type ObjType = {[key: string]: any};

export const StoryContext = createContext({});

export const useStoryBook = () => useContext(StoryContext);

interface ProviderProps {
  storyFn?: any,
  storyContext?: ObjType,
  children: React.Node
}
export const StoryBookProvider:React.FC<ProviderProps> = ({ storyFn, storyContext, children }) => (
  <StoryContext.Provider value={{ storyFn, storyContext }}>
    {children}
  </StoryContext.Provider>
);

export const withStoryContext = (storyFn: any, storyContext: ObjType) => (
  <StoryContext.Provider value={{ storyFn, storyContext }}>
    {storyFn()}
  </StoryContext.Provider>
);
