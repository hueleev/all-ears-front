import { getBoardDtl } from 'modules/boardReducer';
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
   Badge,
   Button,
   Card,
   CardBody,
   Modal,
   Col
} from "reactstrap";
import Modals from './IndexSections/Modals';

const Board = React.memo(function Board({ board, deleteBoard }) {
   const { board : { data } } = useSelector(state => state.boardReducer);
   const onClick = useCallback((boardSeq) => {
      deleteBoard(boardSeq);
   });

   const dispatch = useDispatch();
   const [toggleYn, setToggleYn] = useState(false);
   const toggleModal = () => {
      setToggleYn(!toggleYn);
      dispatch(getBoardDtl(board.boardSeq));
   }

   return (
      <Col lg="4" key={board.boardSeq}>
         <Card className="card-lift--hover shadow border-0 mb-5" onClick={() => toggleModal("defaultModal")}>
            <CardBody className="py-5">
               <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                  <i className="ni ni-check-bold" />
               </div>
               <h6 className="text-primary text-uppercase">
                  {board.boardTitle}
               </h6>
               <p className="description mt-3">
                  {board.boardCn}
               </p>
               {/* <div>
                     <Badge color="primary" pill className="mr-1">
                        design
                     </Badge>
                     <Badge color="primary" pill className="mr-1">
                        system
                     </Badge>
                     <Badge color="primary" pill className="mr-1">
                        creative
                     </Badge>
                  </div>  */}
               <Button
                  type="button"
                  color="danger"
                  href="#pablo"
                  onClick={e => { e.preventDefault(); onClick(board.boardSeq) }}
               >
                  DELETE
                  </Button>
               <Modal
                  className="modal-dialog-centered"
                  isOpen={toggleYn}
                  toggle={() => toggleModal("defaultModal")}
               >
                  {
                     (
                        !data ? null :
                        <>
                        <div className="modal-header">
                           <h6 className="modal-title" id="modal-title-default">
                              {data.boardTitle}
                           </h6>
                           <button
                              aria-label="Close"
                              className="close"
                              data-dismiss="modal"
                              type="button"
                              onClick={() => toggleModal("defaultModal")}
                           >
                              <span aria-hidden={true}>×</span>
                           </button>
                        </div>
                        <div className="modal-body">
                           <p>
                              {data.boardCn}
                           </p>
                           <p>
                           {data.boardPhotoSbst != null ? <img style={{width: "300px"}} src={"data:image/jpeg; base64, "+ data.boardPhotoSbst}/> : null}
                           </p>
                        </div>
                        </>
                     )
                  }
                  <div className="modal-footer">
                     <Button
                        className="ml-auto"
                        color="link"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => toggleModal("defaultModal")}
                     >
                        Close
                </Button>
                  </div>
               </Modal>
            </CardBody>
         </Card>
      </Col>
   );
});

function BoardList({ boards, deleteBoard }) {
   return (
      <>
         {boards.map(board => (
            <Board key={board.boardSeq} board={board} deleteBoard={deleteBoard} />
         ))}
      </>
   );
}

export default React.memo(BoardList);