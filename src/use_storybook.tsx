import * as React from 'react';
import { useState, useContext, createContext, Node } from "react";

type ObjType = {[key: string]: any};

export const StoryContext = createContext({});

export const useStoryBook = () => useContext(StoryContext);

interface ProviderProps {
  storyFn?: () => Node,
  storyContext?: ObjType,
  children: Node
}
export const StoryProvider:React.FC<ProviderProps> = ({ storyFn, storyContext, children }) => (
  <StoryContext.Provider value={{ storyFn, storyContext }}>
    {children}
  </StoryContext.Provider>
);

export const withStoryContext = (storyFn: () => Node, storyContext: ObjType) => (
  <StoryProvider storyFn={storyFn} storyContext={storyContext}>
    {storyFn()}
  </StoryProvider>
);
