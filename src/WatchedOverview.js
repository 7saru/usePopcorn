import WatchedList from "./WatchedList";
import SelectedMovie from "./SelectedMovie";
import { useLocalStorage } from "./CustomHooks/useLocalStorage";

function WatchedOverview({ closeWatched, setCloseWatched, openedMovie, closeWList, setCloseWList, setOpenedMovie }) {
  const [watchedList, setWatchedList] = useLocalStorage([], "watchedList");
  let totalRuntime = 0;
  watchedList.length > 0 &&
    watchedList.forEach(
      (movie) => (totalRuntime += Number.isInteger(parseInt(movie.runtime)) ? parseInt(movie.runtime) : 0)
    );

  return (
    <section id="watched">
      <div className="watched-overview">
        <h2>Movies you watched</h2>
        <ul>
          <li>
            🎬<span>{watchedList?.length}</span> movies
          </li>
          <li>
            ⌛<span>{totalRuntime} </span>
            min
          </li>
        </ul>
      </div>
      {!closeWatched && (
        <SelectedMovie
          openedMovie={openedMovie}
          watchedList={watchedList}
          setWatchedList={setWatchedList}
          setCloseWatched={setCloseWatched}
          setCloseWList={setCloseWList}
        />
      )}
      <WatchedList
        watchedList={watchedList}
        setWatchedList={setWatchedList}
        closeWList={closeWList}
        setCloseWList={setCloseWList}
        setCloseWatched={setCloseWatched}
        setOpenedMovie={setOpenedMovie}
      />
    </section>
  );
}

export default WatchedOverview;
