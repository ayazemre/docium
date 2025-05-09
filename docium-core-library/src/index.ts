// Data Models for State Representation and Validation
export { Document, documentSchema } from "./data/document";
export { Page, pageSchema } from "./data/page";
export {
  BoldNode,
  ItalicNode,
  LinkNode,
  TextNode,
  InlineNode,
  boldNodeSchema,
  textNodeSchema,
  inlineNodeSchema,
  italicNodeSchema,
  linkNodeSchema,
} from "./data/paragraph";

export { ParagraphBlock, paragraphBlockSchema } from "./data/blocks";

// Operation Models for State Mutations
export {
  DocumentOperation,
  documentOperationSchema,
} from "./models/operations/documentOperations";

export {
  PageOperation,
  pageOperationSchema,
  CreatePageOperation,
  createPageOperationSchema,
  UpdatePageOperation,
  updatePageOperationSchema,
  DeletePageOperation,
  deletePageOperationSchema,
} from "./models/operations/pageOperations";

export {
  BlockOperation,
  blockOperationSchema,
  CreateBlockOperation,
  createBlockOperationSchema,
  UpdateBlockOperation,
  updateBlockOperationSchema,
  DeleteBlockOperation,
  deleteBlockOperationSchema,
} from "./models/operations/blockOperations";

export {
  ParagraphOperation,
  paragraphOperationSchema,
  InsertTextOperation,
  insertTextOperationSchema,
  DeleteTextOperation,
  deleteTextOperationSchema,
} from "./models/operations/paragraphOperations";
