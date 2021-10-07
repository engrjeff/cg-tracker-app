import React, { useState } from "react";

import { useLessonSeries } from "../../../firebase/LessonSeriesContext";
import { getDateTime } from "../helpers";

import menudots from "../../../images/menudots.svg";
import UpdateSeriesModal from "./UpdateSeriesModal";
import DeleteSeriesModal from "./DeleteSeriesModal";
import Menu from "../../../components/Menu";

function SeriesComponent({ item }) {
  const [menuShown, setMenuShown] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const { updateSeries, deleteSeries } = useLessonSeries();

  function handleMenuItemSelect(menuItem) {
    switch (menuItem) {
      case "Update":
        return setActiveModal("update");
      case "Delete":
        return setActiveModal("delete");
      default:
        return;
    }
  }

  const handleShowMenu = (e) => {
    e.stopPropagation();
    setMenuShown(true);
  };

  const handleUpdate = (title) => {
    updateSeries(item.id, title);
    setActiveModal(null);
  };

  const handleDelete = () => {
    deleteSeries(item.id);
    setActiveModal(null);
  };

  return (
    <>
      {activeModal === "update" && (
        <UpdateSeriesModal
          currentSeries={item}
          onClose={() => setActiveModal(null)}
          onUpdate={handleUpdate}
        />
      )}
      {activeModal === "delete" && (
        <DeleteSeriesModal
          title={item.title}
          onClose={() => setActiveModal(null)}
          onDelete={handleDelete}
        />
      )}
      <div className='d-flex align-items-center flex-1'>
        <p className='text-size-14 fw-600 flex-1'>
          {item.title} ({item.lessons ? item.lessons?.length : 0})
        </p>
        <p className='text-size-11 flex-1 hide-sm'>
          Created on: {getDateTime(item.createdAt)}
        </p>
        <div className='ml-auto circle' onClick={handleShowMenu}>
          <img src={menudots} alt='menu dots' />
          <Menu
            menuItems={["Update", "Delete"]}
            show={menuShown}
            onClose={() => setMenuShown(false)}
            onItemClick={handleMenuItemSelect}
          />
        </div>
      </div>
    </>
  );
}

export default SeriesComponent;
